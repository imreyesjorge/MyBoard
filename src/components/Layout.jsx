import React from "react";

const Layout = ({ children }) => {
  return <main className="w-full min-h-screen flex flex-col">{children}</main>;
};

export default Layout;
