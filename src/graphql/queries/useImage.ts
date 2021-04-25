import { graphql, useStaticQuery } from 'gatsby';

export const useImage: () => { [key: string]: FluidImage } = () =>
  useStaticQuery(graphql`
    query {
      frangipaniImg: file(relativePath: { eq: "Frangipani-blue.png" }) {
        ...FluidImage
      }
    }
  `);
