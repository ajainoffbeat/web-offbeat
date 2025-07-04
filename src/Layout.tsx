import React, { ReactNode } from "react";
import Header from "./components/nav/Header";
import ScrollToTop from "./components/ScrollToTop";
import Lines from "./components/Lines";
import ToasterContext from "./components/ToastContext";
import Footer from "./components/Footer";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Lines />
      <Header />
      <ToasterContext /> 
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
