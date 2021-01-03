import React from 'react';
import {graphql} from 'gatsby';
import Heading from '../components/Heading';
import StrapiDynamicZone from '../components/StrapiDynamicZone';
import BannerBackground from 'gatsby-background-image';
import {Grid} from '../components/Container';
import {Card, CardHeader, CardBody, CardFooter} from '../components/Card';
import MarkdownField from 'react-markdown';
import SEO from '../components/SEO';
import ALink from 'gatsby-plugin-transition-link/AniLink';
import {useContext} from 'react';
import {LayoutContext} from '../components/Layout';
import {useStrapiData} from '../utils/graphql/queries/useStrapiData';
type PageContext = {
    id: string;
    blogsPageId: StrapiBlogPost[];
    offeringsPageId: StrapiOffering[];
};
interface Props {
    data: Strapi;
    pageContext: PageContext;
}

export default (props: Props) => {
    const {
        data: {
            strapi: {page},
        },
    } = props;

    const {
        strapi: {blogs, blogPosts, offerings},
    } = useStrapiData();

    const {TRANSITION_PROPS} = useContext(LayoutContext);

    const GRID_LAYOUT: Grid = {
        columns: [`repeat(auto-fit, minmax(10em, 1fr))`],
        gap: `1em`,
    };
    const showBlogsPageData = () => {
        return (
            <>
                <Grid containerType="section">
                    <Heading level={2}>Blogs</Heading>
                    <Grid {...GRID_LAYOUT}>
                        {blogs.map((blog, idx) => {
                            return (
                                <Card key={idx}>
                                    <CardHeader>
                                        <Heading level={3}>
                                            <ALink
                                                to={blog.fullUrlPath}
                                                {...TRANSITION_PROPS}
                                            >
                                                {blog.name}
                                            </ALink>
                                        </Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <MarkdownField
                                            source={blog.meta_description}
                                            allowDangerousHtml
                                            className="paragraph"
                                        />
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </Grid>
                </Grid>
                <Heading level={4}>Blog Posts</Heading>
                <Grid {...GRID_LAYOUT}>
                    {blogPosts.map((blogPost, idx) => {
                        return (
                            <Card key={idx}>
                                <CardHeader>
                                    <Heading level={5}>
                                        <ALink
                                            to={blogPost.fullUrlPath}
                                            {...TRANSITION_PROPS}
                                        >
                                            {blogPost.title}
                                        </ALink>
                                    </Heading>
                                </CardHeader>
                                <CardBody>
                                    <MarkdownField
                                        source={blogPost.preview}
                                        allowDangerousHtml
                                        className="paragraph"
                                    />
                                </CardBody>
                                {blogPost.tags && blogPost.tags.length > 0 && (
                                    <CardFooter>
                                        <Heading level={6}>Tags</Heading>
                                        {blogPost.tags.map((tag, idx) => {
                                            return (
                                                <Grid
                                                    key={idx}
                                                    {...GRID_LAYOUT}
                                                >
                                                    {tag.name}
                                                </Grid>
                                            );
                                        })}
                                    </CardFooter>
                                )}
                            </Card>
                        );
                    })}
                </Grid>
            </>
        );
    };

    const showOfferingsPageData = () => {
        return (
            <>
                <Grid containerType="section">
                    <Heading level={2}>Offerings</Heading>
                    <Grid {...GRID_LAYOUT}>
                        {offerings.map((offering, idx) => {
                            return (
                                <Card key={idx}>
                                    <CardHeader>
                                        <Heading level={4}>
                                            <ALink
                                                to={offering.fullUrlPath}
                                                {...TRANSITION_PROPS}
                                            >
                                                {offering.title}
                                            </ALink>
                                        </Heading>
                                    </CardHeader>
                                    <CardBody>
                                        <MarkdownField
                                            source={offering.meta_description}
                                            allowDangerousHtml
                                            className="paragraph"
                                        />
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </Grid>
                </Grid>
            </>
        );
    };
    return (
        <>
            <SEO />
            <BannerBackground
                fluid={
                    page.banner_background_image.imageFile.childImageSharp.fluid
                }
                className="banner-background"
            >
                <StrapiDynamicZone components={page.banner} />
            </BannerBackground>
            <StrapiDynamicZone components={page.body} />
            {props.pageContext.blogsPageId && showBlogsPageData()}
            {props.pageContext.offeringsPageId && showOfferingsPageData()}
        </>
    );
};

export const query = graphql`
    query GET_PAGE($id: ID!) {
        strapi {
            page(id: $id) {
                title
                banner_background_image {
                    ...StrapiUploadFile
                }
                meta_description
                banner {
                    __typename
                    ... on STRAPI_ComponentMediaSingleImage {
                        ...StrapiComponentMediaSingleImage
                    }
                    ... on STRAPI_ComponentMediaImages {
                        ...StrapiComponentMediaImages
                    }
                    ... on STRAPI_ComponentMediaSingleVideo {
                        ...StrapiComponentMediaSingleVideo
                    }
                    ... on STRAPI_ComponentMediaVideos {
                        ...StrapiComponentMediaVideos
                    }
                    ... on STRAPI_ComponentMediaSingleFile {
                        ...StrapiComponentMediaSingleFile
                    }
                    ... on STRAPI_ComponentMediaFiles {
                        ...StrapiComponentMediaFiles
                    }
                    ... on STRAPI_ComponentTextParagraph {
                        ...StrapiComponentTextParagraph
                    }
                    ... on STRAPI_ComponentTextQuote {
                        ...StrapiComponentTextQuote
                    }
                    ... on STRAPI_ComponentTextHeading {
                        ...StrapiComponentTextHeading
                    }
                    ... on STRAPI_ComponentWidgetDivider {
                        ...StrapiComponentWidgetDivider
                    }
                    ... on STRAPI_ComponentWidgetButton {
                        ...StrapiComponentWidgetButton
                    }
                    ... on STRAPI_ComponentSectionHeadingRightImageLeft {
                        ...StrapiComponentSectionHeadingRightImageLeft
                    }
                    ... on STRAPI_ComponentSectionHeadingLeftImageRight {
                        ...StrapiComponentSectionHeadingLeftImageRight
                    }
                    ... on STRAPI_ComponentSectionImageRightTextLeft {
                        ...StrapiComponentSectionImageRightTextLeft
                    }
                    ... on STRAPI_ComponentSectionTextRightImageLeft {
                        ...StrapiComponentSectionTextRightImageLeft
                    }
                    ... on STRAPI_ComponentSectionTextCenterImageEitherSide {
                        ...StrapiComponentSectionTextCenterImageEitherSide
                    }
                    ... on STRAPI_ComponentSectionImageCenterTextEitherSide {
                        ...StrapiComponentSectionImageCenterTextEitherSide
                    }
                }
                body {
                    __typename
                    ... on STRAPI_ComponentMediaSingleImage {
                        ...StrapiComponentMediaSingleImage
                    }
                    ... on STRAPI_ComponentMediaImages {
                        ...StrapiComponentMediaImages
                    }
                    ... on STRAPI_ComponentMediaSingleVideo {
                        ...StrapiComponentMediaSingleVideo
                    }
                    ... on STRAPI_ComponentMediaVideos {
                        ...StrapiComponentMediaVideos
                    }
                    ... on STRAPI_ComponentMediaSingleFile {
                        ...StrapiComponentMediaSingleFile
                    }
                    ... on STRAPI_ComponentMediaFiles {
                        ...StrapiComponentMediaFiles
                    }
                    ... on STRAPI_ComponentTextParagraph {
                        ...StrapiComponentTextParagraph
                    }
                    ... on STRAPI_ComponentTextQuote {
                        ...StrapiComponentTextQuote
                    }
                    ... on STRAPI_ComponentTextHeading {
                        ...StrapiComponentTextHeading
                    }
                    ... on STRAPI_ComponentWidgetDivider {
                        ...StrapiComponentWidgetDivider
                    }
                    ... on STRAPI_ComponentWidgetButton {
                        ...StrapiComponentWidgetButton
                    }
                    ... on STRAPI_ComponentSectionHeadingRightImageLeft {
                        ...StrapiComponentSectionHeadingRightImageLeft
                    }
                    ... on STRAPI_ComponentSectionHeadingLeftImageRight {
                        ...StrapiComponentSectionHeadingLeftImageRight
                    }
                    ... on STRAPI_ComponentSectionImageRightTextLeft {
                        ...StrapiComponentSectionImageRightTextLeft
                    }
                    ... on STRAPI_ComponentSectionTextRightImageLeft {
                        ...StrapiComponentSectionTextRightImageLeft
                    }
                    ... on STRAPI_ComponentSectionTextCenterImageEitherSide {
                        ...StrapiComponentSectionTextCenterImageEitherSide
                    }
                    ... on STRAPI_ComponentSectionImageCenterTextEitherSide {
                        ...StrapiComponentSectionImageCenterTextEitherSide
                    }
                }
            }
        }
    }
`;
