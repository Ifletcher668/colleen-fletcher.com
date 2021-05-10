import React from 'react';

export interface Props {
  data: {
    code_snippet: string;
  };
}

const EmbeddedForm: React.FC<Props> = ({ data }: Props) => {
  return (
    <div
      className="embedded-form"
      dangerouslySetInnerHTML={{ __html: data.code_snippet }}
    />
  );
};

export default EmbeddedForm;
