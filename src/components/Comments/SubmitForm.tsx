import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Form, ValidationErrorMessage, SubmitButton } from './styles';
import { v4 } from 'uuid';
import axios from 'axios';
import { SubmitFormProps, ValidationErrors } from './types';

const THREE_SECOND_DELAY = 3000;

const SubmitForm = ({
  isReply,
  blogPostId,
  commentId,
  endpoint,
  setShouldRefetchComments,
}: SubmitFormProps): JSX.Element => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [authorName, setAuthorName] = useState('');
  const [commentBody, setCommentBody] = useState('');
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {},
  );

  let QuillEditor: any;
  if (typeof document !== undefined) {
    QuillEditor = require('./QuillEditor');
  }

  useEffect(() => {
    const resetIsSubmitted = setTimeout(
      () => setIsFormSubmitted(false),
      THREE_SECOND_DELAY,
    );

    return () => {
      clearTimeout(resetIsSubmitted);
    };
  }, [isFormSubmitted]);

  const handleValidation = (): boolean => {
    const commentBodyLength = commentBody.length;
    let authorNameError: string | null = null;
    let authorEmailError: string | null = null;
    let commentBodyError: string | null = null;
    let isValid: boolean;

    if (!authorName) {
      authorNameError = 'Please provide your name';
    }

    if (!commentBody) {
      commentBodyError = 'Please enter a comment';
    }

    if (commentBodyLength < 3) {
      commentBodyError = `Comment must be longer than ${commentBodyLength} character${
        commentBodyLength === 1 ? '' : 's'
      }`;
    }

    if (authorNameError || authorEmailError) {
      setValidationErrors({
        authorNameError,
        authorEmailError,
        commentBodyError,
      });
      isValid = false;
    } else {
      isValid = true;
    }

    return isValid;
  };

  // POST comment
  const onSubmit = (event: FormEvent): void => {
    event.preventDefault();
    const isValid = handleValidation();

    if (isValid) {
      axios.post(endpoint, {
        authorId: v4(),
        authorName,
        content: commentBody,
        threadOf: isReply ? commentId : undefined,
        related: [
          {
            refId: blogPostId,
            ref: 'blog-post',
            field: 'comments',
          },
        ],
      });

      setAuthorName('');
      setCommentBody('');
      setIsFormSubmitted(true);
      setShouldRefetchComments(true);
    }
  };

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="authorName">Your Name</label>
      <input
        id="authorName"
        name="authorName"
        type="text"
        value={authorName}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setAuthorName(e.target.value)
        }
      />
      {validationErrors.authorNameError && (
        <ValidationErrorMessage>
          {validationErrors.authorNameError}
        </ValidationErrorMessage>
      )}

      <label htmlFor="commentBody">
        {isReply ? 'Enter your reply' : 'Enter your comment here'}
      </label>

      {typeof document !== undefined && (
        <QuillEditor
          id="commentBody"
          name="commentBody"
          value={commentBody}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setCommentBody(e.target.value)
          }
        />
      )}

      {validationErrors.commentBodyError && (
        <ValidationErrorMessage>
          {validationErrors.commentBodyError}
        </ValidationErrorMessage>
      )}

      <SubmitButton variant="secondary" type="submit">
        {isFormSubmitted ? 'Thank you!' : isReply ? 'Reply' : 'Submit'}
      </SubmitButton>
    </Form>
  );
};

export default SubmitForm;
