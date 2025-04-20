import { Outlet } from 'react-router-dom';
import { GlobalHeader, GlobalNavigationBar } from '../../components/index';

const HomeLayout = () => {
    return (
        <>
            <GlobalHeader>
                <GlobalNavigationBar />
            </GlobalHeader>
            <Outlet />
        </>
    );
};

export default HomeLayout;
