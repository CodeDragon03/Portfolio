import { motion } from 'framer-motion';

import BrandLogo from '../ui/BrandLogo';
import NavbarItem from '../ui/NavbarItem';

const GlobalNavigationBar = () => {
    return (
        <motion.nav className="navbar-global">
            <motion.div className="navbar-logo">
                <BrandLogo />
            </motion.div>
            <motion.div className="navbar-navigation">
                <ul className="navbar-navigation-list">
                    <NavbarItem to="/" text="Harbour" />
                    <NavbarItem to="/case-study" text="Case Study" />
                    <NavbarItem to="/research" text="Research" />
                </ul>
            </motion.div>
        </motion.nav>
    );
};

export default GlobalNavigationBar;
