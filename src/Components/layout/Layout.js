import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
    return (
        <div className="container-fluid">
            <div className="page-main">
                <Header />

                <div className="wrapper">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Layout;