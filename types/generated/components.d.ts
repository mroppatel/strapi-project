import type { Attribute, Schema } from '@strapi/strapi';

export interface SectionsCta extends Schema.Component {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    buttonLink: Attribute.String;
    buttonText: Attribute.String;
    description: Attribute.String;
    title: Attribute.String;
  };
}

export interface SectionsFaq extends Schema.Component {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    answer: Attribute.Blocks;
    question: Attribute.String;
  };
}

export interface SectionsFeature extends Schema.Component {
  collectionName: 'components_sections_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Attribute.Blocks;
    icon: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    backgroundImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    buttonLink: Attribute.String;
    buttonText: Attribute.String;
    heading: Attribute.String & Attribute.Required;
    subHeading: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sections.cta': SectionsCta;
      'sections.faq': SectionsFaq;
      'sections.feature': SectionsFeature;
      'sections.hero': SectionsHero;
    }
  }
}
