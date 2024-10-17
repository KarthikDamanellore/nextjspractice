import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

// Added comments in the navbar 

const Navbar = () => {
    return (
        <div className={styles.navBarContainerStyles}>
            <div className={styles.leftLogoSection}>Next Js</div>
            <div className={styles.rightMenuItemsSection}>
                <Link className={styles.menuItemStyles} href="/">
                    Home
                </Link>
                <Link className={styles.menuItemStyles} href="/about/about">
                    About
                </Link>
                <Link className={styles.menuItemStyles} href="/contact/contact">
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
