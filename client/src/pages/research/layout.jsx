import { Outlet } from "react-router-dom";
import { GlobalHeader, LocalNavigationBar } from "../../components";

const ResearchLayout = () => {
  return (
    <>
      <GlobalHeader>
        <LocalNavigationBar />
      </GlobalHeader>
      <Outlet />
    </>
  );
};

export default ResearchLayout;
