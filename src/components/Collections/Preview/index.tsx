// A bad workaround until Strapi addresses a bug
//  where I can't query a nested component from a relation
// e.g. page body dynamic zone
//  -> relation -> component
//  -> component <- this last one returns null

import React from 'react';

interface Props {
  preview: StrapiPreview;
  component: StrapiBlog | StrapiOffering;
}

const Preview: React.FC<Props> = (props: Props) => {
  return (
    <>
      {/*  */}
      {/*  */}
    </>
  );
};

export default Preview;
