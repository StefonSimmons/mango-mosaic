import React, { useState, useEffect } from 'react';

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';




function DisplayEditor({ content, editClicked, updatePost, postData }) {

  const [editorState, updateEditor] = useState('')

  useEffect(() => {
    const parsedContent = JSON.parse(content)
    const convertedContent = convertFromRaw(parsedContent)
    updateEditor(EditorState.createWithContent(convertedContent))
  }, [content])

  // ONLY FOR EDIT FORM
  const onEditorStateChange = editorState => {
    const raw = convertToRaw(editorState.getCurrentContent())
    storeContent(raw)
    updateEditor(editorState);
  }; 

  // STORES THE EDITOR CONTENT IN postData State
  const storeContent = rawContent => {
    updatePost({
      ...postData,
      content: JSON.stringify(rawContent),
    })
  }

  function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    if (type === 'blockquote') {
      return 'fancyBlock';
    }
  }

  return (
    <>
      {!editClicked ?
        <Editor
          editorState={editorState}
          wrapperClassName="rich-editor demo-wrapper"
          editorClassName="demo-editor"
          toolbarHidden={true}
          readOnly={true}
          blockStyleFn={myBlockStyleFn}
        />
        :
        <Editor
          editorState={editorState}
          wrapperClassName="rich-editor demo-wrapper"
          editorClassName="editor"
          onEditorStateChange={onEditorStateChange}
          blockStyleFn={myBlockStyleFn}
        />
      }
    </>
  );
}
export { DisplayEditor };

