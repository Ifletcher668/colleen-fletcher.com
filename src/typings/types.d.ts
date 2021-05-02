type ChildImageSharp = {
  fluid: GatsbyImage.FluidObject;
};

type FluidImage = {
  childImageSharp: ChildImageSharp;
};

// strapi types
type Strapi = {
  strapi: StrapiContent;
};

type StrapiContent = {
  blog: StrapiBlog;
  blogs: StrapiBlog[];
  blogPosts: StrapiBlogPost[];
  blogPost: StrapiBlogPost;
  category: StrapiCategory;
  categories: StrapiCategory[];
  menuItems: StrapiMenuItem[];
  pageSettings: GeneralSettings;
  offering: StrapiOffering;
  offerings: StrapiOffering[];
  page: StrapiPage;
  recentBlogPosts: StrapiBlogPost[];
  service: StrapiService;
  services: StrapiService[];
  service: StrapiService;
  services: StrapiService[];
  tag: StrapiTag;
  tags: StrapiTag[];
};

type StrapiPreview = {
  heading: StrapiComponentTextHeading;
  text: StrapiComponentTextParagraph;
  image: StrapiComponentMediaSingleImage;
  button: StrapiComponentWidgetButton;
};

// strapi components
type StrapiDynamicZoneTypeNames =
  | 'STRAPI_ComponentMediaSingleImage'
  | 'STRAPI_ComponentMediaImages'
  // | 'STRAPI_ComponentMediaSingleFile'  not yet supported
  // | 'STRAPI_ComponentMediaFiles' not yet supported
  | 'STRAPI_ComponentMediaSingleVideo'
  // | 'STRAPI_ComponentMediaVideos' not yet supported
  | 'STRAPI_ComponentTextHeading'
  | 'STRAPI_ComponentTextParagraph'
  | 'STRAPI_ComponentTextQuote'
  | 'STRAPI_ComponentSectionTextRightImageLeft'
  | 'STRAPI_ComponentSectionImageRightTextLeft'
  | 'STRAPI_ComponentSectionHeadingLeftImageRight'
  | 'STRAPI_ComponentSectionHeadingRightImageLeft'
  | 'STRAPI_ComponentSectionTextCenterImageEitherSide'
  | 'STRAPI_ComponentSectionImageCenterTextEitherSide'
  | 'STRAPI_ComponentWidgetDivider'
  | 'STRAPI_ComponentWidgetButton'
  | 'STRAPI_ComponentCollectionsOfferings'
  | 'STRAPI_ComponentCollectionsBlogs'
  | 'STRAPI_ComponentCollectionsBlogPosts'
  | 'STRAPI_ComponentCollectionsServices';

type StrapiDynamicZone = {
  readonly __typename: StrapiDynamicZoneTypeNames;
  id: string;
  body: string;
  // base 'paragraph' props
  text: StrapiComponentTextParagraph;
  justifyParagraph: JustifyValues;
  alignParagraph: AlignValues;
  text_left: StrapiComponentTextParagraph;
  text_right: StrapiComponentTextParagraph;
  // base 'heading' props
  headingText: string; // alias for 'text' in db
  level: 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
  tilt: 'down' | 'even' | 'up';
  justifyHeading: JustifyValues;
  alignHeading: AlignValues;
  // ========================
  heading: StrapiComponentTextHeading;
  style: ImageStyle | DividerStyle;
  // base 'button' props
  buttonText: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  action: string;
  // ========================
  image: StrapiComponentMediaSingleImage; // image inside section with text or header
  isCircle: boolean;
  hasBorder: boolean;
  // =========================
  file: StrapiUploadFile; // single image , video or file
  files: Array<StrapiUploadFile>; // image files, videos, or files
  image_left: StrapiComponentMediaSingleImage;
  image_right: StrapiComponentMediaSingleImage;
  blogs: Array<StrapiBlog>;
  blog_posts: Array<StrapiBlogPost>;
  offerings: Array<StrapiOffering>;
  services: Array<StrapiService>;
  show_services: boolean;
  show_blog_posts: boolean;
  // single video data
  srcURL: string;
  title: string;
};

type StrapiComponentSingleVideo = {
  // readonly __typename: 'STRAPI_ComponentMediaSingleVideo';
  srcURL: string;
  title: string;
};
// Strapi Collections Component Types

type StrapiComponentCollectionsBlogs = {
  blogs: StrapiBlog[];
};
type StrapiComponentCollectionsBlogPosts = {
  blog_posts: StrapiBlogPost[];
};
type StrapiComponentCollectionsOfferings = {
  offerings: StrapiOffering[];
};
type StrapiComponentCollectionsServices = {
  services: StrapiService[];
};

// Strapi Media Component Types

type StrapiUploadFile = {
  id: number;
  url: string;
  caption: string;
  alternativeText: string;
  imageFile: FluidImage;
};

// Strapi Section Component Types
type StrapiComponentSectionTextCenterImageEitherSide = {
  image_left: StrapiComponentMediaSingleImage;
  text: StrapiComponentTextParagraph;
  image_right: StrapiComponentMediaSingleImage;
};
type StrapiComponentSectionImageCenterTextEitherSide = {
  text_left: StrapiComponentMediaSingleImage;
  image: StrapiComponentTextParagraph;
  text_right: StrapiComponentMediaSingleImage;
};

type StrapiComponentSectionHeadingRightImageLeft = {
  heading: StrapiComponentTextHeading;
  image: StrapiComponentMediaSingleImage;
};

type StrapiComponentSectionHeadingLeftImageRight = {
  heading: StrapiComponentTextHeading;
  image: StrapiComponentMediaSingleImage;
};

type StrapiComponentSectionImageRightTextLeft = {
  text: StrapiComponentTextParagraph;
  image: StrapiComponentMediaSingleImage;
};

type StrapiComponentSectionTextRightImageLeft = {
  text: StrapiComponentTextParagraph;
  image: StrapiComponentMediaSingleImage;
};

// Strapi Text Component Types
type StrapiComponentTextParagraph = {
  body: string;
  justifyParagraph: JustifyValues; // Alias for 'justify' enum
  alignParagraph: AlignValues; // Alias for 'align' enum
};

type StrapiComponentTextHeading = {
  headingText: string; // alias for 'text' in db
  level: 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
  tilt: 'down' | 'even' | 'up';
  justifyHeading: JustifyValues; // Alias for 'justify' enum
  alignHeading: AlignValues; // Alias for 'align' enum
};

type StrapiComponentTextQuote = {
  text: StrapiComponentTextParagraph;
};

// Strapi Media Types
type StrapiComponentMediaSingleImage = {
  file: StrapiUploadFile;
  isCircle: boolean;
  hasBorder: boolean;
};
type StrapiComponentMediaImages = {
  files: StrapiUploadFile[];
  style: Omit<ImageStyle, 'standard' | 'fancy'>;
  isCircle: boolean;
  hasBorder: boolean;
};

// Strapi Widget Types
type StrapiComponentWidgetButton = {
  buttonText: string;
  variant: 'primary' | 'secondary' | 'tertiary';
  action: string;
};
type StrapiComponentWidgetDivider = {
  style: Pick<ImageStyle, 'standard' | 'fancy'>;
};

// ===========================================

// strapi collection types //
type StrapiMenuItem = {
  text: string;
  is_external_link: boolean;
  slug: string;
  page: StrapiPage['id'];
  content: StrapiDynamicZone[];
};

type StrapiPage = {
  id: string;
  title: string;
  slug: string;
  meta_description: string;
  menuItem: StrapiMenuItem;
  banner_background_image: StrapiUploadFile;
  banner: StrapiDynamicZone[];
  body: StrapiDynamicZone[];
  blogs: StrapiBlog[];
  offerings: StrapiOffering[];
};

type StrapiBlog = {
  id: string;
  name: string;
  slug: string;
  meta_description: string;
  preview: StrapiPreview;
  fullUrlPath: string;
  blog_posts: StrapiBlogPost[];
  is_blog: boolean;
};

type StrapiBlogPost = {
  id: string;
  title: string;
  slug: string;
  meta_description: string;
  preview: StrapiPreview;
  blog: StrapiBlog;
  fullUrlPath: string;
  category?: StrapiCategory;
  tags?: StrapiTag[];
  cover_image?: StrapiUploadFile;
  published: string;
  body: StrapiBodyContent[];
  is_blog_post: boolean;
};

type StrapiOffering = {
  id: string;
  title: string;
  slug: string;
  meta_description: string;
  preview: StrapiPreview;
  image: StrapiComponentMediaSingleImage;
  fullUrlPath: string;
  services: StrapiService[];
  is_offering: boolean;
};

type StrapiService = {
  id: string;
  title: string;
  slug: string;
  meta_description: string;
  fullUrlPath: string;
  preview: StrapiPreview;
  banner_background_image: StrapiUploadFile;
  banner: StrapiDynamicZone[];
  sales_page: StrapiDynamicZone[];
  offerings: StrapiOffering[];
  is_service: boolean;
};

type StrapiCategory = {
  id: string;
  name: string;
  slug: string;
  blog_posts?: StrapiBlogPost[];
  is_category: boolean;
};
type StrapiTag = {
  id: string;
  name: string;
  slug: string;
  blog_posts?: StrapiBlogPost[];
  is_tag: boolean;
};

// ===================

// strapi single types

type GeneralSettings = {
  home_page: {
    id: string;
  };
  blogs_page: {
    id: string;
  };
  offerings_page: {
    id: string;
  };
};

// Random Strapi types

type JustifyValues = 'left' | 'center' | 'right';
type AlignValues = 'top' | 'center' | 'bottom';

type ImageStyle =
  | 'straight_line'
  | 'stagger'
  | 'triangle'
  | 'inverted_triangle';

type DividerStyle = 'standard' | 'fancy';

// ===================

// Config and Site Data

type Social = {
  instagram: string;
  facebook: string;
  discord: string;
  pinterest: string;
};

// type SEO = {
//     description: string;
// };

// type MetaData = {
//     seo: SEO;
// };

type Config = {
  socials: Social;
};

// Components

// Grid Layout
type ContainerType = 'div' | 'article' | 'section' | 'aside' | 'ul' | 'ol';

type BreakpointObject = {
  xlarge?: string;
  large?: string;
  medium?: string;
  small?: string;
  xsmall?: string;
};

type Grid = {
  gap?: string | number; // grid-gap
  /**
   * @param columns
   * Each subsequent index in the array maps to
   * a breakpoint. From left to right,
   * the breakpoints get smaller.
   */
  columns?: [string, string?, string?, string?, string?]; // grid-template-columns
  /**
   * @param rows
   * Each subsequent index in the array maps to
   * a breakpoint. From left to right,
   * the breakpoints get smaller.
   */
  rows?: [string, string?, string?, string?, string?]; // grid-template-rows
  containerType?: 'article' | 'section' | 'div' | 'aside';
  autoCols?: string;
};

// Search
