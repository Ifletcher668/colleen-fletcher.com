import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import * as JsSearch from 'js-search';
import {FaSearch} from 'react-icons/fa';
import SearchSection from './SearchSection';
import Heading from '../Heading';
import Grid from '../Container/Grid';
import Flexbox from '../Container/Flexbox';
import PaintDripLink from '../TransitionLink';
import OutsideClickContainer from '../OutsideClickContainer';
import {formatDateOnSlug} from '../../utils/format-date';
import styled from 'styled-components';

const SearchContainer = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState<JsSearch.Search | null>(null);
    const [searchResult, setSearchResult] = useState<SearchResult>([]);
    // the searches
    const [blogs, setBlogs] = useState<StrapiBlog[] | null>(null);
    const [blogPosts, setBlogPosts] = useState<StrapiBlogPost[] | null>(null);
    const [categories, setCategories] = useState<StrapiCategory[] | null>(null);
    const [tags, setTags] = useState<StrapiTag[] | null>(null);
    const [offerings, setOfferings] = useState<StrapiOffering[] | null>(null);
    const [services, setServices] = useState<StrapiService[] | null>(null);

    const [showBlogSearches, setShowBlogSearches] = useState(false);
    const [showBlogPostSearches, setShowBlogPostSearches] = useState(false);
    const [showCategorySearches, setShowCategorySearches] = useState(false);
    const [showTagSearches, setShowTagSearches] = useState(false);
    const [showOfferingSearches, setShowOfferingSearches] = useState(false);
    const [showServiceSearches, setShowServiceSearches] = useState(false);

    const isStrapiBlog = (sr: SearchResult): sr is StrapiBlog[] => {
        return (sr as StrapiBlog[]) !== undefined;
    };
    const isStrapiBlogPost = (sr: SearchResult): sr is StrapiBlogPost[] => {
        return (sr as StrapiBlogPost[]) !== undefined;
    };
    const isStrapiCategory = (sr: SearchResult): sr is StrapiCategory[] => {
        return (sr as StrapiCategory[]) !== undefined;
    };
    const isStrapiTag = (sr: SearchResult): sr is StrapiTag[] => {
        return (sr as StrapiTag[]) !== undefined;
    };
    const isStrapiOffering = (sr: SearchResult): sr is StrapiOffering[] => {
        return (sr as StrapiOffering[]) !== undefined;
    };
    const isStrapiService = (sr: SearchResult): sr is StrapiService[] => {
        return (sr as StrapiService[]) !== undefined;
    };

    useEffect(() => {
        const fetchData = async () => {
            const blogs = await Axios(`${process.env.GATSBY_HEROKU_URL}blogs`);
            setBlogs(blogs.data);

            const blogPosts = await Axios(
                `${process.env.GATSBY_HEROKU_URL}blog-posts`,
            );
            setBlogPosts(blogPosts.data);

            const categories = await Axios(
                `${process.env.GATSBY_HEROKU_URL}categories`,
            );
            setCategories(categories.data);

            const tags = await Axios(`${process.env.GATSBY_HEROKU_URL}tags`);
            setTags(tags.data);

            const offerings = await Axios(
                `${process.env.GATSBY_HEROKU_URL}offerings`,
            );
            setOfferings(offerings.data);

            const services = await Axios(
                `${process.env.GATSBY_HEROKU_URL}services`,
            );
            setServices(services.data);
        };
        fetchData();
    }, []);
    useEffect(() => {
        if (
            blogs !== null &&
            blogPosts !== null &&
            categories !== null &&
            tags !== null &&
            offerings !== null &&
            services !== null
        ) {
            setIsLoading(false);
        }
    }, [blogs, blogPosts, categories, tags, offerings, services]);

    useEffect(() => {
        // Hides section titles when nothing found
        if ((query === '' || searchResult.length < 1) && showBlogSearches) {
            setShowBlogSearches(false);
        }
        if ((query === '' || searchResult.length < 1) && showBlogPostSearches) {
            setShowBlogPostSearches(false);
        }
        if ((query === '' || searchResult.length < 1) && showCategorySearches) {
            setShowCategorySearches(false);
        }
        if ((query === '' || searchResult.length < 1) && showTagSearches) {
            setShowTagSearches(false);
        }
        if ((query === '' || searchResult.length < 1) && showOfferingSearches) {
            setShowOfferingSearches(false);
        }
        if ((query === '' || searchResult.length < 1) && showServiceSearches) {
            setShowServiceSearches(false);
        }
    }),
        [query];

    useEffect(() => {
        if (blogs || blogPosts || categories || tags || offerings || services)
            rebuildIndex();
    }, [isLoading]);

    const rebuildIndex = () => {
        const {
            Search,
            PrefixIndexStrategy,
            LowerCaseSanitizer,
            TfIdfSearchIndex,
        } = JsSearch;
        /**
         * Defines the field to look for
         */
        const dataToSearch = new Search('id');

        /**
         *  Defines an indexing strategy for the data
         * For example, PrefixIndex takes "cat" and searches
         * "c","ca","cat".
         */
        dataToSearch.indexStrategy = new PrefixIndexStrategy();
        dataToSearch.sanitizer = new LowerCaseSanitizer();
        dataToSearch.searchIndex = new TfIdfSearchIndex('id');
        dataToSearch.addIndex('name');
        dataToSearch.addIndex('title');
        dataToSearch.addIndex('preview'); // blog preview
        dataToSearch.addIndex(['preview', 'text', 'body']);

        if (blogs !== null) {
            dataToSearch.addDocuments(blogs);
        }
        if (blogPosts !== null) {
            dataToSearch.addDocuments(blogPosts);
        }
        if (categories !== null) {
            dataToSearch.addDocuments(categories);
        }
        if (tags !== null) {
            dataToSearch.addDocuments(tags);
        }
        if (offerings !== null) {
            dataToSearch.addDocuments(offerings);
        }
        if (services !== null) {
            dataToSearch.addDocuments(services);
        }
        setSearch(dataToSearch);
    };

    const searchData = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (search !== null) {
            const queryResult: any = search.search(e.target.value); // set to any because Object[] is stupid
            setSearchResult(queryResult);
        }
    };
    const handleIsStrapiBlog = () => {
        return (
            <SearchSection hideElement={showBlogSearches}>
                <Heading level={5}>Blogs</Heading>
                <ul>
                    {isStrapiBlog(searchResult) &&
                        searchResult
                            .filter(data => (data.is_blog ? data : ''))
                            .map(blog => {
                                if (!showBlogSearches)
                                    setShowBlogSearches(true);
                                return (
                                    <li
                                        key={blog.id}
                                        onClick={handleClickOutside}
                                    >
                                        <PaintDripLink
                                            to={`/blogs/${blog.slug}`}
                                        >
                                            {blog.name}
                                        </PaintDripLink>
                                    </li>
                                );
                            })}
                </ul>
            </SearchSection>
        );
    };
    const handleIsStrapiBlogPost = () => {
        return (
            <SearchSection hideElement={showBlogPostSearches}>
                <Heading level={5}>Blog Posts</Heading>
                <ul>
                    {isStrapiBlogPost(searchResult) &&
                        searchResult
                            .filter(data => (data.is_blog_post ? data : ''))
                            .map(post => {
                                if (!showBlogPostSearches)
                                    setShowBlogPostSearches(true);
                                return (
                                    <li
                                        key={post.id}
                                        onClick={handleClickOutside}
                                    >
                                        {' '}
                                        {post.category ? (
                                            <PaintDripLink
                                                to={`/blogs/${post.blog.slug}/${
                                                    post.category.slug
                                                }/${formatDateOnSlug(
                                                    post.published,
                                                )}/${post.slug}`}
                                            >
                                                {post.title}
                                            </PaintDripLink>
                                        ) : (
                                            <PaintDripLink
                                                to={`/blogs/${post.blog.slug}/
                                            }${formatDateOnSlug(
                                                post.published,
                                            )}/${post.slug}`}
                                            >
                                                {post.title}
                                            </PaintDripLink>
                                        )}
                                    </li>
                                );
                            })}
                </ul>
            </SearchSection>
        );
    };

    const handleIsStrapiCategory = () => {
        return (
            <SearchSection hideElement={showCategorySearches}>
                <Heading level={5}>Categories</Heading>
                <ul>
                    {isStrapiCategory(searchResult) &&
                        searchResult
                            .filter(data => {
                                if (data.is_category) return data;
                            })
                            .map(category => {
                                if (!showCategorySearches)
                                    setShowCategorySearches(true);
                                return (
                                    <li
                                        key={category.id}
                                        onClick={handleClickOutside}
                                    >
                                        <PaintDripLink
                                            to={`/categories/${category.slug}`}
                                        >
                                            {category.name}
                                        </PaintDripLink>
                                    </li>
                                );
                            })}
                </ul>
            </SearchSection>
        );
    };

    const handleIsStrapiTag = () => {
        return (
            <SearchSection hideElement={showTagSearches}>
                <Heading level={5}>Tags</Heading>
                <ul>
                    {isStrapiTag(searchResult) &&
                        searchResult
                            .filter(data => {
                                if (data.is_tag) return data;
                            })
                            .map(tag => {
                                if (!showTagSearches) setShowTagSearches(true);
                                return (
                                    <li
                                        key={tag.id}
                                        onClick={handleClickOutside}
                                    >
                                        <PaintDripLink to={`/tags/${tag.slug}`}>
                                            {tag.name}
                                        </PaintDripLink>
                                    </li>
                                );
                            })}
                </ul>
            </SearchSection>
        );
    };
    const handleIsStrapiOffering = () => {
        return (
            <SearchSection hideElement={showOfferingSearches}>
                <Heading level={5}>Offerings</Heading>
                <ul>
                    {isStrapiOffering(searchResult) &&
                        searchResult
                            .filter(data => {
                                if (data.is_offering) return data;
                            })
                            .map(offering => {
                                if (!showOfferingSearches)
                                    setShowOfferingSearches(true);
                                return (
                                    <li
                                        key={offering.id}
                                        onClick={handleClickOutside}
                                    >
                                        <PaintDripLink
                                            to={`work-with-me/${offering.slug}`}
                                        >
                                            {offering.title}
                                        </PaintDripLink>
                                    </li>
                                );
                            })}
                </ul>
            </SearchSection>
        );
    };

    const handleIsStrapiService = () => {
        return (
            <SearchSection hideElement={showServiceSearches}>
                <Heading level={5}>Services</Heading>
                <ul>
                    {isStrapiService(searchResult) &&
                        searchResult
                            .filter(data => {
                                if (data.is_service) return data;
                            })
                            .map(service => {
                                if (!showServiceSearches)
                                    setShowServiceSearches(true);
                                return service.offerings.map(offering => {
                                    return (
                                        <li
                                            key={service.id}
                                            onClick={handleClickOutside}
                                        >
                                            {' '}
                                            <PaintDripLink
                                                to={`/work-with-me/${offering.slug}/${service.slug}`}
                                            >
                                                {`${offering.title}—${service.title}`}
                                            </PaintDripLink>{' '}
                                        </li>
                                    );
                                });
                            })}
                </ul>
            </SearchSection>
        );
    };
    const handleClickOutside = () => {
        setQuery('');
        setSearchResult([]);
    };
    return (
        <Grid>
            <OutsideClickContainer onClickHandler={handleClickOutside}>
                <Flexbox>
                    <StyledLabel htmlFor="search-query">
                        <FaSearch />
                    </StyledLabel>
                    <input
                        id="search-query"
                        type="text"
                        name="search-query"
                        value={query}
                        onChange={event => {
                            searchData(event), setQuery(event.target.value);
                        }}
                    />
                </Flexbox>
                <Grid columns={{xlarge: `repeat(4, 1fr)`, medium: `1fr`}}>
                    {!isLoading && handleIsStrapiBlog()}
                    {!isLoading && handleIsStrapiBlogPost()}
                    {!isLoading && handleIsStrapiCategory()}
                    {!isLoading && handleIsStrapiTag()}
                    {!isLoading && handleIsStrapiOffering()}
                    {!isLoading && handleIsStrapiService()}
                </Grid>
            </OutsideClickContainer>
        </Grid>
    );
};
export default SearchContainer;

const StyledLabel = styled.label`
    align-self: center;
`;