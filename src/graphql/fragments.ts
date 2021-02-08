import { graphql } from 'gatsby';

// Strapi Content Types
export const StrapiMenuItem = graphql`
    fragment StrapiMenuItem on STRAPI_MenuItem {
        text
        slug
        is_external_link
        page {
            id
        }
        content {
            __typename
            ... on STRAPI_ComponentCollectionsOfferings {
                offerings {
                    title
                    slug
                    fullUrlPath
                }
                show_services
            }
            ... on STRAPI_ComponentCollectionsBlogs {
                blogs {
                    name
                    slug
                    fullUrlPath
                }
                show_blog_posts
            }
            ... on STRAPI_ComponentCollectionsBlogPosts {
                blog_posts {
                    title
                    ...StrapiBlogPostFullUrlPath
                }
            }
            ... on STRAPI_ComponentCollectionsServices {
                services {
                    title
                    slug
                }
            }
        }
    }
`;

export const StrapiBlog = graphql`
    fragment StrapiBlog on STRAPI_Blog {
        name
        slug
        fullUrlPath
        meta_description
        preview {
            ...StrapiComponentGeneralPreview
        }
        blog_posts {
            ...StrapiBlogPost
        }
        is_blog
    }
`;

export const StrapiBlogPostFullUrlPath = graphql`
    fragment StrapiBlogPostFullUrlPath on STRAPI_BlogPost {
        slug
        fullUrlPath
        published
        blog {
            name
            slug
        }
        category {
            name
            slug
        }
    }
`;
// Grabs everything except body components
export const StrapiBlogPost = graphql`
    fragment StrapiBlogPost on STRAPI_BlogPost {
        title
        slug
        published
        preview
        cover_image {
            ...StrapiUploadFile
        }
        blog {
            name
            slug
        }
        category {
            name
            slug
        }
        tags {
            name
        }
        fullUrlPath
        is_blog_post
    }
`;

export const StrapiOffering = graphql`
    fragment StrapiOffering on STRAPI_Offering {
        id
        title
        slug
        meta_description
        preview {
            ...StrapiComponentGeneralPreview
        }
        fullUrlPath
        services {
            ...StrapiService
        }
        is_offering
    }
`;
export const StrapiService = graphql`
    fragment StrapiService on STRAPI_Service {
        id
        title
        slug
        preview {
            ...StrapiComponentGeneralPreview
        }
        banner_background_image {
            ...StrapiUploadFile
        }
        offerings {
            id
            slug
        }
        is_service
    }
`;

export const StrapiCategory = graphql`
    fragment StrapiCategory on STRAPI_Category {
        name
        blog_posts {
            ...StrapiBlogPost
        }
        is_category
    }
`;
export const StrapiTag = graphql`
    fragment StrapiTag on STRAPI_Tag {
        name
        blog_posts {
            ...StrapiBlogPost
        }
        is_tag
    }
`;

export const FluidImage = graphql`
    fragment FluidImage on File {
        childImageSharp {
            fluid(maxWidth: 6000, quality: 100) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`;

export const StrapiUploadFile = graphql`
    fragment StrapiUploadFile on STRAPI_UploadFile {
        id
        url
        caption
        alternativeText
        imageFile {
            ...FluidImage
        }
    }
`;

// Strapi Dynamic Zone Components
// Change the query here to update across site
// changes blog posts (body), banners, and page (body)
export const StrapiComponentMediaSingleImage = graphql`
    fragment StrapiComponentMediaSingleImage on STRAPI_ComponentMediaSingleImage {
        id
        file {
            ...StrapiUploadFile
        }
    }
`;

export const StrapiComponentMediaImages = graphql`
    fragment StrapiComponentMediaImages on STRAPI_ComponentMediaImages {
        id
        imageLayout: style
        files {
            ...StrapiUploadFile
        }
    }
`;

export const StrapiComponentTextParagraph = graphql`
    fragment StrapiComponentTextParagraph on STRAPI_ComponentTextParagraph {
        id
        body
        justifyParagraph: justify
        alignParagraph: align
    }
`;

export const StrapiComponentTextHeading = graphql`
    fragment StrapiComponentTextHeading on STRAPI_ComponentTextHeading {
        id
        level
        headingText: text
        tilt
        justifyHeading: justify
        alignHeading: align
    }
`;

export const StrapiComponentTextQuote = graphql`
    fragment StrapiComponentTextQuote on STRAPI_ComponentTextQuote {
        id
        text {
            ...StrapiComponentTextParagraph
        }
    }
`;

export const StrapiComponentWidgetDivider = graphql`
    fragment StrapiComponentWidgetDivider on STRAPI_ComponentWidgetDivider {
        id
        style
    }
`;

export const StrapiComponentWidgetButton = graphql`
    fragment StrapiComponentWidgetButton on STRAPI_ComponentWidgetButton {
        id
        buttonText: text
        variant
        action
    }
`;

export const StrapiComponentSectionHeadingRightImageLeft = graphql`
    fragment StrapiComponentSectionHeadingRightImageLeft on STRAPI_ComponentSectionHeadingRightImageLeft {
        id
        heading {
            ...StrapiComponentTextHeading
        }
        image {
            ...StrapiComponentMediaSingleImage
        }
    }
`;

export const StrapiComponentSectionHeadingLeftImageRight = graphql`
    fragment StrapiComponentSectionHeadingLeftImageRight on STRAPI_ComponentSectionHeadingLeftImageRight {
        id
        image {
            ...StrapiComponentMediaSingleImage
        }
        heading {
            ...StrapiComponentTextHeading
        }
    }
`;

export const StrapiComponentSectionImageRightTextLeft = graphql`
    fragment StrapiComponentSectionImageRightTextLeft on STRAPI_ComponentSectionImageRightTextLeft {
        id
        image {
            ...StrapiComponentMediaSingleImage
        }
        text {
            ...StrapiComponentTextParagraph
        }
    }
`;

export const StrapiComponentSectionTextRightImageLeft = graphql`
    fragment StrapiComponentSectionTextRightImageLeft on STRAPI_ComponentSectionTextRightImageLeft {
        id
        text {
            ...StrapiComponentTextParagraph
        }
        image {
            ...StrapiComponentMediaSingleImage
        }
    }
`;

export const StrapiComponentSectionTextCenterImageEitherSide = graphql`
    fragment StrapiComponentSectionTextCenterImageEitherSide on STRAPI_ComponentSectionTextCenterImageEitherSide {
        id
        image_left {
            ...StrapiComponentMediaSingleImage
        }
        text {
            ...StrapiComponentTextParagraph
        }
        image_right {
            ...StrapiComponentMediaSingleImage
        }
    }
`;

export const StrapiComponentSectionImageCenterTextEitherSide = graphql`
    fragment StrapiComponentSectionImageCenterTextEitherSide on STRAPI_ComponentSectionImageCenterTextEitherSide {
        id
        text_left {
            ...StrapiComponentTextParagraph
        }
        image {
            ...StrapiComponentMediaSingleImage
        }
        text_right {
            ...StrapiComponentTextParagraph
        }
    }
`;

export const StrapiComponentCollectionsBlogs = graphql`
    fragment StrapiComponentCollectionsBlogs on STRAPI_ComponentCollectionsBlogs {
        blogs {
            id
            ...StrapiBlog
        }
    }
`;
// show_blog_posts

export const StrapiComponentCollectionsBlogPosts = graphql`
    fragment StrapiComponentCollectionsBlogPosts on STRAPI_ComponentCollectionsBlogPosts {
        blog_posts {
            ...StrapiBlogPost
        }
    }
`;
export const StrapiComponentCollectionsOfferings = graphql`
    fragment StrapiComponentCollectionsOfferings on STRAPI_ComponentCollectionsOfferings {
        offerings {
            ...StrapiOffering
        }
    }
`;
// show_services
export const StrapiComponentCollectionsServices = graphql`
    fragment StrapiComponentCollectionsServices on STRAPI_ComponentCollectionsServices {
        services {
            ...StrapiService
        }
    }
`;

export const StrapiComponentGeneralPreview = graphql`
    fragment StrapiComponentGeneralPreview on STRAPI_ComponentGeneralPreview {
        heading {
            ...StrapiComponentTextHeading
        }
        text {
            ...StrapiComponentTextParagraph
        }
        image {
            ...StrapiComponentMediaSingleImage
        }
        button {
            ...StrapiComponentWidgetButton
        }
    }
`;
