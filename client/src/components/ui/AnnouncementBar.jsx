import React from "react";

const AnnouncementBar = ({ children }) => {
  return (
    <>
      <div className="announcement">{children}</div>
    </>
  );
};

export default AnnouncementBar;
