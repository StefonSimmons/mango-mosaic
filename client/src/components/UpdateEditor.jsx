import React, { useState, useEffect } from 'react';

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import { stateToHTML } from 'draft-js-export-html';
// import draftToHtml from 'draftjs-to-html'
// import parse from 'html-react-parser';



function UpdateEditor({ content }) {

  const [editorState, updateEditor] = useState('')

  // useEffect(() => {
  //   const parsedContent = JSON.parse(content)
  //   const convertedContent = convertFromRaw(parsedContent)
  //   updateEditor(EditorState.createWithContent(convertedContent))
  // }, [content])


  const onEditorStateChange = editorState => {
    // const raw = convertToRaw(editorState.getCurrentContent())
    // storeContent(raw)

    updateEditor(editorState);
  };

  // const storeContent = rawContent => {
  //   localStorage.setItem('rawContent', JSON.stringify(rawContent));
  // } 

  return (
    <>
      <Editor
        editorState={editorState}
        wrapperClassName="rich-editor demo-wrapper"
        editorClassName="editor"
        onEditorStateChange={onEditorStateChange}
      />
    </>
  );
}
export { UpdateEditor };

