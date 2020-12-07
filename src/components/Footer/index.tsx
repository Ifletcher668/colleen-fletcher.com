import React from 'react';
import config from '../../../config/website';

const Footer: React.FC = () => {
    return (
        <footer role="footer" className="site-footer">
            <div className="content">
                <nav className="footer-nav">
                    <ul className="footer-navbar">
                        <a href={config.socials.discord}>
                            <li>Discord</li>
                        </a>
                        <a href={config.socials.facebook}>
                            <li>Facebook</li>
                        </a>
                        <a href={config.socials.instagram}>
                            <li>Instagram</li>
                        </a>
                    </ul>
                </nav>
                <div className="info">
                    <h6>Colleen Fletcher</h6>
                    <span>Site Design by Colleen and Isiah Fletcher</span>{' '}
                    <br />
                    <span>Developed by Isiah</span> <br />
                    <span>1994 - {new Date().getFullYear()}</span> <br />
                    <span>sitemap</span>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
