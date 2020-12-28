import React, { useState } from 'react';

import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';


function CreationEditor({ postData, createPost }) {
  // editorState is initialized as being empty with EditorState.createEmpty()  
  const [editorState, updateEditor] = useState(EditorState.createEmpty())

  // onChange I'm eventually updating my createPost obj in CreatePost component
  const onEditorStateChange = editorState => {
    // console.log('richtext-->', editorState)
    const raw = convertToRaw(editorState.getCurrentContent())
    // console.log('raw-->', raw)
    storeContent(raw)
    updateEditor(editorState);
  };

  const storeContent = rawContent => {
    // console.log('json-->', JSON.stringify(rawContent))
    // updating state of postData in the CreatePost component
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