import React from "react";
import "../index.css";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>© {year} Keeper App. All rights reserved.</p>
        </footer>
    );
}

export default Footer;