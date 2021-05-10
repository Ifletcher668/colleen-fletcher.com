export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the
   * `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO
   * 8601 standard for representation of dates and times using the Gregorian calendar.
   */
  STRAPI_DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  STRAPI_JSON: any;
  /** Input type for dynamic zone body of BlogPost */
  STRAPI_BlogPostBodyDynamicZoneInput: any;
  /** Input type for dynamic zone content of MenuItem */
  STRAPI_MenuItemContentDynamicZoneInput: any;
  /** Input type for dynamic zone banner of Page */
  STRAPI_PageBannerDynamicZoneInput: any;
  /** Input type for dynamic zone body of Page */
  STRAPI_PageBodyDynamicZoneInput: any;
  /** Input type for dynamic zone banner of Service */
  STRAPI_ServiceBannerDynamicZoneInput: any;
  /** Input type for dynamic zone sales_page of Service */
  STRAPI_ServiceSalesPageDynamicZoneInput: any;
  /**
   * A date string, such as 2007-12-03, compliant with the `full-date` format
   * outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  STRAPI_Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  STRAPI_Long: any;
  /** A time string with format: HH:mm:ss.SSS */
  STRAPI_Time: any;
  /** The `Upload` scalar type represents a file upload. */
  STRAPI_Upload: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /**
   * Force the output format for the low-res preview. Default is to use the same
   * format as the input. You should rarely need to change this
   */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___resolutions___base64'
  | 'childrenImageSharp___resolutions___tracedSVG'
  | 'childrenImageSharp___resolutions___aspectRatio'
  | 'childrenImageSharp___resolutions___width'
  | 'childrenImageSharp___resolutions___height'
  | 'childrenImageSharp___resolutions___src'
  | 'childrenImageSharp___resolutions___srcSet'
  | 'childrenImageSharp___resolutions___srcWebp'
  | 'childrenImageSharp___resolutions___srcSetWebp'
  | 'childrenImageSharp___resolutions___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___sizes___base64'
  | 'childrenImageSharp___sizes___tracedSVG'
  | 'childrenImageSharp___sizes___aspectRatio'
  | 'childrenImageSharp___sizes___src'
  | 'childrenImageSharp___sizes___srcSet'
  | 'childrenImageSharp___sizes___srcWebp'
  | 'childrenImageSharp___sizes___srcSetWebp'
  | 'childrenImageSharp___sizes___sizes'
  | 'childrenImageSharp___sizes___originalImg'
  | 'childrenImageSharp___sizes___originalName'
  | 'childrenImageSharp___sizes___presentationWidth'
  | 'childrenImageSharp___sizes___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___resolutions___base64'
  | 'childImageSharp___resolutions___tracedSVG'
  | 'childImageSharp___resolutions___aspectRatio'
  | 'childImageSharp___resolutions___width'
  | 'childImageSharp___resolutions___height'
  | 'childImageSharp___resolutions___src'
  | 'childImageSharp___resolutions___srcSet'
  | 'childImageSharp___resolutions___srcWebp'
  | 'childImageSharp___resolutions___srcSetWebp'
  | 'childImageSharp___resolutions___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___sizes___base64'
  | 'childImageSharp___sizes___tracedSVG'
  | 'childImageSharp___sizes___aspectRatio'
  | 'childImageSharp___sizes___src'
  | 'childImageSharp___sizes___srcSet'
  | 'childImageSharp___sizes___srcWebp'
  | 'childImageSharp___sizes___srcSetWebp'
  | 'childImageSharp___sizes___sizes'
  | 'childImageSharp___sizes___originalImg'
  | 'childImageSharp___sizes___originalName'
  | 'childImageSharp___sizes___presentationWidth'
  | 'childImageSharp___sizes___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type GraphQlSource = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
};

export type GraphQlSourceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<GraphQlSourceGroupConnection>;
};


export type GraphQlSourceConnectionDistinctArgs = {
  field: GraphQlSourceFieldsEnum;
};


export type GraphQlSourceConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: GraphQlSourceFieldsEnum;
};

export type GraphQlSourceEdge = {
  next?: Maybe<GraphQlSource>;
  node: GraphQlSource;
  previous?: Maybe<GraphQlSource>;
};

export type GraphQlSourceFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'typeName'
  | 'fieldName';

export type GraphQlSourceFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};

export type GraphQlSourceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<GraphQlSourceEdge>;
  nodes: Array<GraphQlSource>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type GraphQlSourceSortInput = {
  fields?: Maybe<Array<Maybe<GraphQlSourceFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ImageSharpResolutions>;
  fluid?: Maybe<ImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ImageSharpSizes>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'resolutions___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'sizes___originalImg'
  | 'sizes___originalName'
  | 'sizes___presentationWidth'
  | 'sizes___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  graphQlSource?: Maybe<GraphQlSource>;
  allGraphQlSource: GraphQlSourceConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  strapi: Strapi;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  sizes?: Maybe<ImageSharpSizesFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGraphQlSourceArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllGraphQlSourceArgs = {
  filter?: Maybe<GraphQlSourceFilterInput>;
  sort?: Maybe<GraphQlSourceSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___author___name'
  | 'siteMetadata___author___bio'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  id?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___output'
  | 'pluginCreator___pluginOptions___createLinkInHead'
  | 'pluginCreator___pluginOptions___indentedSyntax'
  | 'pluginCreator___pluginOptions___indentType'
  | 'pluginCreator___pluginOptions___indentWidth'
  | 'pluginCreator___pluginOptions___linefeed'
  | 'pluginCreator___pluginOptions___omitSourceMapUrl'
  | 'pluginCreator___pluginOptions___precision'
  | 'pluginCreator___pluginOptions___sourceComments'
  | 'pluginCreator___pluginOptions___sourceMapContents'
  | 'pluginCreator___pluginOptions___sourceMapEmbed'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___namespace'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___rule___include'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___typeName'
  | 'pluginCreator___pluginOptions___fieldName'
  | 'pluginCreator___pluginOptions___url'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___output'
  | 'pluginOptions___createLinkInHead'
  | 'pluginOptions___indentedSyntax'
  | 'pluginOptions___indentType'
  | 'pluginOptions___indentWidth'
  | 'pluginOptions___linefeed'
  | 'pluginOptions___omitSourceMapUrl'
  | 'pluginOptions___precision'
  | 'pluginOptions___sourceComments'
  | 'pluginOptions___sourceMapContents'
  | 'pluginOptions___sourceMapEmbed'
  | 'pluginOptions___displayName'
  | 'pluginOptions___fileName'
  | 'pluginOptions___namespace'
  | 'pluginOptions___minify'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___rule___include'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___path'
  | 'pluginOptions___typeName'
  | 'pluginOptions___fieldName'
  | 'pluginOptions___url'
  | 'pluginOptions___pathCheck'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  output?: Maybe<Scalars['String']>;
  createLinkInHead?: Maybe<Scalars['Boolean']>;
  indentedSyntax?: Maybe<Scalars['Boolean']>;
  indentType?: Maybe<Scalars['String']>;
  indentWidth?: Maybe<Scalars['Int']>;
  linefeed?: Maybe<Scalars['String']>;
  omitSourceMapUrl?: Maybe<Scalars['Boolean']>;
  precision?: Maybe<Scalars['Int']>;
  sourceComments?: Maybe<Scalars['Boolean']>;
  sourceMapContents?: Maybe<Scalars['Boolean']>;
  sourceMapEmbed?: Maybe<Scalars['Boolean']>;
  displayName?: Maybe<Scalars['Boolean']>;
  fileName?: Maybe<Scalars['Boolean']>;
  namespace?: Maybe<Scalars['String']>;
  minify?: Maybe<Scalars['Boolean']>;
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>;
  pure?: Maybe<Scalars['Boolean']>;
  rule?: Maybe<SitePluginPluginOptionsRule>;
  name?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
  start_url?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  legacy?: Maybe<Scalars['Boolean']>;
  theme_color_in_head?: Maybe<Scalars['Boolean']>;
  cache_busting_mode?: Maybe<Scalars['String']>;
  crossOrigin?: Maybe<Scalars['String']>;
  include_favicon?: Maybe<Scalars['Boolean']>;
  cacheDigest?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  typeName?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFilterInput = {
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  output?: Maybe<StringQueryOperatorInput>;
  createLinkInHead?: Maybe<BooleanQueryOperatorInput>;
  indentedSyntax?: Maybe<BooleanQueryOperatorInput>;
  indentType?: Maybe<StringQueryOperatorInput>;
  indentWidth?: Maybe<IntQueryOperatorInput>;
  linefeed?: Maybe<StringQueryOperatorInput>;
  omitSourceMapUrl?: Maybe<BooleanQueryOperatorInput>;
  precision?: Maybe<IntQueryOperatorInput>;
  sourceComments?: Maybe<BooleanQueryOperatorInput>;
  sourceMapContents?: Maybe<BooleanQueryOperatorInput>;
  sourceMapEmbed?: Maybe<BooleanQueryOperatorInput>;
  displayName?: Maybe<BooleanQueryOperatorInput>;
  fileName?: Maybe<BooleanQueryOperatorInput>;
  namespace?: Maybe<StringQueryOperatorInput>;
  minify?: Maybe<BooleanQueryOperatorInput>;
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>;
  pure?: Maybe<BooleanQueryOperatorInput>;
  rule?: Maybe<SitePluginPluginOptionsRuleFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  short_name?: Maybe<StringQueryOperatorInput>;
  start_url?: Maybe<StringQueryOperatorInput>;
  icon?: Maybe<StringQueryOperatorInput>;
  legacy?: Maybe<BooleanQueryOperatorInput>;
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>;
  cache_busting_mode?: Maybe<StringQueryOperatorInput>;
  crossOrigin?: Maybe<StringQueryOperatorInput>;
  include_favicon?: Maybe<BooleanQueryOperatorInput>;
  cacheDigest?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  typeName?: Maybe<StringQueryOperatorInput>;
  fieldName?: Maybe<StringQueryOperatorInput>;
  url?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsRule = {
  include?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsRuleFilterInput = {
  include?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  author?: Maybe<SiteSiteMetadataAuthor>;
};

export type SiteSiteMetadataAuthor = {
  name?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataAuthorFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  bio?: Maybe<StringQueryOperatorInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<SiteSiteMetadataAuthorFilterInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type Strapi = {
  blogPost?: Maybe<Strapi_BlogPost>;
  blogPosts?: Maybe<Array<Maybe<Strapi_BlogPost>>>;
  blogPostsConnection?: Maybe<Strapi_BlogPostConnection>;
  blog?: Maybe<Strapi_Blog>;
  blogs?: Maybe<Array<Maybe<Strapi_Blog>>>;
  blogsConnection?: Maybe<Strapi_BlogConnection>;
  category?: Maybe<Strapi_Category>;
  categories?: Maybe<Array<Maybe<Strapi_Category>>>;
  categoriesConnection?: Maybe<Strapi_CategoryConnection>;
  menuItem?: Maybe<Strapi_MenuItem>;
  menuItems?: Maybe<Array<Maybe<Strapi_MenuItem>>>;
  menuItemsConnection?: Maybe<Strapi_MenuItemConnection>;
  offering?: Maybe<Strapi_Offering>;
  offerings?: Maybe<Array<Maybe<Strapi_Offering>>>;
  offeringsConnection?: Maybe<Strapi_OfferingConnection>;
  page?: Maybe<Strapi_Page>;
  pages?: Maybe<Array<Maybe<Strapi_Page>>>;
  pagesConnection?: Maybe<Strapi_PageConnection>;
  service?: Maybe<Strapi_Service>;
  services?: Maybe<Array<Maybe<Strapi_Service>>>;
  servicesConnection?: Maybe<Strapi_ServiceConnection>;
  tag?: Maybe<Strapi_Tag>;
  tags?: Maybe<Array<Maybe<Strapi_Tag>>>;
  tagsConnection?: Maybe<Strapi_TagConnection>;
  files?: Maybe<Array<Maybe<Strapi_UploadFile>>>;
  filesConnection?: Maybe<Strapi_UploadFileConnection>;
  role?: Maybe<Strapi_UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<Strapi_UsersPermissionsRole>>>;
  rolesConnection?: Maybe<Strapi_UsersPermissionsRoleConnection>;
  user?: Maybe<Strapi_UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<Strapi_UsersPermissionsUser>>>;
  usersConnection?: Maybe<Strapi_UsersPermissionsUserConnection>;
  me?: Maybe<Strapi_UsersPermissionsMe>;
};


export type StrapiBlogPostArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiBlogPostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiBlogPostsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type StrapiBlogArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiBlogsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiBlogsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type StrapiCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type StrapiMenuItemArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiMenuItemsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiMenuItemsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type StrapiOfferingArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiOfferingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiOfferingsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type StrapiPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiPagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiPagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type StrapiServiceArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiServicesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiServicesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type StrapiTagArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiTagsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type StrapiFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type StrapiRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type StrapiUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
  publicationState?: Maybe<Strapi_PublicationState>;
};


export type StrapiUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_AdminUser = {
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type Strapi_Blog = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Strapi_ComponentGeneralPreview>;
  is_blog?: Maybe<Scalars['Boolean']>;
  meta_description?: Maybe<Scalars['String']>;
  blog_posts?: Maybe<Array<Maybe<Strapi_BlogPost>>>;
  fullUrlPath?: Maybe<Scalars['String']>;
};


export type Strapi_BlogBlog_PostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_BlogAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Strapi_BlogConnection = {
  values?: Maybe<Array<Maybe<Strapi_Blog>>>;
  groupBy?: Maybe<Strapi_BlogGroupBy>;
  aggregate?: Maybe<Strapi_BlogAggregator>;
};

export type Strapi_BlogConnectionCreated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_BlogConnection>;
};

export type Strapi_BlogConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_BlogConnection>;
};

export type Strapi_BlogConnectionIs_Blog = {
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<Strapi_BlogConnection>;
};

export type Strapi_BlogConnectionMeta_Description = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_BlogConnection>;
};

export type Strapi_BlogConnectionName = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_BlogConnection>;
};

export type Strapi_BlogConnectionPreview = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_BlogConnection>;
};

export type Strapi_BlogConnectionSlug = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_BlogConnection>;
};

export type Strapi_BlogConnectionUpdated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_BlogConnection>;
};

export type Strapi_BlogGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_BlogConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Strapi_BlogConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Strapi_BlogConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<Strapi_BlogConnectionName>>>;
  slug?: Maybe<Array<Maybe<Strapi_BlogConnectionSlug>>>;
  preview?: Maybe<Array<Maybe<Strapi_BlogConnectionPreview>>>;
  is_blog?: Maybe<Array<Maybe<Strapi_BlogConnectionIs_Blog>>>;
  meta_description?: Maybe<Array<Maybe<Strapi_BlogConnectionMeta_Description>>>;
};

export type Strapi_BlogInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Strapi_ComponentGeneralPreviewInput>;
  blog_posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_blog?: Maybe<Scalars['Boolean']>;
  meta_description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_BlogPost = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  title: Scalars['String'];
  slug: Scalars['String'];
  published: Scalars['STRAPI_DateTime'];
  cover_image?: Maybe<Strapi_UploadFile>;
  body: Array<Maybe<Strapi_BlogPostBodyDynamicZone>>;
  blog?: Maybe<Strapi_Blog>;
  category?: Maybe<Strapi_Category>;
  is_blog_post?: Maybe<Scalars['Boolean']>;
  preview?: Maybe<Strapi_ComponentGeneralPreview>;
  meta_description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  tags?: Maybe<Array<Maybe<Strapi_Tag>>>;
  fullUrlPath?: Maybe<Scalars['String']>;
};


export type Strapi_BlogPostTagsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_BlogPostAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Strapi_BlogPostBodyDynamicZone = Strapi_ComponentMediaSingleVideo | Strapi_ComponentMediaSingleImage | Strapi_ComponentMediaImages | Strapi_ComponentMediaFiles | Strapi_ComponentMediaSingleFile | Strapi_ComponentTextHeading | Strapi_ComponentTextParagraph | Strapi_ComponentTextQuote | Strapi_ComponentSectionTextRightImageLeft | Strapi_ComponentSectionTextCenterImageEitherSide | Strapi_ComponentSectionHeadingLeftImageRight | Strapi_ComponentSectionImageRightTextLeft | Strapi_ComponentSectionImageCenterTextEitherSide | Strapi_ComponentSectionHeadingRightImageLeft | Strapi_ComponentWidgetDivider | Strapi_ComponentWidgetEmbeddedForm | Strapi_ComponentWidgetButton;


export type Strapi_BlogPostConnection = {
  values?: Maybe<Array<Maybe<Strapi_BlogPost>>>;
  groupBy?: Maybe<Strapi_BlogPostGroupBy>;
  aggregate?: Maybe<Strapi_BlogPostAggregator>;
};

export type Strapi_BlogPostConnectionBlog = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionCategory = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionCover_Image = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionCreated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionIs_Blog_Post = {
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionMeta_Description = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionPreview = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionPublished = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionPublished_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionSlug = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionTitle = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostConnectionUpdated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_BlogPostConnection>;
};

export type Strapi_BlogPostGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_BlogPostConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Strapi_BlogPostConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Strapi_BlogPostConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<Strapi_BlogPostConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<Strapi_BlogPostConnectionSlug>>>;
  published?: Maybe<Array<Maybe<Strapi_BlogPostConnectionPublished>>>;
  cover_image?: Maybe<Array<Maybe<Strapi_BlogPostConnectionCover_Image>>>;
  blog?: Maybe<Array<Maybe<Strapi_BlogPostConnectionBlog>>>;
  category?: Maybe<Array<Maybe<Strapi_BlogPostConnectionCategory>>>;
  is_blog_post?: Maybe<Array<Maybe<Strapi_BlogPostConnectionIs_Blog_Post>>>;
  preview?: Maybe<Array<Maybe<Strapi_BlogPostConnectionPreview>>>;
  meta_description?: Maybe<Array<Maybe<Strapi_BlogPostConnectionMeta_Description>>>;
  published_at?: Maybe<Array<Maybe<Strapi_BlogPostConnectionPublished_At>>>;
};

export type Strapi_BlogPostInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  published: Scalars['STRAPI_DateTime'];
  cover_image?: Maybe<Scalars['ID']>;
  body: Array<Scalars['STRAPI_BlogPostBodyDynamicZoneInput']>;
  blog?: Maybe<Scalars['ID']>;
  category?: Maybe<Scalars['ID']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_blog_post?: Maybe<Scalars['Boolean']>;
  preview?: Maybe<Strapi_ComponentGeneralPreviewInput>;
  meta_description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_Category = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  is_category?: Maybe<Scalars['Boolean']>;
  blog_posts?: Maybe<Array<Maybe<Strapi_BlogPost>>>;
};


export type Strapi_CategoryBlog_PostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_CategoryAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Strapi_CategoryConnection = {
  values?: Maybe<Array<Maybe<Strapi_Category>>>;
  groupBy?: Maybe<Strapi_CategoryGroupBy>;
  aggregate?: Maybe<Strapi_CategoryAggregator>;
};

export type Strapi_CategoryConnectionCreated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_CategoryConnection>;
};

export type Strapi_CategoryConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_CategoryConnection>;
};

export type Strapi_CategoryConnectionIs_Category = {
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<Strapi_CategoryConnection>;
};

export type Strapi_CategoryConnectionName = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_CategoryConnection>;
};

export type Strapi_CategoryConnectionSlug = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_CategoryConnection>;
};

export type Strapi_CategoryConnectionUpdated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_CategoryConnection>;
};

export type Strapi_CategoryGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_CategoryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Strapi_CategoryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Strapi_CategoryConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<Strapi_CategoryConnectionName>>>;
  slug?: Maybe<Array<Maybe<Strapi_CategoryConnectionSlug>>>;
  is_category?: Maybe<Array<Maybe<Strapi_CategoryConnectionIs_Category>>>;
};

export type Strapi_CategoryInput = {
  name: Scalars['String'];
  blog_posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug: Scalars['String'];
  is_category?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_CommentInput = {
  content: Scalars['String'];
  blocked?: Maybe<Scalars['Boolean']>;
  blockedThread?: Maybe<Scalars['Boolean']>;
  blockReason?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  authorUser?: Maybe<Scalars['ID']>;
  authorType?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<Scalars['String']>;
  relatedSlug?: Maybe<Scalars['String']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  reports?: Maybe<Array<Maybe<Scalars['ID']>>>;
  threadOf?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_CommentsComment = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  content: Scalars['String'];
  blocked?: Maybe<Scalars['Boolean']>;
  blockedThread?: Maybe<Scalars['Boolean']>;
  blockReason?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  authorUser?: Maybe<Strapi_UsersPermissionsUser>;
  authorType?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<Scalars['String']>;
  threadOf?: Maybe<Strapi_CommentsComment>;
  related?: Maybe<Array<Maybe<Strapi_Morph>>>;
  reports?: Maybe<Array<Maybe<Strapi_CommentsReport>>>;
};


export type Strapi_CommentsCommentRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type Strapi_CommentsCommentReportsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_CommentsReport = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  content?: Maybe<Scalars['String']>;
  reason: Strapi_Enum_Commentsreport_Reason;
  resolved?: Maybe<Scalars['Boolean']>;
  related?: Maybe<Strapi_CommentsComment>;
};

export type Strapi_ComponentCollectionsBlogInput = {
  blogs?: Maybe<Array<Maybe<Scalars['ID']>>>;
  show_blog_posts?: Maybe<Scalars['Boolean']>;
};

export type Strapi_ComponentCollectionsBlogPostInput = {
  blog_posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Strapi_ComponentCollectionsBlogPosts = {
  id: Scalars['ID'];
  blog_posts?: Maybe<Array<Maybe<Strapi_BlogPost>>>;
};


export type Strapi_ComponentCollectionsBlogPostsBlog_PostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_ComponentCollectionsBlogs = {
  id: Scalars['ID'];
  show_blog_posts?: Maybe<Scalars['Boolean']>;
  blogs?: Maybe<Array<Maybe<Strapi_Blog>>>;
};


export type Strapi_ComponentCollectionsBlogsBlogsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_ComponentCollectionsOfferingInput = {
  offerings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  show_services?: Maybe<Scalars['Boolean']>;
};

export type Strapi_ComponentCollectionsOfferings = {
  id: Scalars['ID'];
  show_services?: Maybe<Scalars['Boolean']>;
  offerings?: Maybe<Array<Maybe<Strapi_Offering>>>;
};


export type Strapi_ComponentCollectionsOfferingsOfferingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_ComponentCollectionsServiceInput = {
  services?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Strapi_ComponentCollectionsServices = {
  id: Scalars['ID'];
  services?: Maybe<Array<Maybe<Strapi_Service>>>;
};


export type Strapi_ComponentCollectionsServicesServicesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_ComponentGeneralPreview = {
  id: Scalars['ID'];
  heading?: Maybe<Strapi_ComponentTextHeading>;
  text?: Maybe<Strapi_ComponentTextParagraph>;
  image?: Maybe<Strapi_ComponentMediaSingleImage>;
  button?: Maybe<Strapi_ComponentWidgetButton>;
};

export type Strapi_ComponentGeneralPreviewInput = {
  heading?: Maybe<Strapi_ComponentTextHeadingInput>;
  text?: Maybe<Strapi_ComponentTextParagraphInput>;
  image?: Maybe<Strapi_ComponentMediaSingleImageInput>;
  button?: Maybe<Strapi_ComponentWidgetButtonInput>;
};

export type Strapi_ComponentMediaFileInput = {
  files?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Strapi_ComponentMediaFiles = {
  id: Scalars['ID'];
  files?: Maybe<Array<Maybe<Strapi_UploadFile>>>;
};


export type Strapi_ComponentMediaFilesFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_ComponentMediaImageInput = {
  style?: Maybe<Strapi_Enum_Componentmediaimages_Style>;
  files?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_circle?: Maybe<Scalars['Boolean']>;
  has_border?: Maybe<Scalars['Boolean']>;
};

export type Strapi_ComponentMediaImages = {
  id: Scalars['ID'];
  style?: Maybe<Strapi_Enum_Componentmediaimages_Style>;
  is_circle?: Maybe<Scalars['Boolean']>;
  has_border?: Maybe<Scalars['Boolean']>;
  files?: Maybe<Array<Maybe<Strapi_UploadFile>>>;
};


export type Strapi_ComponentMediaImagesFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_ComponentMediaSingleFile = {
  id: Scalars['ID'];
  file?: Maybe<Strapi_UploadFile>;
};

export type Strapi_ComponentMediaSingleFileInput = {
  file?: Maybe<Scalars['ID']>;
};

export type Strapi_ComponentMediaSingleImage = {
  id: Scalars['ID'];
  file?: Maybe<Strapi_UploadFile>;
  is_circle?: Maybe<Scalars['Boolean']>;
  has_border?: Maybe<Scalars['Boolean']>;
  justify?: Maybe<Strapi_Enum_Componentmediasingleimage_Justify>;
  align?: Maybe<Strapi_Enum_Componentmediasingleimage_Align>;
};

export type Strapi_ComponentMediaSingleImageInput = {
  file?: Maybe<Scalars['ID']>;
  is_circle?: Maybe<Scalars['Boolean']>;
  has_border?: Maybe<Scalars['Boolean']>;
  justify?: Maybe<Strapi_Enum_Componentmediasingleimage_Justify>;
  align?: Maybe<Strapi_Enum_Componentmediasingleimage_Align>;
};

/** Upload a url and title to a YouTube video */
export type Strapi_ComponentMediaSingleVideo = {
  id: Scalars['ID'];
  srcURL: Scalars['String'];
  title: Scalars['String'];
};

export type Strapi_ComponentMediaSingleVideoInput = {
  srcURL: Scalars['String'];
  title: Scalars['String'];
};

export type Strapi_ComponentMediaVideoInput = {
  files?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Strapi_ComponentMediaVideos = {
  id: Scalars['ID'];
  files?: Maybe<Array<Maybe<Strapi_UploadFile>>>;
};


export type Strapi_ComponentMediaVideosFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_ComponentSectionHeadingLeftImageRight = {
  id: Scalars['ID'];
  heading?: Maybe<Strapi_ComponentTextHeading>;
  image?: Maybe<Strapi_ComponentMediaSingleImage>;
};

export type Strapi_ComponentSectionHeadingLeftImageRightInput = {
  heading: Strapi_ComponentTextHeadingInput;
  image?: Maybe<Strapi_ComponentMediaSingleImageInput>;
};

export type Strapi_ComponentSectionHeadingRightImageLeft = {
  id: Scalars['ID'];
  heading?: Maybe<Strapi_ComponentTextHeading>;
  image?: Maybe<Strapi_ComponentMediaSingleImage>;
};

export type Strapi_ComponentSectionHeadingRightImageLeftInput = {
  heading: Strapi_ComponentTextHeadingInput;
  image?: Maybe<Strapi_ComponentMediaSingleImageInput>;
};

export type Strapi_ComponentSectionImageCenterTextEitherSide = {
  id: Scalars['ID'];
  text_left?: Maybe<Strapi_ComponentTextParagraph>;
  image?: Maybe<Strapi_ComponentMediaSingleImage>;
  text_right?: Maybe<Strapi_ComponentTextParagraph>;
};

export type Strapi_ComponentSectionImageCenterTextEitherSideInput = {
  text_left?: Maybe<Strapi_ComponentTextParagraphInput>;
  image?: Maybe<Strapi_ComponentMediaSingleImageInput>;
  text_right?: Maybe<Strapi_ComponentTextParagraphInput>;
};

export type Strapi_ComponentSectionImageRightTextLeft = {
  id: Scalars['ID'];
  text?: Maybe<Strapi_ComponentTextParagraph>;
  image?: Maybe<Strapi_ComponentMediaSingleImage>;
};

export type Strapi_ComponentSectionImageRightTextLeftInput = {
  text: Strapi_ComponentTextParagraphInput;
  image?: Maybe<Strapi_ComponentMediaSingleImageInput>;
};

export type Strapi_ComponentSectionTextCenterImageEitherSide = {
  id: Scalars['ID'];
  image_left?: Maybe<Strapi_ComponentMediaSingleImage>;
  text?: Maybe<Strapi_ComponentTextParagraph>;
  image_right?: Maybe<Strapi_ComponentMediaSingleImage>;
};

export type Strapi_ComponentSectionTextCenterImageEitherSideInput = {
  image_left?: Maybe<Strapi_ComponentMediaSingleImageInput>;
  text: Strapi_ComponentTextParagraphInput;
  image_right?: Maybe<Strapi_ComponentMediaSingleImageInput>;
};

export type Strapi_ComponentSectionTextRightImageLeft = {
  id: Scalars['ID'];
  image?: Maybe<Strapi_ComponentMediaSingleImage>;
  text?: Maybe<Strapi_ComponentTextParagraph>;
};

export type Strapi_ComponentSectionTextRightImageLeftInput = {
  image?: Maybe<Strapi_ComponentMediaSingleImageInput>;
  text: Strapi_ComponentTextParagraphInput;
};

export type Strapi_ComponentTextHeading = {
  id: Scalars['ID'];
  text: Scalars['String'];
  level: Strapi_Enum_Componenttextheading_Level;
  tilt: Strapi_Enum_Componenttextheading_Tilt;
  justify?: Maybe<Strapi_Enum_Componenttextheading_Justify>;
  align?: Maybe<Strapi_Enum_Componenttextheading_Align>;
};

export type Strapi_ComponentTextHeadingInput = {
  text: Scalars['String'];
  level?: Maybe<Strapi_Enum_Componenttextheading_Level>;
  tilt?: Maybe<Strapi_Enum_Componenttextheading_Tilt>;
  justify?: Maybe<Strapi_Enum_Componenttextheading_Justify>;
  align?: Maybe<Strapi_Enum_Componenttextheading_Align>;
};

export type Strapi_ComponentTextParagraph = {
  id: Scalars['ID'];
  body: Scalars['String'];
  justify?: Maybe<Strapi_Enum_Componenttextparagraph_Justify>;
  align?: Maybe<Strapi_Enum_Componenttextparagraph_Align>;
};

export type Strapi_ComponentTextParagraphInput = {
  body: Scalars['String'];
  justify?: Maybe<Strapi_Enum_Componenttextparagraph_Justify>;
  align?: Maybe<Strapi_Enum_Componenttextparagraph_Align>;
};

export type Strapi_ComponentTextQuote = {
  id: Scalars['ID'];
  text?: Maybe<Strapi_ComponentTextParagraph>;
};

export type Strapi_ComponentTextQuoteInput = {
  text: Strapi_ComponentTextParagraphInput;
};

export type Strapi_ComponentWidgetButton = {
  id: Scalars['ID'];
  text: Scalars['String'];
  action?: Maybe<Scalars['String']>;
  variant: Strapi_Enum_Componentwidgetbutton_Variant;
};

export type Strapi_ComponentWidgetButtonInput = {
  text: Scalars['String'];
  action?: Maybe<Scalars['String']>;
  variant?: Maybe<Strapi_Enum_Componentwidgetbutton_Variant>;
};

export type Strapi_ComponentWidgetDivider = {
  id: Scalars['ID'];
  style: Strapi_Enum_Componentwidgetdivider_Style;
};

export type Strapi_ComponentWidgetDividerInput = {
  style?: Maybe<Strapi_Enum_Componentwidgetdivider_Style>;
};

export type Strapi_ComponentWidgetEmbeddedForm = {
  id: Scalars['ID'];
  code_snippet: Scalars['String'];
};

export type Strapi_ComponentWidgetEmbeddedFormInput = {
  code_snippet: Scalars['String'];
};

export type Strapi_CreateBlogInput = {
  data?: Maybe<Strapi_BlogInput>;
};

export type Strapi_CreateBlogPayload = {
  blog?: Maybe<Strapi_Blog>;
};

export type Strapi_CreateBlogPostInput = {
  data?: Maybe<Strapi_BlogPostInput>;
};

export type Strapi_CreateBlogPostPayload = {
  blogPost?: Maybe<Strapi_BlogPost>;
};

export type Strapi_CreateCategoryInput = {
  data?: Maybe<Strapi_CategoryInput>;
};

export type Strapi_CreateCategoryPayload = {
  category?: Maybe<Strapi_Category>;
};

export type Strapi_CreateMenuItemInput = {
  data?: Maybe<Strapi_MenuItemInput>;
};

export type Strapi_CreateMenuItemPayload = {
  menuItem?: Maybe<Strapi_MenuItem>;
};

export type Strapi_CreateOfferingInput = {
  data?: Maybe<Strapi_OfferingInput>;
};

export type Strapi_CreateOfferingPayload = {
  offering?: Maybe<Strapi_Offering>;
};

export type Strapi_CreatePageInput = {
  data?: Maybe<Strapi_PageInput>;
};

export type Strapi_CreatePagePayload = {
  page?: Maybe<Strapi_Page>;
};

export type Strapi_CreateRoleInput = {
  data?: Maybe<Strapi_RoleInput>;
};

export type Strapi_CreateRolePayload = {
  role?: Maybe<Strapi_UsersPermissionsRole>;
};

export type Strapi_CreateServiceInput = {
  data?: Maybe<Strapi_ServiceInput>;
};

export type Strapi_CreateServicePayload = {
  service?: Maybe<Strapi_Service>;
};

export type Strapi_CreateTagInput = {
  data?: Maybe<Strapi_TagInput>;
};

export type Strapi_CreateTagPayload = {
  tag?: Maybe<Strapi_Tag>;
};

export type Strapi_CreateUserInput = {
  data?: Maybe<Strapi_UserInput>;
};

export type Strapi_CreateUserPayload = {
  user?: Maybe<Strapi_UsersPermissionsUser>;
};



export type Strapi_DeleteBlogInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeleteBlogPayload = {
  blog?: Maybe<Strapi_Blog>;
};

export type Strapi_DeleteBlogPostInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeleteBlogPostPayload = {
  blogPost?: Maybe<Strapi_BlogPost>;
};

export type Strapi_DeleteCategoryInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeleteCategoryPayload = {
  category?: Maybe<Strapi_Category>;
};

export type Strapi_DeleteFileInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeleteFilePayload = {
  file?: Maybe<Strapi_UploadFile>;
};

export type Strapi_DeleteMenuItemInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeleteMenuItemPayload = {
  menuItem?: Maybe<Strapi_MenuItem>;
};

export type Strapi_DeleteOfferingInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeleteOfferingPayload = {
  offering?: Maybe<Strapi_Offering>;
};

export type Strapi_DeletePageInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeletePagePayload = {
  page?: Maybe<Strapi_Page>;
};

export type Strapi_DeleteRoleInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeleteRolePayload = {
  role?: Maybe<Strapi_UsersPermissionsRole>;
};

export type Strapi_DeleteServiceInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeleteServicePayload = {
  service?: Maybe<Strapi_Service>;
};

export type Strapi_DeleteTagInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeleteTagPayload = {
  tag?: Maybe<Strapi_Tag>;
};

export type Strapi_DeleteUserInput = {
  where?: Maybe<Strapi_InputId>;
};

export type Strapi_DeleteUserPayload = {
  user?: Maybe<Strapi_UsersPermissionsUser>;
};

export type Strapi_EditBlogInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  preview?: Maybe<Strapi_EditComponentGeneralPreviewInput>;
  blog_posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_blog?: Maybe<Scalars['Boolean']>;
  meta_description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditBlogPostInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  published?: Maybe<Scalars['STRAPI_DateTime']>;
  cover_image?: Maybe<Scalars['ID']>;
  body: Array<Scalars['STRAPI_BlogPostBodyDynamicZoneInput']>;
  blog?: Maybe<Scalars['ID']>;
  category?: Maybe<Scalars['ID']>;
  tags?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_blog_post?: Maybe<Scalars['Boolean']>;
  preview?: Maybe<Strapi_EditComponentGeneralPreviewInput>;
  meta_description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditCategoryInput = {
  name?: Maybe<Scalars['String']>;
  blog_posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  is_category?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditCommentInput = {
  content?: Maybe<Scalars['String']>;
  blocked?: Maybe<Scalars['Boolean']>;
  blockedThread?: Maybe<Scalars['Boolean']>;
  blockReason?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  authorUser?: Maybe<Scalars['ID']>;
  authorType?: Maybe<Scalars['String']>;
  authorId?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorAvatar?: Maybe<Scalars['String']>;
  relatedSlug?: Maybe<Scalars['String']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  reports?: Maybe<Array<Maybe<Scalars['ID']>>>;
  threadOf?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditComponentCollectionsBlogInput = {
  id?: Maybe<Scalars['ID']>;
  blogs?: Maybe<Array<Maybe<Scalars['ID']>>>;
  show_blog_posts?: Maybe<Scalars['Boolean']>;
};

export type Strapi_EditComponentCollectionsBlogPostInput = {
  id?: Maybe<Scalars['ID']>;
  blog_posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Strapi_EditComponentCollectionsOfferingInput = {
  id?: Maybe<Scalars['ID']>;
  offerings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  show_services?: Maybe<Scalars['Boolean']>;
};

export type Strapi_EditComponentCollectionsServiceInput = {
  id?: Maybe<Scalars['ID']>;
  services?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Strapi_EditComponentGeneralPreviewInput = {
  id?: Maybe<Scalars['ID']>;
  heading?: Maybe<Strapi_EditComponentTextHeadingInput>;
  text?: Maybe<Strapi_EditComponentTextParagraphInput>;
  image?: Maybe<Strapi_EditComponentMediaSingleImageInput>;
  button?: Maybe<Strapi_EditComponentWidgetButtonInput>;
};

export type Strapi_EditComponentMediaFileInput = {
  id?: Maybe<Scalars['ID']>;
  files?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Strapi_EditComponentMediaImageInput = {
  id?: Maybe<Scalars['ID']>;
  style?: Maybe<Strapi_Enum_Componentmediaimages_Style>;
  files?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_circle?: Maybe<Scalars['Boolean']>;
  has_border?: Maybe<Scalars['Boolean']>;
};

export type Strapi_EditComponentMediaSingleFileInput = {
  id?: Maybe<Scalars['ID']>;
  file?: Maybe<Scalars['ID']>;
};

export type Strapi_EditComponentMediaSingleImageInput = {
  id?: Maybe<Scalars['ID']>;
  file?: Maybe<Scalars['ID']>;
  is_circle?: Maybe<Scalars['Boolean']>;
  has_border?: Maybe<Scalars['Boolean']>;
  justify?: Maybe<Strapi_Enum_Componentmediasingleimage_Justify>;
  align?: Maybe<Strapi_Enum_Componentmediasingleimage_Align>;
};

export type Strapi_EditComponentMediaSingleVideoInput = {
  id?: Maybe<Scalars['ID']>;
  srcURL?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Strapi_EditComponentMediaVideoInput = {
  id?: Maybe<Scalars['ID']>;
  files?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type Strapi_EditComponentSectionHeadingLeftImageRightInput = {
  id?: Maybe<Scalars['ID']>;
  heading?: Maybe<Strapi_EditComponentTextHeadingInput>;
  image?: Maybe<Strapi_EditComponentMediaSingleImageInput>;
};

export type Strapi_EditComponentSectionHeadingRightImageLeftInput = {
  id?: Maybe<Scalars['ID']>;
  heading?: Maybe<Strapi_EditComponentTextHeadingInput>;
  image?: Maybe<Strapi_EditComponentMediaSingleImageInput>;
};

export type Strapi_EditComponentSectionImageCenterTextEitherSideInput = {
  id?: Maybe<Scalars['ID']>;
  text_left?: Maybe<Strapi_EditComponentTextParagraphInput>;
  image?: Maybe<Strapi_EditComponentMediaSingleImageInput>;
  text_right?: Maybe<Strapi_EditComponentTextParagraphInput>;
};

export type Strapi_EditComponentSectionImageRightTextLeftInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Strapi_EditComponentTextParagraphInput>;
  image?: Maybe<Strapi_EditComponentMediaSingleImageInput>;
};

export type Strapi_EditComponentSectionTextCenterImageEitherSideInput = {
  id?: Maybe<Scalars['ID']>;
  image_left?: Maybe<Strapi_EditComponentMediaSingleImageInput>;
  text?: Maybe<Strapi_EditComponentTextParagraphInput>;
  image_right?: Maybe<Strapi_EditComponentMediaSingleImageInput>;
};

export type Strapi_EditComponentSectionTextRightImageLeftInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Strapi_EditComponentMediaSingleImageInput>;
  text?: Maybe<Strapi_EditComponentTextParagraphInput>;
};

export type Strapi_EditComponentTextHeadingInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  level?: Maybe<Strapi_Enum_Componenttextheading_Level>;
  tilt?: Maybe<Strapi_Enum_Componenttextheading_Tilt>;
  justify?: Maybe<Strapi_Enum_Componenttextheading_Justify>;
  align?: Maybe<Strapi_Enum_Componenttextheading_Align>;
};

export type Strapi_EditComponentTextParagraphInput = {
  id?: Maybe<Scalars['ID']>;
  body?: Maybe<Scalars['String']>;
  justify?: Maybe<Strapi_Enum_Componenttextparagraph_Justify>;
  align?: Maybe<Strapi_Enum_Componenttextparagraph_Align>;
};

export type Strapi_EditComponentTextQuoteInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Strapi_EditComponentTextParagraphInput>;
};

export type Strapi_EditComponentWidgetButtonInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
  action?: Maybe<Scalars['String']>;
  variant?: Maybe<Strapi_Enum_Componentwidgetbutton_Variant>;
};

export type Strapi_EditComponentWidgetDividerInput = {
  id?: Maybe<Scalars['ID']>;
  style?: Maybe<Strapi_Enum_Componentwidgetdivider_Style>;
};

export type Strapi_EditComponentWidgetEmbeddedFormInput = {
  id?: Maybe<Scalars['ID']>;
  code_snippet?: Maybe<Scalars['String']>;
};

export type Strapi_EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['STRAPI_JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['STRAPI_JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditMenuItemInput = {
  text?: Maybe<Scalars['String']>;
  is_external_link?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['ID']>;
  content?: Maybe<Array<Scalars['STRAPI_MenuItemContentDynamicZoneInput']>>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditOfferingInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  preview?: Maybe<Strapi_EditComponentGeneralPreviewInput>;
  services?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_offering?: Maybe<Scalars['Boolean']>;
  meta_description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditPageInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  banner_background_image?: Maybe<Scalars['ID']>;
  banner?: Maybe<Array<Scalars['STRAPI_PageBannerDynamicZoneInput']>>;
  body: Array<Scalars['STRAPI_PageBodyDynamicZoneInput']>;
  meta_description?: Maybe<Scalars['String']>;
  menu_item?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditReportInput = {
  content?: Maybe<Scalars['String']>;
  reason?: Maybe<Strapi_Enum_Commentsreport_Reason>;
  resolved?: Maybe<Scalars['Boolean']>;
  related?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditServiceInput = {
  title?: Maybe<Scalars['String']>;
  preview?: Maybe<Strapi_EditComponentGeneralPreviewInput>;
  banner_background_image?: Maybe<Scalars['ID']>;
  banner?: Maybe<Array<Scalars['STRAPI_ServiceBannerDynamicZoneInput']>>;
  slug?: Maybe<Scalars['String']>;
  sales_page: Array<Scalars['STRAPI_ServiceSalesPageDynamicZoneInput']>;
  offerings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_service?: Maybe<Scalars['Boolean']>;
  meta_description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditTagInput = {
  name?: Maybe<Scalars['String']>;
  blog_posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  is_tag?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_Enum_Commentsreport_Reason =
  | 'BAD_LANGUAGE'
  | 'DISCRIMINATION'
  | 'OTHER';

export type Strapi_Enum_Componentmediaimages_Style =
  | 'straight_line'
  | 'stagger'
  | 'triangle'
  | 'inverted_triangle';

export type Strapi_Enum_Componentmediasingleimage_Align =
  | 'top'
  | 'center'
  | 'bottom';

export type Strapi_Enum_Componentmediasingleimage_Justify =
  | 'left'
  | 'center'
  | 'right';

export type Strapi_Enum_Componenttextheading_Align =
  | 'top'
  | 'center'
  | 'bottom';

export type Strapi_Enum_Componenttextheading_Justify =
  | 'left'
  | 'center'
  | 'right';

export type Strapi_Enum_Componenttextheading_Level =
  | 'one'
  | 'two'
  | 'three'
  | 'four'
  | 'five'
  | 'six';

export type Strapi_Enum_Componenttextheading_Tilt =
  | 'down'
  | 'even'
  | 'up';

export type Strapi_Enum_Componenttextparagraph_Align =
  | 'top'
  | 'center'
  | 'bottom';

export type Strapi_Enum_Componenttextparagraph_Justify =
  | 'left'
  | 'center'
  | 'right';

export type Strapi_Enum_Componentwidgetbutton_Variant =
  | 'primary'
  | 'secondary'
  | 'tertiary';

export type Strapi_Enum_Componentwidgetdivider_Style =
  | 'standard'
  | 'fancy';

export type Strapi_FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type Strapi_FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['STRAPI_JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['STRAPI_JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_InputId = {
  id: Scalars['ID'];
};



export type Strapi_MenuItem = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  text: Scalars['String'];
  is_external_link: Scalars['Boolean'];
  slug: Scalars['String'];
  order: Scalars['Int'];
  page?: Maybe<Strapi_Page>;
  content?: Maybe<Array<Maybe<Strapi_MenuItemContentDynamicZone>>>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
};

export type Strapi_MenuItemAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<Strapi_MenuItemAggregatorSum>;
  avg?: Maybe<Strapi_MenuItemAggregatorAvg>;
  min?: Maybe<Strapi_MenuItemAggregatorMin>;
  max?: Maybe<Strapi_MenuItemAggregatorMax>;
};

export type Strapi_MenuItemAggregatorAvg = {
  order?: Maybe<Scalars['Float']>;
};

export type Strapi_MenuItemAggregatorMax = {
  order?: Maybe<Scalars['Float']>;
};

export type Strapi_MenuItemAggregatorMin = {
  order?: Maybe<Scalars['Float']>;
};

export type Strapi_MenuItemAggregatorSum = {
  order?: Maybe<Scalars['Float']>;
};

export type Strapi_MenuItemConnection = {
  values?: Maybe<Array<Maybe<Strapi_MenuItem>>>;
  groupBy?: Maybe<Strapi_MenuItemGroupBy>;
  aggregate?: Maybe<Strapi_MenuItemAggregator>;
};

export type Strapi_MenuItemConnectionCreated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_MenuItemConnection>;
};

export type Strapi_MenuItemConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_MenuItemConnection>;
};

export type Strapi_MenuItemConnectionIs_External_Link = {
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<Strapi_MenuItemConnection>;
};

export type Strapi_MenuItemConnectionOrder = {
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<Strapi_MenuItemConnection>;
};

export type Strapi_MenuItemConnectionPage = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_MenuItemConnection>;
};

export type Strapi_MenuItemConnectionPublished_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_MenuItemConnection>;
};

export type Strapi_MenuItemConnectionSlug = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_MenuItemConnection>;
};

export type Strapi_MenuItemConnectionText = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_MenuItemConnection>;
};

export type Strapi_MenuItemConnectionUpdated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_MenuItemConnection>;
};

export type Strapi_MenuItemContentDynamicZone = Strapi_ComponentCollectionsBlogPosts | Strapi_ComponentCollectionsOfferings | Strapi_ComponentCollectionsBlogs | Strapi_ComponentCollectionsServices;


export type Strapi_MenuItemGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_MenuItemConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Strapi_MenuItemConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Strapi_MenuItemConnectionUpdated_At>>>;
  text?: Maybe<Array<Maybe<Strapi_MenuItemConnectionText>>>;
  is_external_link?: Maybe<Array<Maybe<Strapi_MenuItemConnectionIs_External_Link>>>;
  slug?: Maybe<Array<Maybe<Strapi_MenuItemConnectionSlug>>>;
  order?: Maybe<Array<Maybe<Strapi_MenuItemConnectionOrder>>>;
  page?: Maybe<Array<Maybe<Strapi_MenuItemConnectionPage>>>;
  published_at?: Maybe<Array<Maybe<Strapi_MenuItemConnectionPublished_At>>>;
};

export type Strapi_MenuItemInput = {
  text: Scalars['String'];
  is_external_link?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  order?: Maybe<Scalars['Int']>;
  page?: Maybe<Scalars['ID']>;
  content?: Maybe<Array<Scalars['STRAPI_MenuItemContentDynamicZoneInput']>>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_Morph = Strapi_UsersPermissionsMe | Strapi_UsersPermissionsMeRole | Strapi_UsersPermissionsLoginPayload | Strapi_UserPermissionsPasswordPayload | Strapi_BlogPost | Strapi_BlogPostConnection | Strapi_BlogPostAggregator | Strapi_BlogPostGroupBy | Strapi_BlogPostConnectionId | Strapi_BlogPostConnectionCreated_At | Strapi_BlogPostConnectionUpdated_At | Strapi_BlogPostConnectionTitle | Strapi_BlogPostConnectionSlug | Strapi_BlogPostConnectionPublished | Strapi_BlogPostConnectionCover_Image | Strapi_BlogPostConnectionBlog | Strapi_BlogPostConnectionCategory | Strapi_BlogPostConnectionIs_Blog_Post | Strapi_BlogPostConnectionPreview | Strapi_BlogPostConnectionMeta_Description | Strapi_BlogPostConnectionPublished_At | Strapi_CreateBlogPostPayload | Strapi_UpdateBlogPostPayload | Strapi_DeleteBlogPostPayload | Strapi_Blog | Strapi_BlogConnection | Strapi_BlogAggregator | Strapi_BlogGroupBy | Strapi_BlogConnectionId | Strapi_BlogConnectionCreated_At | Strapi_BlogConnectionUpdated_At | Strapi_BlogConnectionName | Strapi_BlogConnectionSlug | Strapi_BlogConnectionPreview | Strapi_BlogConnectionIs_Blog | Strapi_BlogConnectionMeta_Description | Strapi_CreateBlogPayload | Strapi_UpdateBlogPayload | Strapi_DeleteBlogPayload | Strapi_Category | Strapi_CategoryConnection | Strapi_CategoryAggregator | Strapi_CategoryGroupBy | Strapi_CategoryConnectionId | Strapi_CategoryConnectionCreated_At | Strapi_CategoryConnectionUpdated_At | Strapi_CategoryConnectionName | Strapi_CategoryConnectionSlug | Strapi_CategoryConnectionIs_Category | Strapi_CreateCategoryPayload | Strapi_UpdateCategoryPayload | Strapi_DeleteCategoryPayload | Strapi_MenuItem | Strapi_MenuItemConnection | Strapi_MenuItemAggregator | Strapi_MenuItemAggregatorSum | Strapi_MenuItemAggregatorAvg | Strapi_MenuItemAggregatorMin | Strapi_MenuItemAggregatorMax | Strapi_MenuItemGroupBy | Strapi_MenuItemConnectionId | Strapi_MenuItemConnectionCreated_At | Strapi_MenuItemConnectionUpdated_At | Strapi_MenuItemConnectionText | Strapi_MenuItemConnectionIs_External_Link | Strapi_MenuItemConnectionSlug | Strapi_MenuItemConnectionOrder | Strapi_MenuItemConnectionPage | Strapi_MenuItemConnectionPublished_At | Strapi_CreateMenuItemPayload | Strapi_UpdateMenuItemPayload | Strapi_DeleteMenuItemPayload | Strapi_Offering | Strapi_OfferingConnection | Strapi_OfferingAggregator | Strapi_OfferingGroupBy | Strapi_OfferingConnectionId | Strapi_OfferingConnectionCreated_At | Strapi_OfferingConnectionUpdated_At | Strapi_OfferingConnectionTitle | Strapi_OfferingConnectionSlug | Strapi_OfferingConnectionPreview | Strapi_OfferingConnectionIs_Offering | Strapi_OfferingConnectionMeta_Description | Strapi_OfferingConnectionPublished_At | Strapi_CreateOfferingPayload | Strapi_UpdateOfferingPayload | Strapi_DeleteOfferingPayload | Strapi_Page | Strapi_PageConnection | Strapi_PageAggregator | Strapi_PageGroupBy | Strapi_PageConnectionId | Strapi_PageConnectionCreated_At | Strapi_PageConnectionUpdated_At | Strapi_PageConnectionTitle | Strapi_PageConnectionSlug | Strapi_PageConnectionBanner_Background_Image | Strapi_PageConnectionMeta_Description | Strapi_PageConnectionMenu_Item | Strapi_PageConnectionPublished_At | Strapi_CreatePagePayload | Strapi_UpdatePagePayload | Strapi_DeletePagePayload | Strapi_Service | Strapi_ServiceConnection | Strapi_ServiceAggregator | Strapi_ServiceGroupBy | Strapi_ServiceConnectionId | Strapi_ServiceConnectionCreated_At | Strapi_ServiceConnectionUpdated_At | Strapi_ServiceConnectionTitle | Strapi_ServiceConnectionPreview | Strapi_ServiceConnectionBanner_Background_Image | Strapi_ServiceConnectionSlug | Strapi_ServiceConnectionIs_Service | Strapi_ServiceConnectionMeta_Description | Strapi_ServiceConnectionPublished_At | Strapi_CreateServicePayload | Strapi_UpdateServicePayload | Strapi_DeleteServicePayload | Strapi_Tag | Strapi_TagConnection | Strapi_TagAggregator | Strapi_TagGroupBy | Strapi_TagConnectionId | Strapi_TagConnectionCreated_At | Strapi_TagConnectionUpdated_At | Strapi_TagConnectionName | Strapi_TagConnectionSlug | Strapi_TagConnectionIs_Tag | Strapi_CreateTagPayload | Strapi_UpdateTagPayload | Strapi_DeleteTagPayload | Strapi_CommentsComment | Strapi_CommentsReport | Strapi_UploadFile | Strapi_UploadFileConnection | Strapi_UploadFileAggregator | Strapi_UploadFileAggregatorSum | Strapi_UploadFileAggregatorAvg | Strapi_UploadFileAggregatorMin | Strapi_UploadFileAggregatorMax | Strapi_UploadFileGroupBy | Strapi_UploadFileConnectionId | Strapi_UploadFileConnectionCreated_At | Strapi_UploadFileConnectionUpdated_At | Strapi_UploadFileConnectionName | Strapi_UploadFileConnectionAlternativeText | Strapi_UploadFileConnectionCaption | Strapi_UploadFileConnectionWidth | Strapi_UploadFileConnectionHeight | Strapi_UploadFileConnectionFormats | Strapi_UploadFileConnectionHash | Strapi_UploadFileConnectionExt | Strapi_UploadFileConnectionMime | Strapi_UploadFileConnectionSize | Strapi_UploadFileConnectionUrl | Strapi_UploadFileConnectionPreviewUrl | Strapi_UploadFileConnectionProvider | Strapi_UploadFileConnectionProvider_Metadata | Strapi_DeleteFilePayload | Strapi_UsersPermissionsPermission | Strapi_UsersPermissionsRole | Strapi_UsersPermissionsRoleConnection | Strapi_UsersPermissionsRoleAggregator | Strapi_UsersPermissionsRoleGroupBy | Strapi_UsersPermissionsRoleConnectionId | Strapi_UsersPermissionsRoleConnectionName | Strapi_UsersPermissionsRoleConnectionDescription | Strapi_UsersPermissionsRoleConnectionType | Strapi_CreateRolePayload | Strapi_UpdateRolePayload | Strapi_DeleteRolePayload | Strapi_UsersPermissionsUser | Strapi_UsersPermissionsUserConnection | Strapi_UsersPermissionsUserAggregator | Strapi_UsersPermissionsUserGroupBy | Strapi_UsersPermissionsUserConnectionId | Strapi_UsersPermissionsUserConnectionCreated_At | Strapi_UsersPermissionsUserConnectionUpdated_At | Strapi_UsersPermissionsUserConnectionUsername | Strapi_UsersPermissionsUserConnectionEmail | Strapi_UsersPermissionsUserConnectionProvider | Strapi_UsersPermissionsUserConnectionConfirmed | Strapi_UsersPermissionsUserConnectionBlocked | Strapi_UsersPermissionsUserConnectionRole | Strapi_CreateUserPayload | Strapi_UpdateUserPayload | Strapi_DeleteUserPayload | Strapi_ComponentCollectionsBlogPosts | Strapi_ComponentCollectionsBlogs | Strapi_ComponentCollectionsOfferings | Strapi_ComponentCollectionsServices | Strapi_ComponentGeneralPreview | Strapi_ComponentMediaFiles | Strapi_ComponentMediaImages | Strapi_ComponentMediaSingleFile | Strapi_ComponentMediaSingleImage | Strapi_ComponentMediaSingleVideo | Strapi_ComponentMediaVideos | Strapi_ComponentSectionHeadingLeftImageRight | Strapi_ComponentSectionHeadingRightImageLeft | Strapi_ComponentSectionImageCenterTextEitherSide | Strapi_ComponentSectionImageRightTextLeft | Strapi_ComponentSectionTextCenterImageEitherSide | Strapi_ComponentSectionTextRightImageLeft | Strapi_ComponentTextHeading | Strapi_ComponentTextParagraph | Strapi_ComponentTextQuote | Strapi_ComponentWidgetButton | Strapi_ComponentWidgetDivider | Strapi_ComponentWidgetEmbeddedForm;

export type Strapi_Offering = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  title: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Strapi_ComponentGeneralPreview>;
  is_offering?: Maybe<Scalars['Boolean']>;
  meta_description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  services?: Maybe<Array<Maybe<Strapi_Service>>>;
  fullUrlPath?: Maybe<Scalars['String']>;
};


export type Strapi_OfferingServicesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_OfferingAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Strapi_OfferingConnection = {
  values?: Maybe<Array<Maybe<Strapi_Offering>>>;
  groupBy?: Maybe<Strapi_OfferingGroupBy>;
  aggregate?: Maybe<Strapi_OfferingAggregator>;
};

export type Strapi_OfferingConnectionCreated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_OfferingConnection>;
};

export type Strapi_OfferingConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_OfferingConnection>;
};

export type Strapi_OfferingConnectionIs_Offering = {
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<Strapi_OfferingConnection>;
};

export type Strapi_OfferingConnectionMeta_Description = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_OfferingConnection>;
};

export type Strapi_OfferingConnectionPreview = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_OfferingConnection>;
};

export type Strapi_OfferingConnectionPublished_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_OfferingConnection>;
};

export type Strapi_OfferingConnectionSlug = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_OfferingConnection>;
};

export type Strapi_OfferingConnectionTitle = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_OfferingConnection>;
};

export type Strapi_OfferingConnectionUpdated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_OfferingConnection>;
};

export type Strapi_OfferingGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_OfferingConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Strapi_OfferingConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Strapi_OfferingConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<Strapi_OfferingConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<Strapi_OfferingConnectionSlug>>>;
  preview?: Maybe<Array<Maybe<Strapi_OfferingConnectionPreview>>>;
  is_offering?: Maybe<Array<Maybe<Strapi_OfferingConnectionIs_Offering>>>;
  meta_description?: Maybe<Array<Maybe<Strapi_OfferingConnectionMeta_Description>>>;
  published_at?: Maybe<Array<Maybe<Strapi_OfferingConnectionPublished_At>>>;
};

export type Strapi_OfferingInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  preview?: Maybe<Strapi_ComponentGeneralPreviewInput>;
  services?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_offering?: Maybe<Scalars['Boolean']>;
  meta_description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_Page = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  title: Scalars['String'];
  slug: Scalars['String'];
  banner_background_image?: Maybe<Strapi_UploadFile>;
  banner?: Maybe<Array<Maybe<Strapi_PageBannerDynamicZone>>>;
  body: Array<Maybe<Strapi_PageBodyDynamicZone>>;
  meta_description: Scalars['String'];
  menu_item?: Maybe<Strapi_MenuItem>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
};

export type Strapi_PageAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Strapi_PageBannerDynamicZone = Strapi_ComponentMediaSingleVideo | Strapi_ComponentMediaSingleImage | Strapi_ComponentMediaImages | Strapi_ComponentMediaFiles | Strapi_ComponentMediaSingleFile | Strapi_ComponentTextHeading | Strapi_ComponentTextParagraph | Strapi_ComponentTextQuote | Strapi_ComponentSectionTextRightImageLeft | Strapi_ComponentSectionTextCenterImageEitherSide | Strapi_ComponentSectionHeadingLeftImageRight | Strapi_ComponentSectionImageRightTextLeft | Strapi_ComponentSectionImageCenterTextEitherSide | Strapi_ComponentSectionHeadingRightImageLeft | Strapi_ComponentWidgetDivider | Strapi_ComponentWidgetButton;


export type Strapi_PageBodyDynamicZone = Strapi_ComponentCollectionsBlogPosts | Strapi_ComponentCollectionsOfferings | Strapi_ComponentCollectionsBlogs | Strapi_ComponentCollectionsServices | Strapi_ComponentMediaSingleVideo | Strapi_ComponentMediaSingleImage | Strapi_ComponentMediaImages | Strapi_ComponentMediaFiles | Strapi_ComponentMediaSingleFile | Strapi_ComponentTextHeading | Strapi_ComponentTextParagraph | Strapi_ComponentTextQuote | Strapi_ComponentSectionTextRightImageLeft | Strapi_ComponentSectionTextCenterImageEitherSide | Strapi_ComponentSectionHeadingLeftImageRight | Strapi_ComponentSectionImageRightTextLeft | Strapi_ComponentSectionImageCenterTextEitherSide | Strapi_ComponentSectionHeadingRightImageLeft | Strapi_ComponentWidgetDivider | Strapi_ComponentWidgetEmbeddedForm | Strapi_ComponentWidgetButton;


export type Strapi_PageConnection = {
  values?: Maybe<Array<Maybe<Strapi_Page>>>;
  groupBy?: Maybe<Strapi_PageGroupBy>;
  aggregate?: Maybe<Strapi_PageAggregator>;
};

export type Strapi_PageConnectionBanner_Background_Image = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_PageConnection>;
};

export type Strapi_PageConnectionCreated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_PageConnection>;
};

export type Strapi_PageConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_PageConnection>;
};

export type Strapi_PageConnectionMenu_Item = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_PageConnection>;
};

export type Strapi_PageConnectionMeta_Description = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_PageConnection>;
};

export type Strapi_PageConnectionPublished_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_PageConnection>;
};

export type Strapi_PageConnectionSlug = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_PageConnection>;
};

export type Strapi_PageConnectionTitle = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_PageConnection>;
};

export type Strapi_PageConnectionUpdated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_PageConnection>;
};

export type Strapi_PageGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_PageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Strapi_PageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Strapi_PageConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<Strapi_PageConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<Strapi_PageConnectionSlug>>>;
  banner_background_image?: Maybe<Array<Maybe<Strapi_PageConnectionBanner_Background_Image>>>;
  meta_description?: Maybe<Array<Maybe<Strapi_PageConnectionMeta_Description>>>;
  menu_item?: Maybe<Array<Maybe<Strapi_PageConnectionMenu_Item>>>;
  published_at?: Maybe<Array<Maybe<Strapi_PageConnectionPublished_At>>>;
};

export type Strapi_PageInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  banner_background_image?: Maybe<Scalars['ID']>;
  banner?: Maybe<Array<Scalars['STRAPI_PageBannerDynamicZoneInput']>>;
  body: Array<Scalars['STRAPI_PageBodyDynamicZoneInput']>;
  meta_description: Scalars['String'];
  menu_item?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_PublicationState =
  | 'LIVE'
  | 'PREVIEW';

export type Strapi_ReportInput = {
  content?: Maybe<Scalars['String']>;
  reason?: Maybe<Strapi_Enum_Commentsreport_Reason>;
  resolved?: Maybe<Scalars['Boolean']>;
  related?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_Service = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  title: Scalars['String'];
  preview?: Maybe<Strapi_ComponentGeneralPreview>;
  banner_background_image?: Maybe<Strapi_UploadFile>;
  banner?: Maybe<Array<Maybe<Strapi_ServiceBannerDynamicZone>>>;
  slug: Scalars['String'];
  sales_page: Array<Maybe<Strapi_ServiceSalesPageDynamicZone>>;
  is_service?: Maybe<Scalars['Boolean']>;
  meta_description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  offerings?: Maybe<Array<Maybe<Strapi_Offering>>>;
};


export type Strapi_ServiceOfferingsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_ServiceAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Strapi_ServiceBannerDynamicZone = Strapi_ComponentMediaSingleVideo | Strapi_ComponentMediaSingleImage | Strapi_ComponentMediaImages | Strapi_ComponentMediaFiles | Strapi_ComponentMediaSingleFile | Strapi_ComponentTextHeading | Strapi_ComponentTextParagraph | Strapi_ComponentTextQuote | Strapi_ComponentSectionTextRightImageLeft | Strapi_ComponentSectionTextCenterImageEitherSide | Strapi_ComponentSectionHeadingLeftImageRight | Strapi_ComponentSectionImageRightTextLeft | Strapi_ComponentSectionImageCenterTextEitherSide | Strapi_ComponentSectionHeadingRightImageLeft | Strapi_ComponentWidgetDivider | Strapi_ComponentWidgetButton;


export type Strapi_ServiceConnection = {
  values?: Maybe<Array<Maybe<Strapi_Service>>>;
  groupBy?: Maybe<Strapi_ServiceGroupBy>;
  aggregate?: Maybe<Strapi_ServiceAggregator>;
};

export type Strapi_ServiceConnectionBanner_Background_Image = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_ServiceConnection>;
};

export type Strapi_ServiceConnectionCreated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_ServiceConnection>;
};

export type Strapi_ServiceConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_ServiceConnection>;
};

export type Strapi_ServiceConnectionIs_Service = {
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<Strapi_ServiceConnection>;
};

export type Strapi_ServiceConnectionMeta_Description = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_ServiceConnection>;
};

export type Strapi_ServiceConnectionPreview = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_ServiceConnection>;
};

export type Strapi_ServiceConnectionPublished_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_ServiceConnection>;
};

export type Strapi_ServiceConnectionSlug = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_ServiceConnection>;
};

export type Strapi_ServiceConnectionTitle = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_ServiceConnection>;
};

export type Strapi_ServiceConnectionUpdated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_ServiceConnection>;
};

export type Strapi_ServiceGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_ServiceConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Strapi_ServiceConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Strapi_ServiceConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<Strapi_ServiceConnectionTitle>>>;
  preview?: Maybe<Array<Maybe<Strapi_ServiceConnectionPreview>>>;
  banner_background_image?: Maybe<Array<Maybe<Strapi_ServiceConnectionBanner_Background_Image>>>;
  slug?: Maybe<Array<Maybe<Strapi_ServiceConnectionSlug>>>;
  is_service?: Maybe<Array<Maybe<Strapi_ServiceConnectionIs_Service>>>;
  meta_description?: Maybe<Array<Maybe<Strapi_ServiceConnectionMeta_Description>>>;
  published_at?: Maybe<Array<Maybe<Strapi_ServiceConnectionPublished_At>>>;
};

export type Strapi_ServiceInput = {
  title: Scalars['String'];
  preview?: Maybe<Strapi_ComponentGeneralPreviewInput>;
  banner_background_image?: Maybe<Scalars['ID']>;
  banner?: Maybe<Array<Scalars['STRAPI_ServiceBannerDynamicZoneInput']>>;
  slug: Scalars['String'];
  sales_page: Array<Scalars['STRAPI_ServiceSalesPageDynamicZoneInput']>;
  offerings?: Maybe<Array<Maybe<Scalars['ID']>>>;
  is_service?: Maybe<Scalars['Boolean']>;
  meta_description?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['STRAPI_DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_ServiceSalesPageDynamicZone = Strapi_ComponentMediaSingleVideo | Strapi_ComponentMediaSingleImage | Strapi_ComponentMediaVideos | Strapi_ComponentMediaImages | Strapi_ComponentMediaFiles | Strapi_ComponentMediaSingleFile | Strapi_ComponentTextHeading | Strapi_ComponentTextParagraph | Strapi_ComponentTextQuote | Strapi_ComponentSectionTextRightImageLeft | Strapi_ComponentSectionTextCenterImageEitherSide | Strapi_ComponentSectionHeadingLeftImageRight | Strapi_ComponentSectionImageRightTextLeft | Strapi_ComponentSectionImageCenterTextEitherSide | Strapi_ComponentSectionHeadingRightImageLeft | Strapi_ComponentWidgetDivider | Strapi_ComponentWidgetEmbeddedForm | Strapi_ComponentWidgetButton;


export type Strapi_Tag = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  is_tag?: Maybe<Scalars['Boolean']>;
  blog_posts?: Maybe<Array<Maybe<Strapi_BlogPost>>>;
};


export type Strapi_TagBlog_PostsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_TagAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Strapi_TagConnection = {
  values?: Maybe<Array<Maybe<Strapi_Tag>>>;
  groupBy?: Maybe<Strapi_TagGroupBy>;
  aggregate?: Maybe<Strapi_TagAggregator>;
};

export type Strapi_TagConnectionCreated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_TagConnection>;
};

export type Strapi_TagConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_TagConnection>;
};

export type Strapi_TagConnectionIs_Tag = {
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<Strapi_TagConnection>;
};

export type Strapi_TagConnectionName = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_TagConnection>;
};

export type Strapi_TagConnectionSlug = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_TagConnection>;
};

export type Strapi_TagConnectionUpdated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_TagConnection>;
};

export type Strapi_TagGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_TagConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Strapi_TagConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Strapi_TagConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<Strapi_TagConnectionName>>>;
  slug?: Maybe<Array<Maybe<Strapi_TagConnectionSlug>>>;
  is_tag?: Maybe<Array<Maybe<Strapi_TagConnectionIs_Tag>>>;
};

export type Strapi_TagInput = {
  name: Scalars['String'];
  blog_posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug: Scalars['String'];
  is_tag?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type Strapi_UpdateBlogInput = {
  where?: Maybe<Strapi_InputId>;
  data?: Maybe<Strapi_EditBlogInput>;
};

export type Strapi_UpdateBlogPayload = {
  blog?: Maybe<Strapi_Blog>;
};

export type Strapi_UpdateBlogPostInput = {
  where?: Maybe<Strapi_InputId>;
  data?: Maybe<Strapi_EditBlogPostInput>;
};

export type Strapi_UpdateBlogPostPayload = {
  blogPost?: Maybe<Strapi_BlogPost>;
};

export type Strapi_UpdateCategoryInput = {
  where?: Maybe<Strapi_InputId>;
  data?: Maybe<Strapi_EditCategoryInput>;
};

export type Strapi_UpdateCategoryPayload = {
  category?: Maybe<Strapi_Category>;
};

export type Strapi_UpdateMenuItemInput = {
  where?: Maybe<Strapi_InputId>;
  data?: Maybe<Strapi_EditMenuItemInput>;
};

export type Strapi_UpdateMenuItemPayload = {
  menuItem?: Maybe<Strapi_MenuItem>;
};

export type Strapi_UpdateOfferingInput = {
  where?: Maybe<Strapi_InputId>;
  data?: Maybe<Strapi_EditOfferingInput>;
};

export type Strapi_UpdateOfferingPayload = {
  offering?: Maybe<Strapi_Offering>;
};

export type Strapi_UpdatePageInput = {
  where?: Maybe<Strapi_InputId>;
  data?: Maybe<Strapi_EditPageInput>;
};

export type Strapi_UpdatePagePayload = {
  page?: Maybe<Strapi_Page>;
};

export type Strapi_UpdateRoleInput = {
  where?: Maybe<Strapi_InputId>;
  data?: Maybe<Strapi_EditRoleInput>;
};

export type Strapi_UpdateRolePayload = {
  role?: Maybe<Strapi_UsersPermissionsRole>;
};

export type Strapi_UpdateServiceInput = {
  where?: Maybe<Strapi_InputId>;
  data?: Maybe<Strapi_EditServiceInput>;
};

export type Strapi_UpdateServicePayload = {
  service?: Maybe<Strapi_Service>;
};

export type Strapi_UpdateTagInput = {
  where?: Maybe<Strapi_InputId>;
  data?: Maybe<Strapi_EditTagInput>;
};

export type Strapi_UpdateTagPayload = {
  tag?: Maybe<Strapi_Tag>;
};

export type Strapi_UpdateUserInput = {
  where?: Maybe<Strapi_InputId>;
  data?: Maybe<Strapi_EditUserInput>;
};

export type Strapi_UpdateUserPayload = {
  user?: Maybe<Strapi_UsersPermissionsUser>;
};


export type Strapi_UploadFile = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['STRAPI_JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['STRAPI_JSON']>;
  related?: Maybe<Array<Maybe<Strapi_Morph>>>;
  imageFile?: Maybe<File>;
};


export type Strapi_UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_UploadFileAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<Strapi_UploadFileAggregatorSum>;
  avg?: Maybe<Strapi_UploadFileAggregatorAvg>;
  min?: Maybe<Strapi_UploadFileAggregatorMin>;
  max?: Maybe<Strapi_UploadFileAggregatorMax>;
};

export type Strapi_UploadFileAggregatorAvg = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type Strapi_UploadFileAggregatorMax = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type Strapi_UploadFileAggregatorMin = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type Strapi_UploadFileAggregatorSum = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type Strapi_UploadFileConnection = {
  values?: Maybe<Array<Maybe<Strapi_UploadFile>>>;
  groupBy?: Maybe<Strapi_UploadFileGroupBy>;
  aggregate?: Maybe<Strapi_UploadFileAggregator>;
};

export type Strapi_UploadFileConnectionAlternativeText = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionCaption = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionCreated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionExt = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionFormats = {
  key?: Maybe<Scalars['STRAPI_JSON']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionHash = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionHeight = {
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionMime = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionName = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionPreviewUrl = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionProvider = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionProvider_Metadata = {
  key?: Maybe<Scalars['STRAPI_JSON']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionSize = {
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionUpdated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionUrl = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileConnectionWidth = {
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<Strapi_UploadFileConnection>;
};

export type Strapi_UploadFileGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Strapi_UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Strapi_UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<Strapi_UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<Strapi_UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<Strapi_UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<Strapi_UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<Strapi_UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<Strapi_UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<Strapi_UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<Strapi_UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<Strapi_UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<Strapi_UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<Strapi_UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<Strapi_UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<Strapi_UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<Strapi_UploadFileConnectionProvider_Metadata>>>;
};

export type Strapi_UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type Strapi_UserPermissionsPasswordPayload = {
  ok: Scalars['Boolean'];
};

export type Strapi_UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type Strapi_UsersPermissionsLoginPayload = {
  jwt?: Maybe<Scalars['String']>;
  user: Strapi_UsersPermissionsMe;
};

export type Strapi_UsersPermissionsMe = {
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Strapi_UsersPermissionsMeRole>;
};

export type Strapi_UsersPermissionsMeRole = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Strapi_UsersPermissionsPermission = {
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<Strapi_UsersPermissionsRole>;
};

export type Strapi_UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Strapi_UsersPermissionsRole = {
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Strapi_UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<Strapi_UsersPermissionsUser>>>;
};


export type Strapi_UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};


export type Strapi_UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['STRAPI_JSON']>;
};

export type Strapi_UsersPermissionsRoleAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Strapi_UsersPermissionsRoleConnection = {
  values?: Maybe<Array<Maybe<Strapi_UsersPermissionsRole>>>;
  groupBy?: Maybe<Strapi_UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<Strapi_UsersPermissionsRoleAggregator>;
};

export type Strapi_UsersPermissionsRoleConnectionDescription = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>;
};

export type Strapi_UsersPermissionsRoleConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>;
};

export type Strapi_UsersPermissionsRoleConnectionName = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>;
};

export type Strapi_UsersPermissionsRoleConnectionType = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UsersPermissionsRoleConnection>;
};

export type Strapi_UsersPermissionsRoleGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<Strapi_UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<Strapi_UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<Strapi_UsersPermissionsRoleConnectionType>>>;
};

export type Strapi_UsersPermissionsUser = {
  id: Scalars['ID'];
  created_at: Scalars['STRAPI_DateTime'];
  updated_at: Scalars['STRAPI_DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Strapi_UsersPermissionsRole>;
};

export type Strapi_UsersPermissionsUserAggregator = {
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Strapi_UsersPermissionsUserConnection = {
  values?: Maybe<Array<Maybe<Strapi_UsersPermissionsUser>>>;
  groupBy?: Maybe<Strapi_UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<Strapi_UsersPermissionsUserAggregator>;
};

export type Strapi_UsersPermissionsUserConnectionBlocked = {
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>;
};

export type Strapi_UsersPermissionsUserConnectionConfirmed = {
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>;
};

export type Strapi_UsersPermissionsUserConnectionCreated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>;
};

export type Strapi_UsersPermissionsUserConnectionEmail = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>;
};

export type Strapi_UsersPermissionsUserConnectionId = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>;
};

export type Strapi_UsersPermissionsUserConnectionProvider = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>;
};

export type Strapi_UsersPermissionsUserConnectionRole = {
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>;
};

export type Strapi_UsersPermissionsUserConnectionUpdated_At = {
  key?: Maybe<Scalars['STRAPI_DateTime']>;
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>;
};

export type Strapi_UsersPermissionsUserConnectionUsername = {
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<Strapi_UsersPermissionsUserConnection>;
};

export type Strapi_UsersPermissionsUserGroupBy = {
  id?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<Strapi_UsersPermissionsUserConnectionRole>>>;
};

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { strapi: { blogPosts?: Maybe<Array<Maybe<(
      Pick<Strapi_BlogPost, 'title'>
      & { blog?: Maybe<Pick<Strapi_Blog, 'name'>> }
      & StrapiBlogPostFullUrlPathFragment
    )>>> } };

export type Unnamed_2_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_2_Query = { strapi: { blogs?: Maybe<Array<Maybe<(
      Pick<Strapi_Blog, 'name' | 'slug'>
      & { blog_posts?: Maybe<Array<Maybe<Pick<Strapi_BlogPost, 'title' | 'slug'>>>> }
    )>>> } };

export type Unnamed_3_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_3_Query = { strapi: { offerings?: Maybe<Array<Maybe<Pick<Strapi_Offering, 'title' | 'slug'>>>> } };

export type Unnamed_4_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_4_Query = { strapi: { services?: Maybe<Array<Maybe<(
      Pick<Strapi_Service, 'title' | 'slug'>
      & { offerings?: Maybe<Array<Maybe<Pick<Strapi_Offering, 'title' | 'slug'>>>> }
    )>>> } };

export type Unnamed_5_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_5_Query = { site?: Maybe<{ siteMetadata?: Maybe<(
      Pick<SiteSiteMetadata, 'title' | 'description'>
      & { author?: Maybe<Pick<SiteSiteMetadataAuthor, 'name' | 'bio'>> }
    )> }> };

export type StrapiMenuItemFragment = (
  Pick<Strapi_MenuItem, 'text' | 'slug' | 'is_external_link'>
  & { page?: Maybe<Pick<Strapi_Page, 'id'>>, content?: Maybe<Array<Maybe<(
    { __typename: 'STRAPI_ComponentCollectionsBlogPosts' }
    & { blog_posts?: Maybe<Array<Maybe<(
      Pick<Strapi_BlogPost, 'title'>
      & StrapiBlogPostFullUrlPathFragment
    )>>> }
  ) | (
    { __typename: 'STRAPI_ComponentCollectionsOfferings' }
    & Pick<Strapi_ComponentCollectionsOfferings, 'show_services'>
    & { offerings?: Maybe<Array<Maybe<Pick<Strapi_Offering, 'title' | 'slug' | 'fullUrlPath'>>>> }
  ) | (
    { __typename: 'STRAPI_ComponentCollectionsBlogs' }
    & Pick<Strapi_ComponentCollectionsBlogs, 'show_blog_posts'>
    & { blogs?: Maybe<Array<Maybe<Pick<Strapi_Blog, 'name' | 'slug' | 'fullUrlPath'>>>> }
  ) | (
    { __typename: 'STRAPI_ComponentCollectionsServices' }
    & { services?: Maybe<Array<Maybe<Pick<Strapi_Service, 'title' | 'slug'>>>> }
  )>>> }
);

export type StrapiBlogFragment = (
  Pick<Strapi_Blog, 'name' | 'slug' | 'fullUrlPath' | 'meta_description' | 'is_blog'>
  & { preview?: Maybe<StrapiComponentGeneralPreviewFragment>, blog_posts?: Maybe<Array<Maybe<StrapiBlogPostFragment>>> }
);

export type StrapiBlogPostFullUrlPathFragment = (
  Pick<Strapi_BlogPost, 'slug' | 'fullUrlPath' | 'published'>
  & { blog?: Maybe<Pick<Strapi_Blog, 'name' | 'slug'>>, category?: Maybe<Pick<Strapi_Category, 'name' | 'slug'>> }
);

export type StrapiBlogPostFragment = (
  Pick<Strapi_BlogPost, 'title' | 'slug' | 'published' | 'fullUrlPath' | 'is_blog_post'>
  & { preview?: Maybe<StrapiComponentGeneralPreviewFragment>, cover_image?: Maybe<StrapiUploadFileFragment>, blog?: Maybe<Pick<Strapi_Blog, 'name' | 'slug'>>, category?: Maybe<Pick<Strapi_Category, 'name' | 'slug'>>, tags?: Maybe<Array<Maybe<Pick<Strapi_Tag, 'name'>>>> }
);

export type StrapiOfferingFragment = (
  Pick<Strapi_Offering, 'id' | 'title' | 'slug' | 'meta_description' | 'fullUrlPath' | 'is_offering'>
  & { preview?: Maybe<StrapiComponentGeneralPreviewFragment>, services?: Maybe<Array<Maybe<StrapiServiceFragment>>> }
);

export type StrapiServiceFragment = (
  Pick<Strapi_Service, 'id' | 'title' | 'slug' | 'is_service'>
  & { preview?: Maybe<StrapiComponentGeneralPreviewFragment>, banner_background_image?: Maybe<StrapiUploadFileFragment>, offerings?: Maybe<Array<Maybe<Pick<Strapi_Offering, 'id' | 'slug'>>>> }
);

export type StrapiCategoryFragment = (
  Pick<Strapi_Category, 'name' | 'is_category'>
  & { blog_posts?: Maybe<Array<Maybe<Pick<Strapi_BlogPost, 'title' | 'slug'>>>> }
);

export type StrapiTagFragment = (
  Pick<Strapi_Tag, 'name' | 'is_tag'>
  & { blog_posts?: Maybe<Array<Maybe<Pick<Strapi_BlogPost, 'title' | 'slug'>>>> }
);

export type FluidImageFragment = { childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluid_NoBase64Fragment> }> };

export type StrapiUploadFileFragment = (
  Pick<Strapi_UploadFile, 'id' | 'url' | 'caption' | 'alternativeText'>
  & { imageFile?: Maybe<FluidImageFragment> }
);

export type StrapiComponentMediaSingleImageFragment = (
  Pick<Strapi_ComponentMediaSingleImage, 'id'>
  & { isCircle: Strapi_ComponentMediaSingleImage['is_circle'], hasBorder: Strapi_ComponentMediaSingleImage['has_border'] }
  & { file?: Maybe<StrapiUploadFileFragment> }
);

export type StrapiComponentMediaImagesFragment = (
  Pick<Strapi_ComponentMediaImages, 'id'>
  & { imageLayout: Strapi_ComponentMediaImages['style'], isCircle: Strapi_ComponentMediaImages['is_circle'], hasBorder: Strapi_ComponentMediaImages['has_border'] }
  & { files?: Maybe<Array<Maybe<StrapiUploadFileFragment>>> }
);

export type StrapiComponentMediaSingleVideoFragment = Pick<Strapi_ComponentMediaSingleVideo, 'id' | 'title' | 'srcURL'>;

export type StrapiComponentTextParagraphFragment = (
  Pick<Strapi_ComponentTextParagraph, 'id' | 'body'>
  & { justifyParagraph: Strapi_ComponentTextParagraph['justify'], alignParagraph: Strapi_ComponentTextParagraph['align'] }
);

export type StrapiComponentTextHeadingFragment = (
  Pick<Strapi_ComponentTextHeading, 'id' | 'level' | 'tilt'>
  & { headingText: Strapi_ComponentTextHeading['text'], justifyHeading: Strapi_ComponentTextHeading['justify'], alignHeading: Strapi_ComponentTextHeading['align'] }
);

export type StrapiComponentTextQuoteFragment = (
  Pick<Strapi_ComponentTextQuote, 'id'>
  & { text?: Maybe<StrapiComponentTextParagraphFragment> }
);

export type StrapiComponentWidgetDividerFragment = Pick<Strapi_ComponentWidgetDivider, 'id' | 'style'>;

export type StrapiComponentWidgetEmbeddedFormFragment = Pick<Strapi_ComponentWidgetEmbeddedForm, 'id' | 'code_snippet'>;

export type StrapiComponentWidgetButtonFragment = (
  Pick<Strapi_ComponentWidgetButton, 'id' | 'variant' | 'action'>
  & { buttonText: Strapi_ComponentWidgetButton['text'] }
);

export type StrapiComponentSectionHeadingRightImageLeftFragment = (
  Pick<Strapi_ComponentSectionHeadingRightImageLeft, 'id'>
  & { heading?: Maybe<StrapiComponentTextHeadingFragment>, image?: Maybe<StrapiComponentMediaSingleImageFragment> }
);

export type StrapiComponentSectionHeadingLeftImageRightFragment = (
  Pick<Strapi_ComponentSectionHeadingLeftImageRight, 'id'>
  & { image?: Maybe<StrapiComponentMediaSingleImageFragment>, heading?: Maybe<StrapiComponentTextHeadingFragment> }
);

export type StrapiComponentSectionImageRightTextLeftFragment = (
  Pick<Strapi_ComponentSectionImageRightTextLeft, 'id'>
  & { image?: Maybe<StrapiComponentMediaSingleImageFragment>, text?: Maybe<StrapiComponentTextParagraphFragment> }
);

export type StrapiComponentSectionTextRightImageLeftFragment = (
  Pick<Strapi_ComponentSectionTextRightImageLeft, 'id'>
  & { text?: Maybe<StrapiComponentTextParagraphFragment>, image?: Maybe<StrapiComponentMediaSingleImageFragment> }
);

export type StrapiComponentSectionTextCenterImageEitherSideFragment = (
  Pick<Strapi_ComponentSectionTextCenterImageEitherSide, 'id'>
  & { image_left?: Maybe<StrapiComponentMediaSingleImageFragment>, text?: Maybe<StrapiComponentTextParagraphFragment>, image_right?: Maybe<StrapiComponentMediaSingleImageFragment> }
);

export type StrapiComponentSectionImageCenterTextEitherSideFragment = (
  Pick<Strapi_ComponentSectionImageCenterTextEitherSide, 'id'>
  & { text_left?: Maybe<StrapiComponentTextParagraphFragment>, image?: Maybe<StrapiComponentMediaSingleImageFragment>, text_right?: Maybe<StrapiComponentTextParagraphFragment> }
);

export type StrapiComponentCollectionsBlogsFragment = { blogs?: Maybe<Array<Maybe<(
    Pick<Strapi_Blog, 'id' | 'name' | 'slug' | 'fullUrlPath'>
    & { preview?: Maybe<StrapiComponentGeneralPreviewFragment> }
  )>>> };

export type StrapiComponentCollectionsBlogPostsFragment = { blog_posts?: Maybe<Array<Maybe<{ preview?: Maybe<StrapiComponentGeneralPreviewFragment> }>>> };

export type StrapiComponentCollectionsOfferingsFragment = { offerings?: Maybe<Array<Maybe<(
    Pick<Strapi_Offering, 'id' | 'title' | 'slug' | 'fullUrlPath'>
    & { preview?: Maybe<StrapiComponentGeneralPreviewFragment> }
  )>>> };

export type StrapiComponentCollectionsServicesFragment = { services?: Maybe<Array<Maybe<StrapiServiceFragment>>> };

export type StrapiComponentGeneralPreviewFragment = { heading?: Maybe<StrapiComponentTextHeadingFragment>, text?: Maybe<StrapiComponentTextParagraphFragment>, image?: Maybe<StrapiComponentMediaSingleImageFragment>, button?: Maybe<StrapiComponentWidgetButtonFragment> };

export type Unnamed_6_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_6_Query = { frangipaniImg?: Maybe<FluidImageFragment> };

export type Get_Strapi_Menu_ItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type Get_Strapi_Menu_ItemsQuery = { strapi: { menuItems?: Maybe<Array<Maybe<StrapiMenuItemFragment>>> } };

export type Get_Blog_PostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Get_Blog_PostQuery = { strapi: { blogPost?: Maybe<(
      Pick<Strapi_BlogPost, 'title' | 'meta_description'>
      & { tags?: Maybe<Array<Maybe<Pick<Strapi_Tag, 'name'>>>>, body: Array<Maybe<(
        { __typename: 'STRAPI_ComponentMediaSingleVideo' }
        & StrapiComponentMediaSingleVideoFragment
      ) | (
        { __typename: 'STRAPI_ComponentMediaSingleImage' }
        & StrapiComponentMediaSingleImageFragment
      ) | (
        { __typename: 'STRAPI_ComponentMediaImages' }
        & StrapiComponentMediaImagesFragment
      ) | { __typename: 'STRAPI_ComponentMediaFiles' } | { __typename: 'STRAPI_ComponentMediaSingleFile' } | (
        { __typename: 'STRAPI_ComponentTextHeading' }
        & StrapiComponentTextHeadingFragment
      ) | (
        { __typename: 'STRAPI_ComponentTextParagraph' }
        & StrapiComponentTextParagraphFragment
      ) | (
        { __typename: 'STRAPI_ComponentTextQuote' }
        & StrapiComponentTextQuoteFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionTextRightImageLeft' }
        & StrapiComponentSectionTextRightImageLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionTextCenterImageEitherSide' }
        & StrapiComponentSectionTextCenterImageEitherSideFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionHeadingLeftImageRight' }
        & StrapiComponentSectionHeadingLeftImageRightFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionImageRightTextLeft' }
        & StrapiComponentSectionImageRightTextLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionImageCenterTextEitherSide' }
        & StrapiComponentSectionImageCenterTextEitherSideFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionHeadingRightImageLeft' }
        & StrapiComponentSectionHeadingRightImageLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetDivider' }
        & StrapiComponentWidgetDividerFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetEmbeddedForm' }
        & StrapiComponentWidgetEmbeddedFormFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetButton' }
        & StrapiComponentWidgetButtonFragment
      )>> }
    )> } };

export type Get_Blog_PageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Get_Blog_PageQuery = { strapi: { blog?: Maybe<StrapiBlogFragment> } };

export type Get_Strapi_CategoryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Get_Strapi_CategoryQuery = { strapi: { category?: Maybe<StrapiCategoryFragment> } };

export type Get_Offering_PageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Get_Offering_PageQuery = { strapi: { offering?: Maybe<StrapiOfferingFragment> } };

export type Get_PageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Get_PageQuery = { strapi: { page?: Maybe<(
      Pick<Strapi_Page, 'title' | 'meta_description'>
      & { banner_background_image?: Maybe<StrapiUploadFileFragment>, banner?: Maybe<Array<Maybe<(
        { __typename: 'STRAPI_ComponentMediaSingleVideo' }
        & StrapiComponentMediaSingleVideoFragment
      ) | (
        { __typename: 'STRAPI_ComponentMediaSingleImage' }
        & StrapiComponentMediaSingleImageFragment
      ) | (
        { __typename: 'STRAPI_ComponentMediaImages' }
        & StrapiComponentMediaImagesFragment
      ) | { __typename: 'STRAPI_ComponentMediaFiles' } | { __typename: 'STRAPI_ComponentMediaSingleFile' } | (
        { __typename: 'STRAPI_ComponentTextHeading' }
        & StrapiComponentTextHeadingFragment
      ) | (
        { __typename: 'STRAPI_ComponentTextParagraph' }
        & StrapiComponentTextParagraphFragment
      ) | (
        { __typename: 'STRAPI_ComponentTextQuote' }
        & StrapiComponentTextQuoteFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionTextRightImageLeft' }
        & StrapiComponentSectionTextRightImageLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionTextCenterImageEitherSide' }
        & StrapiComponentSectionTextCenterImageEitherSideFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionHeadingLeftImageRight' }
        & StrapiComponentSectionHeadingLeftImageRightFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionImageRightTextLeft' }
        & StrapiComponentSectionImageRightTextLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionImageCenterTextEitherSide' }
        & StrapiComponentSectionImageCenterTextEitherSideFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionHeadingRightImageLeft' }
        & StrapiComponentSectionHeadingRightImageLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetDivider' }
        & StrapiComponentWidgetDividerFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetButton' }
        & StrapiComponentWidgetButtonFragment
      )>>>, body: Array<Maybe<(
        { __typename: 'STRAPI_ComponentCollectionsBlogPosts' }
        & StrapiComponentCollectionsBlogPostsFragment
      ) | (
        { __typename: 'STRAPI_ComponentCollectionsOfferings' }
        & StrapiComponentCollectionsOfferingsFragment
      ) | (
        { __typename: 'STRAPI_ComponentCollectionsBlogs' }
        & StrapiComponentCollectionsBlogsFragment
      ) | (
        { __typename: 'STRAPI_ComponentCollectionsServices' }
        & StrapiComponentCollectionsServicesFragment
      ) | (
        { __typename: 'STRAPI_ComponentMediaSingleVideo' }
        & StrapiComponentMediaSingleVideoFragment
      ) | (
        { __typename: 'STRAPI_ComponentMediaSingleImage' }
        & StrapiComponentMediaSingleImageFragment
      ) | (
        { __typename: 'STRAPI_ComponentMediaImages' }
        & StrapiComponentMediaImagesFragment
      ) | { __typename: 'STRAPI_ComponentMediaFiles' } | { __typename: 'STRAPI_ComponentMediaSingleFile' } | (
        { __typename: 'STRAPI_ComponentTextHeading' }
        & StrapiComponentTextHeadingFragment
      ) | (
        { __typename: 'STRAPI_ComponentTextParagraph' }
        & StrapiComponentTextParagraphFragment
      ) | (
        { __typename: 'STRAPI_ComponentTextQuote' }
        & StrapiComponentTextQuoteFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionTextRightImageLeft' }
        & StrapiComponentSectionTextRightImageLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionTextCenterImageEitherSide' }
        & StrapiComponentSectionTextCenterImageEitherSideFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionHeadingLeftImageRight' }
        & StrapiComponentSectionHeadingLeftImageRightFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionImageRightTextLeft' }
        & StrapiComponentSectionImageRightTextLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionImageCenterTextEitherSide' }
        & StrapiComponentSectionImageCenterTextEitherSideFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionHeadingRightImageLeft' }
        & StrapiComponentSectionHeadingRightImageLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetDivider' }
        & StrapiComponentWidgetDividerFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetEmbeddedForm' }
        & StrapiComponentWidgetEmbeddedFormFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetButton' }
        & StrapiComponentWidgetButtonFragment
      )>> }
    )> } };

export type Get_Sales_PageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Get_Sales_PageQuery = { strapi: { service?: Maybe<(
      Pick<Strapi_Service, 'title' | 'meta_description'>
      & { banner_background_image?: Maybe<StrapiUploadFileFragment>, banner?: Maybe<Array<Maybe<(
        { __typename: 'STRAPI_ComponentMediaSingleVideo' }
        & StrapiComponentMediaSingleVideoFragment
      ) | (
        { __typename: 'STRAPI_ComponentMediaSingleImage' }
        & StrapiComponentMediaSingleImageFragment
      ) | (
        { __typename: 'STRAPI_ComponentMediaImages' }
        & StrapiComponentMediaImagesFragment
      ) | { __typename: 'STRAPI_ComponentMediaFiles' } | { __typename: 'STRAPI_ComponentMediaSingleFile' } | (
        { __typename: 'STRAPI_ComponentTextHeading' }
        & StrapiComponentTextHeadingFragment
      ) | (
        { __typename: 'STRAPI_ComponentTextParagraph' }
        & StrapiComponentTextParagraphFragment
      ) | (
        { __typename: 'STRAPI_ComponentTextQuote' }
        & StrapiComponentTextQuoteFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionTextRightImageLeft' }
        & StrapiComponentSectionTextRightImageLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionTextCenterImageEitherSide' }
        & StrapiComponentSectionTextCenterImageEitherSideFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionHeadingLeftImageRight' }
        & StrapiComponentSectionHeadingLeftImageRightFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionImageRightTextLeft' }
        & StrapiComponentSectionImageRightTextLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionImageCenterTextEitherSide' }
        & StrapiComponentSectionImageCenterTextEitherSideFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionHeadingRightImageLeft' }
        & StrapiComponentSectionHeadingRightImageLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetDivider' }
        & StrapiComponentWidgetDividerFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetButton' }
        & StrapiComponentWidgetButtonFragment
      )>>>, sales_page: Array<Maybe<{ __typename: 'STRAPI_ComponentMediaSingleVideo' } | (
        { __typename: 'STRAPI_ComponentMediaSingleImage' }
        & StrapiComponentMediaSingleImageFragment
      ) | { __typename: 'STRAPI_ComponentMediaVideos' } | (
        { __typename: 'STRAPI_ComponentMediaImages' }
        & StrapiComponentMediaImagesFragment
      ) | { __typename: 'STRAPI_ComponentMediaFiles' } | { __typename: 'STRAPI_ComponentMediaSingleFile' } | (
        { __typename: 'STRAPI_ComponentTextHeading' }
        & StrapiComponentTextHeadingFragment
      ) | (
        { __typename: 'STRAPI_ComponentTextParagraph' }
        & StrapiComponentTextParagraphFragment
      ) | (
        { __typename: 'STRAPI_ComponentTextQuote' }
        & StrapiComponentTextQuoteFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionTextRightImageLeft' }
        & StrapiComponentSectionTextRightImageLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionTextCenterImageEitherSide' }
        & StrapiComponentSectionTextCenterImageEitherSideFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionHeadingLeftImageRight' }
        & StrapiComponentSectionHeadingLeftImageRightFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionImageRightTextLeft' }
        & StrapiComponentSectionImageRightTextLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionImageCenterTextEitherSide' }
        & StrapiComponentSectionImageCenterTextEitherSideFragment
      ) | (
        { __typename: 'STRAPI_ComponentSectionHeadingRightImageLeft' }
        & StrapiComponentSectionHeadingRightImageLeftFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetDivider' }
        & StrapiComponentWidgetDividerFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetEmbeddedForm' }
        & StrapiComponentWidgetEmbeddedFormFragment
      ) | (
        { __typename: 'STRAPI_ComponentWidgetButton' }
        & StrapiComponentWidgetButtonFragment
      )>> }
    )> } };

export type Get_Strapi_TagQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type Get_Strapi_TagQuery = { strapi: { tag?: Maybe<StrapiTagFragment> } };

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: ImageSharpFluid['presentationHeight'], maxWidth: ImageSharpFluid['presentationWidth'] };

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
