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
                            <a href={config.socials.discord} target="_blank">
                                <FaDiscord />
                            </a>
                        </li>
                        <li>
                            <a href={config.socials.facebook} target="_blank">
                                <FaFacebook />
                            </a>
                        </li>
                        <li>
                            <a href={config.socials.instagram} target="_blank">
                                <FaInstagram />
                            </a>
                        </li>
                        <li>
                            <a href={config.socials.pinterest} target="_blank">
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
                    {/* // TODO: add link to sitemap, setup sitemap, get disclaimer */}
                    <h6>
                        <a href="https://colleen-fletcher.com/sitemap.xml">
                            Sitemap
                        </a>
                        |{' '}
                        <span title="Disclaimer: By agreeing to use the services and guidance of Colleen Fletcher you agree that you understand and know all information is not a diagnosis, nor does it take the place of any medical, legal or financial advice. All information given is educational and is to be used to enhance your knowledge and ability to act in a positive manner in matters concerning your personal wholistic health care. You know your progress is dependent upon your commitment to your goals and that there are no guarantees as to the result or progress to be made. You understand that the success of the treatment is dependent upon your action to your goals. You must be 18 years of age or have a written release from a parent or legal guardian">
                            {' '}
                            Disclaimer
                        </span>
                    </h6>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
