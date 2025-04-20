import { motion } from 'framer-motion';
import { Logo } from '../../assets/index';

const BrandLogo = () => {
    return (
        <>
            <span className="logo-content">
                {Array.from('Jay').map((letter, index) => (
                    <motion.span
                        whileHover={{ scale: 1.1, rotate: '10deg' }}
                        key={index}
                        className="logo-letter"
                    >
                        {letter}
                    </motion.span>
                ))}
                <sup className="logo-icon">
                    <img
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
