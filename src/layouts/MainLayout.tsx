import React, { ReactNode } from "react";
import Navbar from "./Navbar";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default MainLayout;
