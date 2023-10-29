import Footer from "@/components/footer/footer";
import Navbar from "@/components/navbar/navbar";
import React from "react";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
