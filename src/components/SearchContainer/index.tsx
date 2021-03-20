import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import * as JsSearch from 'js-search';
import { FaSearch } from 'react-icons/fa';
import SearchSection from './SearchSection';
import Heading from '../Heading';
import Grid from '../Containers/Grid';
import Flexbox from '../Containers/Flexbox';
import OutsideClickContainer from '../OutsideClickContainer';
import { formatDateOnSlug } from '../../utils/format-date';
import styled from 'styled-components';
import { Paragraph, Link } from '../Atoms';

const Label = styled.label`
    align-self: center;
    margin-bottom: 5px;
    margin-right: 5px;
`;

const Input = styled.input`
    font-size: var(--size-text-xsmall);
    border-radius: 0.2rem;
    &:focus {
        background: var(--color-light-blue);
    }
`;

type SearchResult = Array<
    | StrapiBlog
    | StrapiBlogPost
    | StrapiCategory
    | StrapiTag
    | StrapiOffering
    | StrapiService
>;

const SearchContainer = (): JSX.Element => {
    // the search
    const [query, setQuery] = useState('');
    const [search, setSearch] = useState<JsSearch.Search | null>(null);
    const [searchResult, setSearchResult] = useState<SearchResult>([]);

    // the data
    const [blogs, setBlogs] = useState<StrapiBlog[] | null>(null);
    const [blogPosts, setBlogPosts] = useState<StrapiBlogPost[] | null>(null);
    const [categories, setCategories] = useState<StrapiCategory[] | null>(null);
    const [tags, setTags] = useState<StrapiTag[] | null>(null);
    const [offerings, setOfferings] = useState<StrapiOffering[] | null>(null);
    const [services, setServices] = useState<StrapiService[] | null>(null);

    // behavior logic
    const [isLoading, setIsLoading] = useState(true);
    const [hasFound, setHasFound] = useState<boolean>(true);
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
                `${process.env.GATSBY_HEROKU_URL}blog-posts/search`,
            );
            setBlogPosts(blogPosts.data);

            const categories = await Axios(
                `${process.env.GATSBY_HEROKU_URL}categories/search`,
            );
            setCategories(categories.data);

            const tags = await Axios(
                `${process.env.GATSBY_HEROKU_URL}tags/search`,
            );
            setTags(tags.data);

            const offerings = await Axios(
                `${process.env.GATSBY_HEROKU_URL}offerings/search`,
            );
            setOfferings(offerings.data);

            const services = await Axios(
                `${process.env.GATSBY_HEROKU_URL}services/search`,
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
        dataToSearch.addIndex('slug');
        // dataToSearch.addIndex('preview'); // blog preview
        // dataToSearch.addIndex(['preview', 'text', 'body']);

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
                {isStrapiBlog(searchResult) && (
                    <ul>
                        {searchResult
                            .filter(data => (data.is_blog ? data : ''))
                            .map((blog, idx) => {
                                if (!showBlogSearches)
                                    setShowBlogSearches(true);
                                return (
                                    <li
                                        key={`${blog.name}-${idx}`}
                                        onClick={
                                            handleCloseSearchContainerOnClickOutside
                                        }
                                    >
                                        <Link to={`/blogs/${blog.slug}`}>
                                            {blog.name}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                )}
            </SearchSection>
        );
    };

    const handleIsStrapiBlogPost = () => {
        return (
            <SearchSection hideElement={showBlogPostSearches}>
                <Heading level={5}>Blog Posts</Heading>
                {isStrapiBlogPost(searchResult) && (
                    <ul>
                        {searchResult
                            .filter(data => (data.is_blog_post ? data : ''))
                            .map((post, idx) => {
                                if (!showBlogPostSearches)
                                    setShowBlogPostSearches(true);
                                return (
                                    <li
                                        key={`${post.title}-${idx}`}
                                        onClick={
                                            handleCloseSearchContainerOnClickOutside
                                        }
                                    >
                                        {' '}
                                        {post.category ? (
                                            <Link
                                                to={`/blogs/${post.blog.slug}/${
                                                    post.category.slug
                                                }/${formatDateOnSlug(
                                                    post.published,
                                                )}/${post.slug}`}
                                            >
                                                {post.title}
                                            </Link>
                                        ) : (
                                            <Link
                                                to={`/blogs/${post.blog.slug}/
                                            }${formatDateOnSlug(
                                                post.published,
                                            )}/${post.slug}`}
                                            >
                                                {post.title}
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                    </ul>
                )}
            </SearchSection>
        );
    };

    const handleIsStrapiCategory = () => {
        return (
            <SearchSection hideElement={showCategorySearches}>
                <Heading level={5}>Categories</Heading>
                {isStrapiCategory(searchResult) && (
                    <ul>
                        {searchResult
                            .filter(data => {
                                if (data.is_category) return data;
                            })
                            .map((category, idx) => {
                                if (!showCategorySearches)
                                    setShowCategorySearches(true);
                                return (
                                    <li
                                        key={`${category.name}-${idx}`}
                                        onClick={
                                            handleCloseSearchContainerOnClickOutside
                                        }
                                    >
                                        <Link
                                            to={`/categories/${category.slug}`}
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                )}
            </SearchSection>
        );
    };

    const handleIsStrapiTag = () => {
        return (
            <SearchSection hideElement={showTagSearches}>
                <Heading level={5}>Tags</Heading>
                {isStrapiTag(searchResult) && (
                    <ul>
                        {searchResult
                            .filter(data => {
                                if (data.is_tag) return data;
                            })
                            .map((tag, idx) => {
                                if (!showTagSearches) setShowTagSearches(true);
                                return (
                                    <li
                                        key={`${tag.name}-${idx}`}
                                        onClick={
                                            handleCloseSearchContainerOnClickOutside
                                        }
                                    >
                                        <Link to={`/tags/${tag.slug}`}>
                                            {tag.name}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                )}
            </SearchSection>
        );
    };

    const handleIsStrapiOffering = () => {
        return (
            <SearchSection hideElement={showOfferingSearches}>
                <Heading level={5}>Offerings</Heading>
                {isStrapiOffering(searchResult) && (
                    <ul>
                        {searchResult
                            .filter(data => {
                                if (data.is_offering) return data;
                            })
                            .map((offering, idx) => {
                                if (!showOfferingSearches)
                                    setShowOfferingSearches(true);
                                return (
                                    <li
                                        key={`${offering.title}-${idx}`}
                                        onClick={
                                            handleCloseSearchContainerOnClickOutside
                                        }
                                    >
                                        <Link
                                            to={`/work-with-me/${offering.slug}`}
                                        >
                                            {offering.title}
                                        </Link>
                                    </li>
                                );
                            })}
                    </ul>
                )}
            </SearchSection>
        );
    };

    const handleIsStrapiService = () => {
        return (
            <SearchSection hideElement={showServiceSearches}>
                <Heading level={5}>Services</Heading>
                {isStrapiService(searchResult) && (
                    <ul>
                        {searchResult
                            .filter(data => {
                                if (data.is_service) return data;
                            })
                            .map((service, index) => {
                                if (!showServiceSearches)
                                    setShowServiceSearches(true);
                                return service.offerings.map(
                                    (offering, idx) => {
                                        return (
                                            <li
                                                key={`${service.title}${index}-${idx}`}
                                                onClick={
                                                    handleCloseSearchContainerOnClickOutside
                                                }
                                            >
                                                {' '}
                                                <Link
                                                    to={`/work-with-me/${offering.slug}/${service.slug}`}
                                                >
                                                    {`${offering.title}—${service.title}`}
                                                </Link>{' '}
                                            </li>
                                        );
                                    },
                                );
                            })}
                    </ul>
                )}
            </SearchSection>
        );
    };

    const handleCloseSearchContainerOnClickOutside = () => {
        setQuery('');
        setSearchResult([]);
    };

    const findRandomBlogPost = () => {
        if (!blogPosts) return <> </>;

        const randomPost =
            blogPosts[Math.floor(Math.random() * blogPosts.length)];

        return (
            <>
                <Paragraph>
                    Oh no! 😮 We couldn't find anything under "{query}". <br />{' '}
                    How about we pull a random blog post for you to read,
                    instead?
                </Paragraph>

                <Link
                    to={
                        randomPost.category
                            ? `/blogs/${randomPost.blog.slug}/${
                                  randomPost.category.slug
                              }/${formatDateOnSlug(randomPost.published)}/${
                                  randomPost.slug
                              }`
                            : `/blogs/${
                                  randomPost.blog.slug
                              }/${formatDateOnSlug(randomPost.published)}/${
                                  randomPost.slug
                              }`
                    }
                    onClick={handleCloseSearchContainerOnClickOutside}
                >
                    {randomPost.title}
                </Link>
            </>
        );
    };

    useEffect(() => {
        searchResult.length === 0 ? setHasFound(false) : setHasFound(true);
        query.length === 0 && setHasFound(true); // don't show if empty
    }, [searchResult]);

    return (
        <Grid>
            <OutsideClickContainer
                onClickHandler={handleCloseSearchContainerOnClickOutside}
            >
                <Flexbox inline center middle>
                    <Label htmlFor="search-query">
                        <FaSearch />
                    </Label>

                    <Input
                        id="search-query"
                        type="text"
                        name="search-query"
                        value={query}
                        // onBlur={() => setHasFound(true)}
                        onChange={event => {
                            const inputValue = event.target.value;
                            searchData(event), setQuery(inputValue);
                        }}
                    />
                </Flexbox>

                {!hasFound && searchResult.length < 1 && findRandomBlogPost()}
                {hasFound && searchResult.length > 0 && (
                    <Grid
                        containerType="ul"
                        columns={{
                            xlarge: `repeat(4, 1fr)`,
                            medium: `repeat(3, 1fr)`,
                            small: `1fr 1fr`,
                            xsmall: `1fr`,
                        }}
                    >
                        {!isLoading && handleIsStrapiBlog()}

                        {!isLoading && handleIsStrapiBlogPost()}

                        {!isLoading && handleIsStrapiCategory()}

                        {!isLoading && handleIsStrapiTag()}

                        {!isLoading && handleIsStrapiOffering()}

                        {!isLoading && handleIsStrapiService()}
                    </Grid>
                )}
            </OutsideClickContainer>
        </Grid>
    );
};
export default SearchContainer;
