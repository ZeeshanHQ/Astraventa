import { motion } from "framer-motion";

export const MonochromeLogo = ({ className = "", size = 48 }) => {
  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-black overflow-visible"
      >
        {/* Main Diagonal Engineering Stroke */}
        <motion.path
          d="M25 25L75 75"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Parallel Service Units */}
        <motion.path
          d="M20 45L45 70"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        />
        <motion.path
          d="M20 70L30 80"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        />

        {/* The Anchor Point (Dot) */}
        <motion.circle
          cx="20"
          cy="90"
          r="6"
          fill="currentColor"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
        />

        {/* The Growth Elbow (Top Right) */}
        <motion.path
          d="M65 20H85V40"
          stroke="currentColor"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        />
      </svg>
    </motion.div>
  );
};
