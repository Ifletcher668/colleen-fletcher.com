import React from 'react';
import config from '../../../config/website';

const Footer: React.FC = () => {
    return (
        <footer role="footer" className="site-footer">
            <nav>
                <ul>
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
                <p>Colleen Fletcher</p>
                <p>Site Design by Colleen and Isiah Fletcher</p>
                <p>Developed by Isiah</p>
                <p>1994 - {new Date().getFullYear()}</p>
            </div>
            <div className="sitemap">sitemap</div>
        </footer>
    );
};
export default Footer;
