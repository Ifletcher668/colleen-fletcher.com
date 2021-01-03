import {graphql} from 'gatsby';

// Strapi Content Types
export const StrapiMenuItem = graphql`
    fragment StrapiMenuItem on STRAPI_MenuItem {
        text
        slug
        is_external_link
    }
`;

export const StrapiBlog = graphql`
    fragment StrapiBlog on STRAPI_Blog {
        name
        slug
        fullUrlPath
        meta_description
    }
`;

// Grabs everything except body components
export const StrapiBlogPost = graphql`
    fragment StrapiBlogPost on STRAPI_BlogPost {
        title
        slug
        published
        preview
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
    }
`;

export const StrapiOffering = graphql`
    fragment StrapiOffering on STRAPI_Offering {
        id
        title
        slug
        meta_description
        image {
            ...StrapiComponentMediaSingleImage
        }
        fullUrlPath
        services {
            ...StrapiService
        }
    }
`;
export const StrapiService = graphql`
    fragment StrapiService on STRAPI_Service {
        id
        title
        slug
        fullUrlPath
        preview
        preview_image {
            ...StrapiComponentMediaSingleImage
        }
        banner_background_image {
            ...StrapiUploadFile
        }
        offerings {
            id
            slug
        }
    }
`;

export const FluidImage = graphql`
    fragment FluidImage on File {
        childImageSharp {
            fluid {
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
        files {
            ...StrapiUploadFile
        }
    }
`;

export const StrapiComponentMediaSingleVideo = graphql`
    fragment StrapiComponentMediaSingleVideo on STRAPI_ComponentMediaSingleVideo {
        id
        file {
            ...StrapiUploadFile
        }
    }
`;

export const StrapiComponentMediaVideos = graphql`
    fragment StrapiComponentMediaVideos on STRAPI_ComponentMediaVideos {
        id
        files {
            ...StrapiUploadFile
        }
    }
`;

export const StrapiComponentMediaSingleFile = graphql`
    fragment StrapiComponentMediaSingleFile on STRAPI_ComponentMediaSingleFile {
        id
        file {
            ...StrapiUploadFile
        }
    }
`;

export const StrapiComponentMediaFiles = graphql`
    fragment StrapiComponentMediaFiles on STRAPI_ComponentMediaFiles {
        id
        files {
            ...StrapiUploadFile
        }
    }
`;

export const StrapiComponentTextParagraph = graphql`
    fragment StrapiComponentTextParagraph on STRAPI_ComponentTextParagraph {
        id
        body
    }
`;

export const StrapiComponentTextHeading = graphql`
    fragment StrapiComponentTextHeading on STRAPI_ComponentTextHeading {
        id
        level
        headingText: text
        tilt
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
            ...StrapiUploadFile
        }
    }
`;

export const StrapiComponentSectionHeadingLeftImageRight = graphql`
    fragment StrapiComponentSectionHeadingLeftImageRight on STRAPI_ComponentSectionHeadingLeftImageRight {
        id
        image {
            ...StrapiUploadFile
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
            ...StrapiUploadFile
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
            body
        }
        image {
            ...StrapiUploadFile
        }
    }
`;

export const StrapiComponentSectionTextCenterImageEitherSide = graphql`
    fragment StrapiComponentSectionTextCenterImageEitherSide on STRAPI_ComponentSectionTextCenterImageEitherSide {
        id
        image_left {
            ...StrapiUploadFile
        }
        text {
            body
        }
        image_right {
            ...StrapiUploadFile
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
            ...StrapiUploadFile
        }
        text_right {
            ...StrapiComponentTextParagraph
        }
    }
`;
