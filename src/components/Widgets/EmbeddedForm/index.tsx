import React from 'react';

export interface Props {
  data: {
    code_snippet: string;
    justify: JustifyValues;
  };
}

const EmbeddedForm = ({ data }: Props): JSX.Element => {
  console.log(data);
  return (
    <div
      className={`embedded-form ${data.justify}`}
      dangerouslySetInnerHTML={{ __html: data.code_snippet }}
    />
  );
};

export default EmbeddedForm;
