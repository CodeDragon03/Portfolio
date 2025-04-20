import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ScrambleText from '../../utils/ScrambleText';
import { ArrowRightIcon } from 'lucide-react';

const arrowAnimation = {
    hidden: { opacity: 0 },
    hover: {
        opacity: 1,
        rotate: '-45deg',
        transition: { duration: 0.5, ease: 'easeInOut' },
    },
};

const hoverAnimation = {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

const NavbarItem = ({ to, text }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.li
            variants={hoverAnimation}
            initial="hidden"
            animate="visible"
            whileHover={{
                backgroundColor: 'var(--navbar-bg-color)',
                color: 'var(--navbar-color)',
            }}
            className="navbar-navigation-item"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            <Link to={to} className="navbar-navigation-link">
                <ScrambleText>{text}</ScrambleText>
            </Link>
            <motion.span
                variants={arrowAnimation}
                initial="hidden"
                animate={isHovered ? 'hover' : 'hidden'}
            >
                <ArrowRightIcon />
            </motion.span>
        </motion.li>
    );
};

export default NavbarItem;
