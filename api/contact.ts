import type { VercelRequest, VercelResponse } from '@vercel/node';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    company: z.string().optional(),
    phone: z.string().optional(),
    service: z.string().min(1),
    budget: z.string().optional(),
    timeline: z.string().optional(),
    message: z.string().min(10),
});

// Simple in-memory rate limiting (Note: This is per-instance, for better results use KV)
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const LIMIT = 3; // 3 requests
const WINDOW = 60 * 60 * 1000; // 1 hour

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const ip = (req.headers['x-forwarded-for'] as string) || 'anonymous';
    const now = Date.now();
    const userData = rateLimit.get(ip) || { count: 0, lastReset: now };

    if (now - userData.lastReset > WINDOW) {
        userData.count = 0;
        userData.lastReset = now;
    }

    if (userData.count >= LIMIT) {
        return res.status(429).json({ error: 'Too many requests. Please try again in an hour.' });
    }

    userData.count++;
    rateLimit.set(ip, userData);

    try {
        const data = contactSchema.parse(req.body);

        // Forward to Formspree
        const response = await fetch('https://formspree.io/f/xpwoaolv', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });

        if (response.ok) {
            return res.status(200).json({ success: true });
        } else {
            const errorData = await response.json();
            return res.status(response.status).json(errorData);
        }
    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(400).json({ error: 'Invalid input data', details: error.errors });
        }
        return res.status(500).json({ error: 'Internal server error' });
    }
}
