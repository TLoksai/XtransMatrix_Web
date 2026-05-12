import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer"; 

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ background: "#06080E", minHeight: "100vh", color: "#fff", fontFamily: "'Inter', -apple-system, sans-serif" }}>
      <Header />
      <main style={{ paddingTop: 60 }}>{children}</main> 
      <Footer />
    </div>
  );
};

export default Layout;