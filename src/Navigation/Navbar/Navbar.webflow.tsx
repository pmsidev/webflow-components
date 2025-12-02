import { Navbar } from './Navbar';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

const NavbarWrapper = (webflowProps: {
  logoSrc?: string;
  logoAlt?: string;
  logoUrl?: string;
  navLinksJson?: string;
  buttonsJson?: string;
}) => {
  const {
    logoSrc = 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
    logoAlt = 'Logo',
    logoUrl = '/',
    navLinksJson = '[{"label":"Home","url":"/"},{"label":"About","url":"/about"},{"label":"Services","url":"/services"},{"label":"Contact","url":"/contact"}]',
    buttonsJson = '[{"label":"Get Started","url":"/get-started","variant":"default"}]',
  } = webflowProps;

  // Parse JSON strings for complex data
  let navLinks = [];
  let buttons = [];

  try {
    if (navLinksJson) navLinks = JSON.parse(navLinksJson);
    if (buttonsJson) buttons = JSON.parse(buttonsJson);
  } catch (e) {
    console.error('Error parsing Navbar JSON props:', e);
  }

  const navbarProps = {
    logo: {
      src: logoSrc,
      alt: logoAlt,
      url: logoUrl,
    },
    navLinks,
    buttons,
  };

  return <Navbar {...navbarProps} />;
};

export default declareComponent(NavbarWrapper, {
  name: 'Navbar',
  description: 'Responsive navigation bar with logo, links, and CTA buttons',
  group: 'Navigation',
  props: {
    logoSrc: props.Text({
      name: 'Logo Image URL',
      defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
    }),
    logoAlt: props.Text({
      name: 'Logo Alt Text',
      defaultValue: 'Logo',
    }),
    logoUrl: props.Text({
      name: 'Logo Link URL',
      defaultValue: '/',
    }),
    navLinksJson: props.Text({
      name: 'Nav Links (JSON)',
      defaultValue: '[{"label":"Home","url":"/"},{"label":"About","url":"/about"},{"label":"Services","url":"/services"},{"label":"Contact","url":"/contact"}]',
    }),
    buttonsJson: props.Text({
      name: 'Buttons (JSON)',
      defaultValue: '[{"label":"Get Started","url":"/get-started","variant":"default"}]',
    }),
  },
});
