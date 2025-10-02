import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/App.css";

const PageWrapper = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="page-content">{children}</main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
