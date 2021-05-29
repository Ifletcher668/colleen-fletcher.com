import { graphql, useStaticQuery } from 'gatsby';

export const useImage: () => { [key: string]: ChildImageSharp } = () =>
  useStaticQuery(graphql`
    query {
      frangipaniImg: file(relativePath: { eq: "Frangipani-blue.png" }) {
        ...ConstrainedImage
      }
    }
  `);
