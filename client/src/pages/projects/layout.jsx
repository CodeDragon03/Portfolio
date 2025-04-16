import { Outlet } from 'react-router-dom';
import { GlobalHeader, LocalNavigationBar } from '../../components/index';

const CaseStudyLayout = () => {
    return (
        <>
            <GlobalHeader>
                <LocalNavigationBar />
            </GlobalHeader>
            <Outlet />
        </>
    );
};

export default CaseStudyLayout;
