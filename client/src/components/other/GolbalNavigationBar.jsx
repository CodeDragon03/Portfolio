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
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="navbar-navigation-item"
                        >
                            <Link to="/" className="navbar-navigation-link">
                                <ScrambleText>Harbour</ScrambleText>
                            </Link>
                        </motion.li>
                        <motion.li
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
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
                            initial={{ opacity: 0, x: 300 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
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
