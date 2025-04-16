import { Outlet } from "react-router-dom";
import { GlobalHeader, GLobalNavigationBar } from "../../components/index";

const HomeLayout = () => {
  return (
    <>
      <GlobalHeader>
        <GLobalNavigationBar />
      </GlobalHeader>
      <Outlet />
    </>
  );
};

export default HomeLayout;
