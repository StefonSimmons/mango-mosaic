import React, { Component } from 'react';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import {stateToHTML} from 'draft-js-export-html';


class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty()
    };
  }


  onEditorStateChange = editorState => {
    this.setState({ editorState });
  };


  render() {
    const { editorState } = this.state;
    const rawText = convertToRaw(editorState.getCurrentContent())
    return (
      <div>
        <div>
          {/* {console.log(stateToHTML(editorState.getCurrentContent()))} */}
          {/* {console.log(convertToRaw(editorState.getCurrentContent()))} */}
          {/* {console.log(stateToHTML(convertFromRaw(rawText)))} */}
          <Editor
            editorState={editorState}
            wrapperClassName="rich-editor demo-wrapper"
            editorClassName="demo-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
        </div>
      </div>
    );
  }
}
export { MyEditor };