import React from 'react';
import Heading from '../../Heading';
import { VideoWrapper } from './styles';

interface Props {
  data: StrapiComponentSingleVideo;
}

const VideoField = ({ data }: Props): JSX.Element => {
  return (
    <VideoWrapper>
      <Heading level={3}>{data.title}</Heading>
      <div dangerouslySetInnerHTML={{ __html: data.code_snippet }} />
    </VideoWrapper>
  );
};

export default VideoField;
