import { motion } from 'framer-motion';

export const YSlide = ({ children }) => {
    
    return (
        <motion.div
            initial={{ opacity: 0, y: "60px"}}
            whileInView={{ opacity: 1, y: "0px"}}
            transition={{ duration: 0.5, delay: 0.1 }}
        >
            {children}
        </motion.div>
    )
}

export default YSlide;