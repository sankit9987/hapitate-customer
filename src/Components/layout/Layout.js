import React from "react";
import Footer from "./Footer";
import Header2 from "./Header2";

function Layout({ children }) {
    return (
        <div className="container-fluid">
            <div className="page-main">
                <Header2 />

                <div className="wrapper">
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Layout;