import React from 'react';
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaCopyright,
} from 'react-icons/fa';
import { RiInformationLine } from 'react-icons/ri';
import config from '../../../../config/website';
import Divider from '../../Divider';
import { Link, Span } from '../../Elements';
import Heading from '../../Heading';

const Footer = (): JSX.Element => {
  return (
    <footer role="footer" className="site-footer">
      <div className="footer-content">
        <nav className="footer-nav">
          <ul className="footer-navbar">
            <li>
              <Link
                href={config.socials.discord}
                color="coffee"
                target="_blank"
              >
                <FaDiscord />
              </Link>
            </li>

            <li>
              <Link
                href={config.socials.facebook}
                color="coffee"
                target="_blank"
              >
                <FaFacebook />
              </Link>
            </li>

            <li>
              <Link
                href={config.socials.instagram}
                color="coffee"
                target="_blank"
              >
                <FaInstagram />
              </Link>
            </li>

            <li>
              <Link
                href={config.socials.pinterest}
                color="coffee"
                target="_blank"
              >
                <FaPinterest />
              </Link>
            </li>
          </ul>
        </nav>

        <div className="footer-info">
          <Heading level={4}>
            <FaCopyright /> Colleen Fletcher 1994 - {new Date().getFullYear()}
          </Heading>

          <Heading level={5}>
            Let's get in touch!{' '}
            <Link color="lightSlateGray" href="tel:208-841-9062">
              Phone
            </Link>{' '}
            or{' '}
            <Link
              color="lightSlateGray"
              href="mailto:colleenfletcher3@gmail.com"
              target="_blank"
            >
              email
            </Link>
          </Heading>

          <Divider lineColor="aterrima" type="standard" />

          <Heading level={4}>Designed by Colleen and her son, Isiah</Heading>

          <Heading level={5}>
            Developed by{' '}
            <Link
              color="lightSlateGray"
              href="https://Isiahfletcher.com"
              target="_blank"
            >
              {' '}
              Isiah Fletcher
            </Link>
          </Heading>

          {/* // TODO: Make disclaimer a modal */}
          <Heading level={6}>
            <Span size="small">
              <Link
                color="lightSlateGray"
                href="https://colleen-fletcher.com/sitemap.xml"
              >
                Sitemap
              </Link>{' '}
            </Span>
            |{' '}
            <Span
              size="small"
              className="site-disclaimer"
              title="Disclaimer: By agreeing to use the services and guidance of Colleen Fletcher you agree that you understand and know all information is not a diagnosis, nor does it take the place of any medical, legal or financial advice. All information given is educational and is to be used to enhance your knowledge and ability to act in a positive manner in matters concerning your personal wholistic health care. You know your progress is dependent upon your commitment to your goals and that there are no guarantees as to the result or progress to be made. You understand that the success of the treatment is dependent upon your action to your goals. You must be 18 years of age or have a written release from a parent or legal guardian"
            >
              Disclaimer <RiInformationLine style={{ display: 'inline' }} />
            </Span>
          </Heading>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
