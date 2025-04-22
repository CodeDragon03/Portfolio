import { useLocation, useOutlet } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

/**
 *
 * @returns TODO:
 *
 * - Create a custom hook to handle the animation logic
 * - Custom loading animation for each route
 *
 */

const AnimatedRoutes = () => {
    const location = useLocation();
    const outlet = useOutlet();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={location.pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                {outlet}
            </motion.div>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
