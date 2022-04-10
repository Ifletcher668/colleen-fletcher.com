import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { v4 } from 'uuid';
import { Comment as CommentData } from '../../typings/strapi';

import Heading from '../Heading';
import Comment from './Comment';
import { CommentsList } from './styles';
import SubmitForm from './SubmitForm';

type CommentsProps = {
  blogPostId: string;
};

/** TODO:
 *
 * 1. add validation
 * 2. add opt-in for email
 * 3. style comments
 * 4. add support for replies
 * 5. refactor to useReducer
 * 6. add avatars?
 *
 * */

const Comments = ({ blogPostId }: CommentsProps): JSX.Element => {
  const commentsEndpoint = `${process.env.GATSBY_COMMENTS_ENDPOINT}${blogPostId}`;
  const [allComments, setAllComments] = useState<CommentData[]>([]);
  const [shownComments, setShownComments] = useState<CommentData[]>([]);
  const [shouldRefetchComments, setShouldRefetchComments] = useState(false);
  const [numberOfTimesCommentsHaveLoaded, setNumberOfTimesCommentsHaveLoaded] =
    useState(1); // start at one to account for first render

  // GET comments
  useEffect(() => {
    async function fetchComments(): Promise<void> {
      const result = await axios
        .get<CommentData[]>(commentsEndpoint)
        .then(res => {
          // show most recent comments at the top
          return res.data.sort(c => {
            const commentDate = new Date(c.created_at).getTime();
            const today = new Date().getTime();
            return commentDate - today;
          });
        });

      setAllComments(result);

      if (shouldRefetchComments) setShouldRefetchComments(false);
    }

    fetchComments();
  }, [commentsEndpoint, shouldRefetchComments]);

  useEffect(() => {
    setShownComments(
      allComments.slice(0, numberOfTimesCommentsHaveLoaded * 10),
    );
  }, [allComments, numberOfTimesCommentsHaveLoaded]);

  return (
    <section>
      <Heading level={2}>Leave a Message</Heading>

      <SubmitForm
        setShouldRefetchComments={setShouldRefetchComments}
        endpoint={commentsEndpoint}
        blogPostId={blogPostId}
      />

      <CommentsList>
        {shownComments.map((comment, idx) => {
          // only show first ten posts
          // After, show a 'read more' button
          // load ten more posts when button is clicked
          // if the button is clicked, map the first and second array
          return (
            <Comment
              setShouldRefetchComments={setShouldRefetchComments}
              key={v4()}
              comment={comment}
              idx={idx}
              numberOfTimesCommentsHaveLoaded={numberOfTimesCommentsHaveLoaded}
              setNumberOfTimesCommentsHaveLoaded={
                setNumberOfTimesCommentsHaveLoaded
              }
              endpoint={commentsEndpoint}
              blogPostId={blogPostId}
            />
          );
        })}
      </CommentsList>
    </section>
  );
};

export default Comments;
