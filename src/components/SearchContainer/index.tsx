import React, { useCallback, useEffect, useState } from 'react';
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
import { Paragraph, Link } from '../Elements';
import {
  Blog,
  BlogPost,
  Category,
  Tag,
  Offering,
  Service,
} from '../../typings/strapi';

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
  Blog | BlogPost | Category | Tag | Offering | Service
>;

const SearchContainer = (): JSX.Element => {
  // the search
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState<JsSearch.Search | null>(null);
  const [searchResult, setSearchResult] = useState<SearchResult>([]);

  // the data
  const [blogs, setBlogs] = useState<Blog[] | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[] | null>(null);
  const [categories, setCategories] = useState<Category[] | null>(null);
  const [tags, setTags] = useState<Tag[] | null>(null);
  const [offerings, setOfferings] = useState<Offering[] | null>(null);
  const [services, setServices] = useState<Service[] | null>(null);

  // behavior logic
  const [isLoading, setIsLoading] = useState(true);
  const [hasFound, setHasFound] = useState<boolean>(true);
  const [showBlogSearches, setShowBlogSearches] = useState(false);
  const [showBlogPostSearches, setShowBlogPostSearches] = useState(false);
  const [showCategorySearches, setShowCategorySearches] = useState(false);
  const [showTagSearches, setShowTagSearches] = useState(false);
  const [showOfferingSearches, setShowOfferingSearches] = useState(false);
  const [showServiceSearches, setShowServiceSearches] = useState(false);

  const isBlog = (sr: SearchResult): sr is Blog[] => {
    return (sr as Blog[]) !== undefined;
  };

  const isBlogPost = (sr: SearchResult): sr is BlogPost[] => {
    return (sr as BlogPost[]) !== undefined;
  };

  const isCategory = (sr: SearchResult): sr is Category[] => {
    return (sr as Category[]) !== undefined;
  };

  const isTag = (sr: SearchResult): sr is Tag[] => {
    return (sr as Tag[]) !== undefined;
  };

  const isOffering = (sr: SearchResult): sr is Offering[] => {
    return (sr as Offering[]) !== undefined;
  };

  const isService = (sr: SearchResult): sr is Service[] => {
    return (sr as Service[]) !== undefined;
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
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

      const tags = await Axios(`${process.env.GATSBY_HEROKU_URL}tags/search`);
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
  }, [
    query,
    searchResult.length,
    showBlogSearches,
    showBlogPostSearches,
    showCategorySearches,
    showTagSearches,
    showOfferingSearches,
    showServiceSearches,
  ]);

  const rebuildIndex = useCallback(() => {
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
  }, [blogs, blogPosts, categories, tags, offerings, services]);

  useEffect(() => {
    if (blogs || blogPosts || categories || tags || offerings || services)
      rebuildIndex();
  }, [
    isLoading,
    blogs,
    blogPosts,
    categories,
    tags,
    offerings,
    services,
    rebuildIndex,
  ]);

  const searchData = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (search !== null) {
      // set to any because Object[] is stupid
      const queryResult: any = search.search(e.target.value);
      setSearchResult(queryResult);
    }
  };

  const handleCloseSearchContainerOnClickOutside = (): void => {
    setQuery('');
    setSearchResult([]);
  };

  const handleIsBlog = (): JSX.Element => {
    return (
      <SearchSection hideElement={showBlogSearches}>
        <Heading level={5}>Blogs</Heading>
        {isBlog(searchResult) && (
          <ul>
            {searchResult
              .filter(data => data.is_blog)
              .map((blog, idx) => {
                if (!showBlogSearches) setShowBlogSearches(true);
                return (
                  <li
                    key={`${blog.name}-${idx}`}
                    onClick={handleCloseSearchContainerOnClickOutside}
                  >
                    <Link to={`/blogs/${blog.slug}`}>{blog.name}</Link>
                  </li>
                );
              })}
          </ul>
        )}
      </SearchSection>
    );
  };

  const handleIsBlogPost = (): JSX.Element => {
    return (
      <SearchSection hideElement={showBlogPostSearches}>
        <Heading level={5}>Blog Posts</Heading>
        {isBlogPost(searchResult) && (
          <ul>
            {searchResult
              .filter(data => data.is_blog_post)
              .map((post, idx) => {
                if (!showBlogPostSearches) setShowBlogPostSearches(true);
                return (
                  <li
                    key={`${post.title}-${idx}`}
                    onClick={handleCloseSearchContainerOnClickOutside}
                  >
                    {' '}
                    {post.category ? (
                      <Link
                        to={`/blogs/${post.blog.slug}/${
                          post.category.slug
                        }/${formatDateOnSlug(post.published)}/${post.slug}`}
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

  const handleIsCategory = (): JSX.Element => {
    return (
      <SearchSection hideElement={showCategorySearches}>
        <Heading level={5}>Categories</Heading>
        {isCategory(searchResult) && (
          <ul>
            {searchResult
              .filter(data => data.is_category)
              .map((category, idx) => {
                if (!showCategorySearches) setShowCategorySearches(true);
                return (
                  <li
                    key={`${category.name}-${idx}`}
                    onClick={handleCloseSearchContainerOnClickOutside}
                  >
                    <Link to={`/categories/${category.slug}`}>
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

  const handleIsTag = (): JSX.Element => {
    return (
      <SearchSection hideElement={showTagSearches}>
        <Heading level={5}>Tags</Heading>
        {isTag(searchResult) && (
          <ul>
            {searchResult
              .filter(data => data.is_tag)
              .map((tag, idx) => {
                if (!showTagSearches) setShowTagSearches(true);
                return (
                  <li
                    key={`${tag.name}-${idx}`}
                    onClick={handleCloseSearchContainerOnClickOutside}
                  >
                    <Link to={`/tags/${tag.slug}`}>{tag.name}</Link>
                  </li>
                );
              })}
          </ul>
        )}
      </SearchSection>
    );
  };

  const handleIsOffering = (): JSX.Element => {
    return (
      <SearchSection hideElement={showOfferingSearches}>
        <Heading level={5}>Offerings</Heading>
        {isOffering(searchResult) && (
          <ul>
            {searchResult
              .filter(data => data.is_offering)
              .map((offering, idx) => {
                if (!showOfferingSearches) setShowOfferingSearches(true);
                return (
                  <li
                    key={`${offering.title}-${idx}`}
                    onClick={handleCloseSearchContainerOnClickOutside}
                  >
                    <Link to={`/work-with-me/${offering.slug}`}>
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

  const handleIsService = (): JSX.Element => {
    return (
      <SearchSection hideElement={showServiceSearches}>
        <Heading level={5}>Services</Heading>
        {isService(searchResult) && (
          <ul>
            {searchResult
              .filter(data => data.is_service)
              .map((service, index) => {
                if (!showServiceSearches) setShowServiceSearches(true);
                return service.offerings.map((offering, idx) => {
                  return (
                    <li
                      key={`${service.title}${index}-${idx}`}
                      onClick={handleCloseSearchContainerOnClickOutside}
                    >
                      {' '}
                      <Link
                        to={`/work-with-me/${offering.slug}/${service.slug}`}
                      >
                        {`${offering.title}—${service.title}`}
                      </Link>{' '}
                    </li>
                  );
                });
              })}
          </ul>
        )}
      </SearchSection>
    );
  };

  const findRandomBlogPost = (): JSX.Element => {
    if (!blogPosts) return <> </>;

    const randomPost = blogPosts[Math.floor(Math.random() * blogPosts.length)];

    return (
      <>
        <Paragraph>
          Oh no! 😮 We couldn't find anything under "{query}". <br /> How about
          we pull a random blog post for you to read, instead?
        </Paragraph>

        <Link
          to={
            randomPost.category
              ? `/blogs/${randomPost.blog.slug}/${
                  randomPost.category.slug
                }/${formatDateOnSlug(randomPost.published)}/${randomPost.slug}`
              : `/blogs/${randomPost.blog.slug}/${formatDateOnSlug(
                  randomPost.published,
                )}/${randomPost.slug}`
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
  }, [searchResult, query.length]);

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
              xlarge: 'repeat(4, 1fr)',
              medium: 'repeat(3, 1fr)',
              small: '1fr 1fr',
              xsmall: '1fr',
            }}
          >
            {!isLoading && handleIsBlog()}

            {!isLoading && handleIsBlogPost()}

            {!isLoading && handleIsCategory()}

            {!isLoading && handleIsTag()}

            {!isLoading && handleIsOffering()}

            {!isLoading && handleIsService()}
          </Grid>
        )}
      </OutsideClickContainer>
    </Grid>
  );
};
export default SearchContainer;
