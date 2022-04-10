import React, { useState } from 'react';
import { v4 } from 'uuid';
import { formatDateTime } from '../../utils/format-date';
import Divider from '../Divider';
import { Button, Span, Strong } from '../Elements';
import { Paragraph } from '../Text';
import { AuthorInformation, ReplyList } from './styles';
import SubmitForm from './SubmitForm';
import { CommentProps, PossibleFillColors } from './types';
import Mandala from './Mandala';

const Comment = ({
  idx,
  endpoint,
  blogPostId,
  comment,
  numberOfTimesCommentsHaveLoaded,
  setNumberOfTimesCommentsHaveLoaded,
  setShouldRefetchComments,
}: CommentProps): JSX.Element => {
  const {
    id: commentId,
    content,
    created_at,
    authorName,
    children: replies,
  } = comment;
  const indexIsMultipleOfTen = (idx + 1) % 10 === 0;
  const [shouldShowReplyForm, showReplyForm] = useState(false);

  const handleLoadMoreButton = (): void => {
    setNumberOfTimesCommentsHaveLoaded(numberOfTimesCommentsHaveLoaded + 1);
  };

  const possibleFillColors: PossibleFillColors[] = [
    'aterrima',
    'coffee',
    'primary-blue',
    'lightSlateGray',
  ];

  const randomFillColor =
    possibleFillColors[Math.floor(Math.random() * possibleFillColors.length)];

  const CommentBody = ({
    authorName,
    created_at,
    content,
  }: {
    authorName: string;
    created_at: string;
    content: string;
  }): JSX.Element => (
    <>
      <AuthorInformation>
        <Mandala fillColor={randomFillColor} />

        <Strong>{authorName}</Strong>

        <Strong>{formatDateTime(created_at)}</Strong>
      </AuthorInformation>

      <Paragraph
        data={{
          alignParagraph: 'center',
          justifyParagraph: 'center',
          body: content,
        }}
      />
    </>
  );

  return (
    <li>
      {indexIsMultipleOfTen &&
      idx + 1 === numberOfTimesCommentsHaveLoaded * 10 ? (
        <Button onClick={handleLoadMoreButton}>Read More</Button>
      ) : (
        <>
          <article>
            <CommentBody
              authorName={authorName}
              created_at={created_at}
              content={content}
            />

            {shouldShowReplyForm && (
              <SubmitForm
                setShouldRefetchComments={setShouldRefetchComments}
                isReply={true}
                commentId={commentId}
                endpoint={endpoint}
                blogPostId={blogPostId}
              />
            )}

            <button onClick={() => showReplyForm(!shouldShowReplyForm)}>
              <Span size="small">
                {shouldShowReplyForm ? 'Cancel' : 'Reply'}
              </Span>
            </button>

            <Divider type="standard" />
          </article>

          {replies.length > 0 && (
            <ReplyList>
              {replies.map(({ authorName, created_at, content }) => (
                <li key={v4()}>
                  <article>
                    <CommentBody
                      authorName={authorName}
                      created_at={created_at}
                      content={content}
                    />
                    <Divider type="standard" />
                  </article>
                </li>
              ))}
            </ReplyList>
          )}
        </>
      )}
    </li>
  );
};

export default Comment;
