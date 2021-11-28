import React from 'react';
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from 'react-icons/fa';
import { RiInformationLine } from 'react-icons/ri';
import config from '../../../../config/website';
import Divider from '../../Divider';
import { Anchor } from '../../Elements';
import { Heading } from '../../Text/Heading';
import {
  SiteFooter,
  FooterContent,
  FooterNav,
  FooterNavbar,
  FooterInfo,
  SiteDisclaimer,
} from './styles';

const Footer = (): JSX.Element => (
  <SiteFooter>
    <FooterContent>
      <FooterNav>
        <FooterNavbar>
          <li>
            <Anchor href={config.socials.discord} target="_blank">
              <FaDiscord />
            </Anchor>
          </li>

          <li>
            <Anchor href={config.socials.facebook} target="_blank">
              <FaFacebook />
            </Anchor>
          </li>

          <li>
            <Anchor href={config.socials.instagram} target="_blank">
              <FaInstagram />
            </Anchor>
          </li>

          <li>
            <Anchor href={config.socials.pinterest} target="_blank">
              <FaPinterest />
            </Anchor>
          </li>
        </FooterNavbar>
      </FooterNav>

      <FooterInfo>
        <Heading level="four">
          Colleen Fletcher 1994 - {new Date().getFullYear()}
        </Heading>

        <Heading level="five">
          Let's get in touch!{' '}
          <Anchor color="earth" href="tel:208-841-9062">
            Phone
          </Anchor>{' '}
          or{' '}
          <Anchor
            color="earth"
            href="mailto:colleenfletcher3@gmail.com"
            target="_blank"
          >
            email
          </Anchor>
        </Heading>

        <Divider lineColor="aterrima" type="standard" />

        <Heading level="four">Designed by Colleen and her son, Isiah</Heading>

        <Heading level="five">
          Developed by{' '}
          <Anchor
            color="earth"
            href="https://Isiahfletcher.com"
            target="_blank"
          >
            {' '}
            Isiah Fletcher
          </Anchor>
        </Heading>

        {/* // TODO: Make disclaimer a modal */}
        <Heading level="six">
          <span>
            <Anchor
              color="earth"
              href="https://colleen-fletcher.com/sitemap/sitemap-0.xml"
            >
              Sitemap
            </Anchor>{' '}
          </span>
          |{' '}
          <SiteDisclaimer title="Disclaimer: By agreeing to use the services and guidance of Colleen Fletcher you agree that you understand and know all information is not a diagnosis, nor does it take the place of any medical, legal or financial advice. All information given is educational and is to be used to enhance your knowledge and ability to act in a positive manner in matters concerning your personal wholistic health care. You know your progress is dependent upon your commitment to your goals and that there are no guarantees as to the result or progress to be made. You understand that the success of the treatment is dependent upon your action to your goals. You must be 18 years of age or have a written release from a parent or legal guardian">
            Disclaimer <RiInformationLine />
          </SiteDisclaimer>
        </Heading>
      </FooterInfo>
    </FooterContent>
  </SiteFooter>
);

export default Footer;
