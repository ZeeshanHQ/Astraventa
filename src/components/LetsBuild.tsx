import { motion } from "framer-motion"
import { LayeredText } from "./ui/layered-text"

export const LetsBuild = () => {
 return (
 <section className="pt-12 pb-6 relative overflow-hidden bg-white dark:bg-black">
 <div className="container relative z-10 mx-auto px-6 text-center">
 <div className="flex justify-center">
 <LayeredText 
 fontSize="80px" 
 fontSizeMd="42px"
 lineHeight={70}
 lineHeightMd={40}
 className="py-12"
 />
 </div>
 </div>
 </section>
 )
}
