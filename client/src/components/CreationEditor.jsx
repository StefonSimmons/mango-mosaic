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



  return (
    <div className='text-editor-wrapper'>
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="rich-editor"
          editorClassName="editor-field "
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </div>
  );
}

export { CreationEditor };