import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
    GlobalHeader,
    GlobalNavigationBar,
    GlobalFooter,
    CursorFollower,
    AnimatedRoutes,
} from './components/index.jsx';

import {
    HomeLoader,
    CaseStudyLoader,
    ResearchLoader,
    HomeLayout,
    CaseStudyLayout,
    ResearchLayout,
    NotFound,
} from './pages/index';

const Home = lazy(() => import('./pages/home/index.jsx'));
const CaseStudy = lazy(() => import('./pages/projects/index.jsx'));
const Research = lazy(() => import('./pages/research/index.jsx'));

const App = () => {
    return (
        <>
            <BrowserRouter>
                {/* Header */}
                <GlobalHeader>
                    <GlobalNavigationBar />
                </GlobalHeader>
                {/* Main */}
                <motion.main className="main">
                    {/* Cursor Follower */}
                    <CursorFollower />
                    {/* All the routes */}
                    <Routes>
                        <Route path="/" element={<AnimatedRoutes />}>
                            {/* Home  */}
                            <Route element={<HomeLayout />}>
                                <Route
                                    index
                                    element={
                                        <Suspense fallback={<HomeLoader />}>
                                            <Home />
                                        </Suspense>
                                    }
                                />
                            </Route>
                            {/* Case Study */}
                            <Route
                                path="case-study"
                                element={<CaseStudyLayout />}
                            >
                                <Route
                                    index
                                    element={
                                        <Suspense
                                            fallback={<CaseStudyLoader />}
                                        >
                                            <CaseStudy />
                                        </Suspense>
                                    }
                                />
                            </Route>
                            {/* Research */}
                            <Route path="research" element={<ResearchLayout />}>
                                <Route
                                    index
                                    element={
                                        <Suspense fallback={<ResearchLoader />}>
                                            <Research />
                                        </Suspense>
                                    }
                                />
                            </Route>
                        </Route>
                        {/* Not Found */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </motion.main>
                {/* Footer */}
                <GlobalFooter />
            </BrowserRouter>
        </>
    );
};

export default App;
