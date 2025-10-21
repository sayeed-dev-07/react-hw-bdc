import React from 'react';
import mainLogo from '/images/logo.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-transparent sm:footer-horizontal  text-neutral-content items-center p-4">
                <aside className="grid-flow-col items-center">
                    <img src={mainLogo} alt="" />
                    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a>
                        Home
                    </a>
                    <a>
                        About
                    </a>
                    <a>
                        Supports
                    </a>
                    <a>
                        Marketing
                    </a>
                    <a>
                        FAQ
                    </a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;