import { lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { GlobalFooter, CursorFollower } from './components/index.jsx';

import {
    HomeLayout,
    HomeLoader,
    CaseStudyLayout,
    CaseStudyLoader,
    ResearchLayout,
    ResearchLoader,
    NotFound,
} from './pages/index';

const Home = lazy(() => import('./pages/home/index.jsx'));
const CaseStudy = lazy(() => import('./pages/projects/index.jsx'));
const Research = lazy(() => import('./pages/research/index.jsx'));

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className="container">
                    {/* Main */}
                    <AnimatePresence mode="wait">
                        <main className="main">
                            {/* Cursor Follower */}
                            <CursorFollower />

                            {/* All the routes */}
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
                        </main>
                    </AnimatePresence>
                    {/* Footer */}
                    <GlobalFooter />
                </div>
            </BrowserRouter>
        </>
    );
};

export default App;
