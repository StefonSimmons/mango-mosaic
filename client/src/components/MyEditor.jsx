import React, { Component } from 'react';
import { PreviewModal } from './PreviewModal';

import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
// import { stateToHTML } from 'draft-js-export-html';
import draftToHtml from 'draftjs-to-html'
// import parse from 'html-react-parser';



class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      toolBar: true
    };
  }


  onEditorStateChange = editorState => {
    this.setState({ editorState });
  };

  hideToolBar = () => {
    this.setState(prevState => ({
      toolBar: !prevState.toolBar
    }))
  }

  render() {
    const { editorState, toolBar } = this.state;
    // const rawText = convertToRaw(editorState.getCurrentContent())
    // const html = stateToHTML(editorState.getCurrentContent())

    // const getHtml = editorState => draftToHtml(convertToRaw(editorState.getCurrentContent()))

    return (
      <div>
        <div>
          {/* {console.log(editorState.getCurrentContent())} */}
          {/* {console.log(stateToHTML(editorState.getCurrentContent()))} */}
          {console.log(convertToRaw(editorState.getCurrentContent()))}
          {/* {console.log(stateToHTML(convertFromRaw(rawText)))} */}
          {/* {console.log(parse(stateToHTML(editorState.getCurrentContent())))} */}
          {/* {console.log(htmlParsed)} */}
          {/* {console.log(draftToHtml(convertToRaw(editorState.getCurrentContent())))} */}
          { toolBar ?
            <Editor
            editorState={editorState}
            wrapperClassName="rich-editor demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          // toolbarClassName='hide-toolbar'
          // toolbarHidden={true}
          // readOnly={true}
            />
            :
            <Editor
              editorState={editorState}
              wrapperClassName="rich-editor demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
              toolbarClassName='hide-toolbar'
              toolbarHidden={true}
              readOnly={true}
            />
          }
          <div>
            {/* {parse(html)} */}
          </div>
          {/* <div className="html-view" dangerouslySetInnerHTML={{ __html: getHtml(editorState) }}>
            {{ getHtml(editorState) }}
          </div> */}

          <button onClick={this.hideToolBar}>
            Preview message
          </button>
          {/* <PreviewModal
            output={getHtml(editorState)}
          /> */}
        </div>
      </div>
    );
  }
}
export { MyEditor };

// className="btn btn-success" data-toggle="modal" data-target="#previewModal"