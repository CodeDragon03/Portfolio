import AnnouncementBar from "../ui/AnnouncementBar";

const GlobalHeader = ({ children }) => {
  return (
    <>
      <header className="header">
        <AnnouncementBar />
        {children}
      </header>
    </>
  );
};

export default GlobalHeader;
