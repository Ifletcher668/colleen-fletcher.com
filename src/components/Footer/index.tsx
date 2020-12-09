import React from 'react';
import config from '../../../config/website';

import {FaDiscord, FaPinterest, FaFacebook, FaInstagram} from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer role="footer" className="site-footer">
            <div className="content">
                <nav className="footer-nav">
                    <ul className="footer-navbar">
                        <li>
                            <a href={config.socials.discord}>
                                <FaDiscord />
                            </a>
                        </li>
                        <li>
                            <a href={config.socials.facebook}>
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href={config.socials.instagram}>
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href={config.socials.pintrest}>
                                <FaPinterest />
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="info">
                    <h4>Colleen Fletcher 1994 - {new Date().getFullYear()}</h4>
                    <h5>Site Design by Colleen and Isiah Fletcher</h5>
                    <h5>
                        Developed by{' '}
                        <a href="https://Isiahfletcher.com" target="_blank">
                            {' '}
                            Isiah Fletcher
                        </a>
                    </h5>
                    <h6>Sitemap | Disclaimer</h6>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
