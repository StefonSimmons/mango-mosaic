import React, { Component } from 'react';
import { PreviewModal } from './PreviewModal';

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html';
import draftToHtml from 'draftjs-to-html'
import parse from 'html-react-parser';



class CreationEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      // toolBar: true
    };
  }


  onEditorStateChange = editorState => {
    const raw = convertToRaw(editorState.getCurrentContent())
    this.storeContent(raw)

    this.setState({ editorState });
  };

  storeContent = rawContent => {
    localStorage.setItem('rawContent', JSON.stringify(rawContent));
  }

  // hideToolBar = () => {
  //   this.setState(prevState => ({
  //     toolBar: !prevState.toolBar
  //   }))
  // }

  render() {
    const { editorState } = this.state;
    // const { toolBar } = this.props //ONLY NEEDED IF I CHANGE THE FLOW OF DATA
    // const rawText = convertToRaw(editorState.getCurrentContent())
    // const html = stateToHTML(editorState.getCurrentContent())

    // const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()))

    return (
      <div className='textEditorWrapper'>
        <div>
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
            onEditorStateChange={this.onEditorStateChange}
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
}
export { CreationEditor };

// className="btn btn-success" data-toggle="modal" data-target="#previewModal"