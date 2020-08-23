import React, { useState, useEffect } from 'react';

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import { stateToHTML } from 'draft-js-export-html';
// import draftToHtml from 'draftjs-to-html'
// import parse from 'html-react-parser';



function DisplayEditor({ content }) {
  
  const [editorState, updateEditor] = useState('')

  useEffect(() => {
    const parsedContent = JSON.parse(content)
    const convertedContent = convertFromRaw(parsedContent)
    updateEditor(EditorState.createWithContent(convertedContent))
  },[content])



  return (
    <>
    {/* <div className='textEditorWrapper'> */}
        {console.log(typeof content)}
        {/* {console.log(editorState.getCurrentContent())} */}
        {/* {console.log(stateToHTML(editorState.getCurrentContent()))} */}
        {/* {console.log(convertFromRaw(convertToRaw(editorState.getCurrentContent())))} */}
        {/* {console.log(JSON.stringify(convertFromRaw(convertToRaw(editorState.getCurrentContent()))))} */}
        {/* {console.log(stateToHTML(convertFromRaw(rawText)))} */}
        {/* {console.log(parse(stateToHTML(editorState.getCurrentContent())))} */}
        {/* {console.log(htmlParsed)} */}
        {/* {console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))} */}
        {/* {console.log(typeof parse(html))} */}

        <Editor
          editorState={editorState}
          wrapperClassName="rich-editor demo-wrapper"
          editorClassName="demo-editor"
          toolbarHidden={true}
          readOnly={true}
        />

      {/* </div> */}
      </>
  );
}
export { DisplayEditor };

