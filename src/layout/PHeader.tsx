import React, { ReactNode } from "react";
import { Layout } from "antd";

const { Header } = Layout;

interface PHeaderProps {
  children: ReactNode;
}

const PHeader: React.FC<PHeaderProps> = ({ children }) => {
  return (
    <>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          color: "white",
          fontSize: "20px",
        }}
      >
        {children}
      </Header>
    </>
  );
};

export default PHeader;
