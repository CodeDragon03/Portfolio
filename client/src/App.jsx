import { lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalFooter, CursorFollower } from './components/index.jsx';

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
                <motion.div className="container">
                    {/* Main */}
                    <motion.main className="main">
                        {/* Cursor Follower */}
                        <CursorFollower />
                        {/* All the routes */}
                        <AnimatePresence mode="wait">
                            <Routes>
                                <Route path="/">
                                    {/* Home  */}
                                    <Route element={<HomeLayout />}>
                                        <Route
                                            index
                                            element={
                                                <Suspense
                                                    fallback={<HomeLoader />}
                                                >
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
                                                    fallback={
                                                        <CaseStudyLoader />
                                                    }
                                                >
                                                    <CaseStudy />
                                                </Suspense>
                                            }
                                        />
                                    </Route>
                                    {/* Research */}
                                    <Route
                                        path="research"
                                        element={<ResearchLayout />}
                                    >
                                        <Route
                                            index
                                            element={
                                                <Suspense
                                                    fallback={
                                                        <ResearchLoader />
                                                    }
                                                >
                                                    <Research />
                                                </Suspense>
                                            }
                                        />
                                    </Route>
                                </Route>
                                {/* Not Found */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </AnimatePresence>
                    </motion.main>
                    {/* Footer */}
                    <GlobalFooter />
                </motion.div>
            </BrowserRouter>
        </>
    );
};

export default App;
