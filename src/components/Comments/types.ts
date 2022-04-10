import { DefaultTheme } from 'styled-components';
import { Comment as CommentData } from '../../typings/strapi';

export type ValidationErrors = {
  authorNameError?: string | null;
  authorEmailError?: string | null;
  commentBodyError?: string | null;
};

type SharedFormProps = {
  blogPostId: string;
  endpoint: string;
  setShouldRefetchComments: (shouldRefetchComments: boolean) => void;
};

type ReplyFormProps = SharedFormProps & {
  isReply: true;
  commentId: number;
};

type OriginalCommentProps = SharedFormProps & {
  isReply?: never;
  commentId?: never;
};

export type SubmitFormProps = ReplyFormProps | OriginalCommentProps;

export type CommentProps = Pick<
  SubmitFormProps,
  'blogPostId' | 'endpoint' | 'setShouldRefetchComments'
> & {
  idx: number;
  comment: CommentData;
  numberOfTimesCommentsHaveLoaded: number;
  setNumberOfTimesCommentsHaveLoaded: (
    numberOfTimesCommentsHaveLoaded: number,
  ) => void;
};

export type PossibleFillColors = Extract<
  keyof DefaultTheme['color'],
  'primary-blue' | 'aterrima' | 'coffee' | 'lightSlateGray'
>;
