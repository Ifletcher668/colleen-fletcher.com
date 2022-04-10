import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import styled from 'styled-components';

type QuillEditorProps = {
  onChange: any;
  name: string;
  value: string;
  id?: string;
  className?: string;
};

const _isRenderingInBrowser =
  typeof window !== undefined || typeof document !== undefined;

const QuillEditor = ({
  onChange,
  name,
  value,
  id,
  className,
}: QuillEditorProps): JSX.Element => {
  const toolbar = [
    // toolbar container
    [{ header: [2, 3, 4, 5, 6, false] }, { font: [] }, { size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ align: [] }, { indent: '-1' }, { indent: '+1' }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'clean'],
  ];

  const clipboard = {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  };

  const history = {
    delay: 2000,
    maxStack: 500,
    userOnly: true,
  };

  const modules = {
    toolbar,
    clipboard,
    history,
  };

  const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
    'align',
  ];

  return _isRenderingInBrowser ? (
    <ReactQuill
      id={id}
      className={className}
      theme="snow"
      value={value}
      modules={modules}
      formats={formats}
      onChange={content => {
        onChange({ target: { name, value: content } });
      }}
    />
  ) : (
    <></>
  );
};

export default styled(QuillEditor)``;
