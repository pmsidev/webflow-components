import { Banner1 } from './Banner1';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';
import React from 'react';

// Wrapper component to transform flattened Webflow props to Banner1's expected structure
const Banner1Wrapper = (webflowProps: {
  heading?: string;
  description?: string;
  logoUrl?: string;
  logoSrc?: string;
  logoAlt?: string;
  inputPlaceholder?: string;
  buttonTitle?: string;
  buttonVariant?: 'default' | 'secondary' | 'outline' | 'ghost';
  buttonSize?: 'default' | 'sm' | 'lg';
}) => {
  const {
    heading,
    description,
    logoUrl,
    logoSrc,
    logoAlt,
    inputPlaceholder,
    buttonTitle,
    buttonVariant,
    buttonSize,
  } = webflowProps;

  // Transform flattened props to Banner1's expected structure
  const bannerProps = {
    heading,
    description,
    logo: {
      url: logoUrl,
      src: logoSrc,
      alt: logoAlt,
    },
    inputPlaceholder,
    button: {
      title: buttonTitle,
      variant: buttonVariant,
      size: buttonSize,
    },
  };

  return <Banner1 {...bannerProps} />;
};

export default declareComponent(Banner1Wrapper, {
  name: 'Banner1',
  description: 'A dismissible banner component with logo, heading, description, email input, and CTA button',
  group: 'Banners',
  props: {
    heading: props.Text({
      name: 'Heading',
      defaultValue: 'Medium length banner heading goes here',
    }),
    description: props.Text({
      name: 'Description',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    }),
    logoUrl: props.Text({
      name: 'Logo Link URL',
      defaultValue: '#',
    }),
    logoSrc: props.Text({
      name: 'Logo Image Source',
      defaultValue: 'https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg',
    }),
    logoAlt: props.Text({
      name: 'Logo Alt Text',
      defaultValue: 'Relume logo',
    }),
    inputPlaceholder: props.Text({
      name: 'Input Placeholder',
      defaultValue: 'Enter your email',
    }),
    buttonTitle: props.Text({
      name: 'Button Text',
      defaultValue: 'Sign up',
    }),
    buttonVariant: props.Variant({
      name: 'Button Style',
      options: ['default', 'secondary', 'outline', 'ghost'],
      defaultValue: 'default',
    }),
    buttonSize: props.Variant({
      name: 'Button Size',
      options: ['default', 'sm', 'lg'],
      defaultValue: 'sm',
    }),
  },
});
