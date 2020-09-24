import React, { useState } from 'react';

import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


function CreationEditor({ postData, createPost }) {

  const [editorState, updateEditor] = useState(EditorState.createEmpty())


  const onEditorStateChange = editorState => {
    const raw = convertToRaw(editorState.getCurrentContent())
    storeContent(raw)
    updateEditor(editorState);
  };

  const storeContent = rawContent => {
    createPost({
      ...postData,
      content: JSON.stringify(rawContent)
    })
  }

  function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    if (type === 'blockquote') {
      return 'fancyBlock';
    }
  }

  return (
    <div className='text-editor-wrapper'>
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="rich-editor"
          editorClassName="editor-field "
          onEditorStateChange={onEditorStateChange}
          blockStyleFn={myBlockStyleFn}
        />
      </div>
    </div>
  );
}

export { CreationEditor };