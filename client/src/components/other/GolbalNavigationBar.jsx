import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import BrandLogo from '../ui/BrandLogo';
import { ScrambleText } from '../../utils/index';

const GLobalNavigationBar = () => {
    return (
        <>
            <motion.nav className="navbar-global">
                <motion.div className="navbar-logo">
                    <BrandLogo />
                </motion.div>
                <motion.div className="navbar-navigation">
                    <ul className="navbar-navigation-list">
                        <motion.li
                            whileHover={{
                                backgroundColor: 'var(--color-primary)',
                                color: 'var(--color-white)',
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="navbar-navigation-item"
                        >
                            <Link to="/" className="navbar-navigation-link">
                                <ScrambleText>Harbour</ScrambleText>
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{
                                backgroundColor: 'var(--color-primary)',
                                color: 'var(--color-white)',
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="navbar-navigation-item"
                        >
                            <Link
                                to="/case-study"
                                className="navbar-navigation-link"
                            >
                                <ScrambleText>Case Study</ScrambleText>
                            </Link>
                        </motion.li>
                        <motion.li
                            whileHover={{
                                backgroundColor: 'var(--color-primary)',
                                color: 'var(--color-white)',
                            }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="navbar-navigation-item"
                        >
                            <Link
                                to="/research"
                                className="navbar-navigation-link"
                            >
                                <ScrambleText>Research</ScrambleText>
                            </Link>
                        </motion.li>
                    </ul>
                </motion.div>
            </motion.nav>
        </>
    );
};

export default GLobalNavigationBar;
