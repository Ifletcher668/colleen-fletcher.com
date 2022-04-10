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

const Comments = ({ blogPostId }: CommentsProps): JSX.Element => {
  const commentsEndpoint = `${process.env.GATSBY_COMMENTS_ENDPOINT}${blogPostId}`;
  const [allComments, setAllComments] = useState<CommentData[]>([]);
  const [shownComments, setShownComments] = useState<CommentData[]>([]);
  const [shouldRefetchComments, setShouldRefetchComments] = useState(false);
  const [numberOfTimesCommentsHaveLoaded, setNumberOfTimesCommentsHaveLoaded] =
    useState(1); // start at one to account for first render
  const [errors, setErrors] = useState(null);
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
        })
        .catch(err => {
          setErrors(err);
        });

      if (result) setAllComments(result);

      if (shouldRefetchComments) setShouldRefetchComments(false);
    }

    fetchComments();
  }, [commentsEndpoint, shouldRefetchComments]);

  useEffect(() => {
    setShownComments(
      allComments.slice(0, numberOfTimesCommentsHaveLoaded * 10),
    );
  }, [allComments, numberOfTimesCommentsHaveLoaded]);

  if (errors)
    return (
      <p>
        Sorry, something went wrong! We can't show any comments at this time
      </p>
    );

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
