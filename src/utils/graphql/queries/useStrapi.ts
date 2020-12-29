import {graphql, useStaticQuery} from 'gatsby';

export const useStrapiData: () => Strapi = () =>
    useStaticQuery(graphql`
        query GET_STRAPI_CONTENT {
            strapi {
                menuItems(sort: "order") {
                    is_external_link
                }
            }
        }
    `);

// use this
// imageFile {
//     ...FluidImage
// }

// Turn into Fragment
// body {
//     __typename
//     ... on ComponentTextParagraph {
//       paragraph
//     }
//     ... on ComponentTextCenterImageWithTextEitherSide {
//       image_left {
//         url
//         alternativeText
//         caption
//       }
//       text {
//         paragraph
//       }
//       image_right {
//         url
//         alternativeText
//         caption
//       }
//     }
//     ... on ComponentTextHeaderWithImageLeftSide {
//       image {
//         url
//         alternativeText
//         caption
//       }
//       text {
//         title
//         level
//         tilt
//       }
//     }
//     ... on ComponentTextHeaderWithImageRightSide {
//       image {
//         url
//         alternativeText
//         caption
//       }
//       text {
//         title
//         level
//         tilt
//       }
//     }
//     ... on ComponentTextTextWithImageRightSide {
//       image {
//         url
//         alternativeText
//         caption
//       }
//       text {
//         paragraph
//       }
//     }
//     ... on ComponentTextTextWithImageLeftSide {
//       image {
//         url
//         alternativeText
//         caption
//       }
//       text {
//         paragraph
//       }
//     }
//     ... on ComponentWidgetsCallToAction {
//       title
//       variant
//       action
//     }
//     ... on ComponentWidgetsDivider {
//       style
//     }
//     ... on ComponentWidgetsHeading {
//       title
//       level
//       tilt
//     }
//     ... on ComponentWidgetsQuote {
//       paragraph
//     }
//     ... on ComponentSectionPreview {
//       title
//       text {
//         paragraph
//       }
//       button {
//         title
//         variant
//         action
//       }
//       image {
//         file {
//           url
//           alternativeText
//           caption
//         }
//       }
//       layout
//     }
//     ... on ComponentMediaFiles {
//       files {
//         url
//         alternativeText
//         caption
//       }
//     }
//     ... on ComponentMediaSingleFile {
//       file {
//         url
//         alternativeText
//         caption
//       }
//     }
//     ... on ComponentMediaImages {
//       files {
//         url
//         alternativeText
//         caption
//       }
//     }
//     ... on ComponentMediaSingleImage {
//       file {
//         url
//         alternativeText
//         caption
//       }
//     }
//     ... on ComponentMediaVideos {
//       files {
//         url
//       }
//     }
//     ... on ComponentMediaSingleVideo {
//       file {
//         url
//       }
//     }
//   }
