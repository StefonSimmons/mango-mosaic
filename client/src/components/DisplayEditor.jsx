import React, { useState, useEffect } from 'react';
// import { PreviewModal } from './PreviewModal';

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import { stateToHTML } from 'draft-js-export-html';
// import draftToHtml from 'draftjs-to-html'
// import parse from 'html-react-parser';



function DisplayEditor({ content }) {
  const [rawContent, updateContent] = useState(content)
  const [editorState, updateEditor] = useState('')

  useEffect(() => {
    const parsedContent = JSON.parse(rawContent)
    const convertedContent = convertFromRaw(parsedContent)
    updateEditor(EditorState.createWithContent(convertedContent))
  },[])

  // onEditorStateChange = editorState => {
  //   this.setState({ editorState });
  //   console.log(editorState)
  // };

  // hideToolBar = () => {
  //   this.setState(prevState => ({
  //     toolBar: !prevState.toolBar
  //   }))
  // }

  // const { editorState, toolBar } = this.state;
  // const {content} = this.props
  // const { toolBar } = this.props //ONLY NEEDED IF I CHANGE THE FLOW OF DATA
  // const rawText = convertToRaw(editorState.getCurrentContent())
  // const html = stateToHTML(editorState.getCurrentContent())

  // const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()))

  return (
    <div className='textEditorWrapper'>
      <div>
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
          toolbarClassName='hide-toolbar'
          toolbarHidden={true}
          readOnly={true}
        />
        {/* <div>
            {parse(html)}
          </div> */}
        {/* <div className="html-view" dangerouslySetInnerHTML={{ __html: getHtml(editorState) }}>
            {{ getHtml(editorState) }}
          </div> */}

        {/* <button onClick={hideToolBar}>
            Preview message
          </button> */}
        {/* <PreviewModal
            output={getHtml(editorState)}
          /> */}
      </div>
    </div>
  );
}
export { DisplayEditor };

// className="btn btn-success" data-toggle="modal" data-target="#previewModal"