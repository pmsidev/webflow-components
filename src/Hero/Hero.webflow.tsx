import { Hero } from './Hero';
import { props } from '@webflow/data-types';
import { declareComponent } from '@webflow/react';

// Wrapper component to transform flattened Webflow props to Hero's expected structure
const HeroWrapper = (webflowProps: {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  size?: 'small' | 'medium' | 'large';
  enableSecondColumn?: boolean;
}) => {
  const {
    title = 'Medium length hero heading goes here',
    subtitle = 'Tagline',
    description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    backgroundImage,
    backgroundImageAlt = 'Hero background',
    size = 'large',
    enableSecondColumn = false,
  } = webflowProps;

  const heroProps = {
    title,
    subtitle,
    description,
    backgroundImage,
    backgroundImageAlt,
    size,
    enableSecondColumn,
  };

  return <Hero {...heroProps} />;
};

export default declareComponent(HeroWrapper, {
  name: 'Hero',
  description: 'A hero section with title, subtitle, description, and optional background image',
  group: 'Hero',
  props: {
    title: props.Text({
      name: 'Title',
      defaultValue: 'Medium length hero heading goes here',
    }),
    subtitle: props.Text({
      name: 'Subtitle/Tagline',
      defaultValue: 'Tagline',
    }),
    description: props.Text({
      name: 'Description',
      defaultValue: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
    }),
    backgroundImage: props.Text({
      name: 'Background Image URL',
      defaultValue: '',
    }),
    backgroundImageAlt: props.Text({
      name: 'Background Image Alt Text',
      defaultValue: 'Hero background',
    }),
    size: props.Variant({
      name: 'Container Size',
      options: ['small', 'medium', 'large'],
      defaultValue: 'large',
    }),
    enableSecondColumn: props.Boolean({
      name: 'Enable Two Columns',
      defaultValue: false,
    }),
  },
});
