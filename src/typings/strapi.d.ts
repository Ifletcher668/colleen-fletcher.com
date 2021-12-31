/* eslint-disable */

import { IGatsbyImageData } from 'gatsby-plugin-image';

export = Strapi;
export as namespace Strapi;

declare namespace Strapi {
  /**
   *  essential, despite the namespace, because Graphql
   * adds this extra 'strapi' object
   */
  type Strapi = {
    strapi: Content;
  };

  type Content = {
    blog: Blog;
    blogs: Array<Blog>;
    blogPosts: Array<BlogPost>;
    blogPost: BlogPost;
    category: Category;
    categories: Array<Category>;
    menuItems: Array<MenuItem>;
    offering: Offering;
    offerings: Array<Offering>;
    page: Page;
    recentBlogPosts: Array<BlogPost>;
    service: Service;
    services: Array<Service>;
    service: Service;
    services: Array<Service>;
    tag: Tag;
    tags: Array<Tag>;
  };

  // TODO: make optional to reflect Strapi. Currently, only the Blog and post previews are accounted for
  type Preview = {
    heading: ComponentTextHeading;
    text: ComponentTextParagraph;
    image: ComponentMediaSingleImage;
    button: ComponentWidgetButton;
  };

  // components
  type DynamicZoneTypeNames =
    | 'STRAPI_ComponentMediaSingleImage'
    | 'STRAPI_ComponentMediaImages'
    // | 'STRAPI_ComponentMediaSingleFile'  not yet supported
    // | 'STRAPI_ComponentMediaFiles' not yet supported
    | 'STRAPI_ComponentMediaSingleVideo'
    // | 'STRAPI_ComponentMediaVideos' not yet supported
    | 'STRAPI_ComponentTextParagraph'
    | 'STRAPI_ComponentSectionTextRightImageLeft'
    | 'STRAPI_ComponentSectionImageRightTextLeft'
    | 'STRAPI_ComponentSectionTextCenterImageEitherSide'
    | 'STRAPI_ComponentSectionImageCenterTextEitherSide'
    | 'STRAPI_ComponentWidgetDivider'
    | 'STRAPI_ComponentWidgetEmbeddedForm'
    | 'STRAPI_ComponentWidgetButton'
    | 'STRAPI_ComponentCollectionsOfferings'
    | 'STRAPI_ComponentCollectionsBlogs'
    | 'STRAPI_ComponentCollectionsBlogPosts'
    | 'STRAPI_ComponentCollectionsServices';

  // TODO: Refactor into discriminating union
  type DynamicZone = {
    readonly __typename: DynamicZoneTypeNames;
    id: string;
    body: string;
    // base 'paragraph' props
    text: ComponentTextParagraph;
    justifyParagraph: JustifyValues;
    alignParagraph: AlignValues;
    text_left: ComponentTextParagraph;
    text_right: ComponentTextParagraph;
    // base 'heading' props
    headingText: string; // alias for 'text' in db
    level: 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
    tilt: 'down' | 'even' | 'up';
    justifyHeading: JustifyValues;
    alignHeading: AlignValues;
    // ========================
    heading: ComponentTextHeading;
    style: ImageStyle | DividerStyle;
    // base 'button' props
    buttonText: string;
    variant: 'primary' | 'secondary' | 'tertiary';
    action: string;
    // ========================
    image: ComponentMediaSingleImage; // image inside section with text or header
    configuration: ComponentGeneralImageConfiguration;
    // =========================
    file: UploadFile; // single image , video or file
    files: Array<UploadFile>; // image files, videos, or files
    image_left: ComponentMediaSingleImage;
    image_right: ComponentMediaSingleImage;
    blogs: Array<Blog>;
    blog_posts: Array<BlogPost>;
    offerings: Array<Offering>;
    services: Array<Service>;
    show_services: boolean;
    show_blog_posts: boolean;
    // single video data
    code_snippet: string;
    title: string;
    // embedded forms
    code_snippet: string;
    justifyEmbeddedForm: JustifyValues;
  };

  type ComponentSingleVideo = {
    // readonly __typename: 'STRAPI_ComponentMediaSingleVideo';
    code_snippet: string;
    title: string;
  };
  //  Collections Component Types

  type ComponentCollectionsBlogs = {
    blogs: Array<Blog>;
  };
  type ComponentCollectionsBlogPosts = {
    blog_posts: Array<BlogPost>;
  };
  type ComponentCollectionsOfferings = {
    offerings: Array<Offering>;
  };
  type ComponentCollectionsServices = {
    services: Array<Service>;
  };

  //  Media Component Types

  //  Section Component Types
  type ComponentSectionTextCenterImageEitherSide = {
    image_left: ComponentMediaSingleImage;
    text: ComponentTextParagraph;
    image_right: ComponentMediaSingleImage;
  };
  type ComponentSectionImageCenterTextEitherSide = {
    text_left: ComponentMediaSingleImage;
    image: ComponentTextParagraph;
    text_right: ComponentMediaSingleImage;
  };

  type ComponentSectionHeadingRightImageLeft = {
    heading: ComponentTextHeading;
    image: ComponentMediaSingleImage;
  };

  type ComponentSectionHeadingLeftImageRight = {
    heading: ComponentTextHeading;
    image: ComponentMediaSingleImage;
  };

  type ComponentSectionImageRightTextLeft = {
    text: ComponentTextParagraph;
    image: ComponentMediaSingleImage;
  };

  type ComponentSectionTextRightImageLeft = {
    text: ComponentTextParagraph;
    image: ComponentMediaSingleImage;
  };

  //  Text Component Types
  type ComponentTextParagraph = {
    body: string;
    justifyParagraph: JustifyValues; // Alias for 'justify' enum
    alignParagraph: AlignValues; // Alias for 'align' enum
  };

  type ComponentTextHeading = {
    headingText: string; // alias for 'text' in db
    level: 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
    tilt: 'down' | 'even' | 'up';
    justifyHeading: JustifyValues; // Alias for 'justify' enum
    alignHeading: AlignValues; // Alias for 'align' enum
  };

  type ComponentTextQuote = {
    text: ComponentTextParagraph;
  };

  type ComponentGeneralImageConfiguration = {
    imageWidth?: number;
    imageHeight?: number;
    isCircle?: boolean;
    hasBorder?: boolean;
    justifyImage?: JustifyValues;
    alignImage?: AlignValues;
  };

  //  Media Types
  type ComponentMediaSingleImage = {
    file: UploadFile;
    configuration: ComponentGeneralImageConfiguration;
  };

  type ComponentMediaImages = {
    files: Array<UploadFile>;
    style: Omit<ImageStyle, 'standard' | 'fancy'>;
    configuration: ComponentGeneralImageConfiguration;
  };

  //  Widget Types
  type ComponentWidgetButton = {
    buttonText: string;
    variant: 'primary' | 'secondary' | 'tertiary';
    action: string;
  };
  type ComponentWidgetDivider = {
    style: Pick<ImageStyle, 'standard' | 'fancy'>;
  };

  // ===========================================

  // strapi collection types //
  type MenuItem = {
    text: string;
    is_external_link: boolean;
    slug: string;
    page: Page['id'];
    content: Array<DynamicZone>;
  };

  type Page = {
    id: string;
    title: string;
    slug: string;
    seo?: SEO;
    menuItem: MenuItem;
    banner_background_image: UploadFile;
    banner: Array<DynamicZone>;
    body: Array<DynamicZone>;
    blogs: Array<Blog>;
    offerings: Array<Offering>;
  };

  type Blog = {
    id: string;
    name: string;
    slug: string;
    seo?: SEO;
    preview: Preview;
    fullUrlPath: string;
    blog_posts: Array<BlogPost>;
    is_blog: boolean;
  };

  type BlogPost = {
    id: string;
    title: string;
    slug: string;
    seo?: SEO;
    preview: Preview;
    blog: Blog;
    fullUrlPath: string;
    category?: Category;
    tags?: Array<Tag>;
    cover_image: UploadFile;
    published: string;
    body: Array<DynamicZone>;
    is_blog_post: boolean;
  };

  type Offering = {
    id: string;
    title: string;
    slug: string;
    seo?: SEO;
    preview: Preview;
    image: ComponentMediaSingleImage;
    fullUrlPath: string;
    services: Array<Service>;
    is_offering: boolean;
  };

  type Service = {
    id: string;
    title: string;
    slug: string;
    seo?: SEO;
    fullUrlPath: string;
    preview: Preview;
    banner_background_image: UploadFile;
    banner: Array<DynamicZone>;
    sales_page: Array<DynamicZone>;
    offerings: Array<Offering>;
    is_service: boolean;
  };

  type Category = {
    id: string;
    name: string;
    slug: string;
    blog_posts?: Array<BlogPost>;
    is_category: boolean;
  };

  type Tag = {
    id: string;
    name: string;
    slug: string;
    blog_posts?: Array<BlogPost>;
    is_tag: boolean;
  };

  // ===================

  type SEO = {
    title?: string;
    meta_description?: string;
    image?: UploadFile;
  };

  type UploadFile = {
    id: number;
    url: string;
    caption: string;
    alternativeText: string;
    imageFile: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData;
      };
    };
  };
}
