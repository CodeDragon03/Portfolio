import { motion } from 'framer-motion';

const BrandLogo = () => {
    return (
        <>
            <span className="logo-content">
                {Array.from('Jay').map((letter, index) => (
                    <motion.span
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index}
                    >
                        {letter}
                    </motion.span>
                ))}
            </span>
        </>
    );
};

export default BrandLogo;
