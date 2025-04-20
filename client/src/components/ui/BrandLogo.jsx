import { motion } from 'framer-motion';
import { Logo } from '../../assets/index';

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
                        className="logo-letter"
                    >
                        {letter}
                    </motion.span>
                ))}
                <sup className="logo-icon">
                    <motion.img
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        src={Logo}
                        alt="Logo"
                        className="logo-icon-image"
                        loading="lazy"
                    />
                </sup>
            </span>
        </>
    );
};

export default BrandLogo;
