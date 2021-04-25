import React from 'react';

export interface Props {
  data: any;
}

const TextWithImageField: React.FC<Props> = ({
  data: { header, rich_text, image_right_side },
}: Props) => {
  return <>{/* todo */}</>;
};

export default TextWithImageField;
