import React, { Component } from 'react';

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

  render() {
    const { editorState } = this.state;

    return (
      <div className='text-editor-wrapper'>
        <div>

          <Editor
            editorState={editorState}
            wrapperClassName="rich-editor"
            editorClassName="editor-field "
            onEditorStateChange={this.onEditorStateChange}
          />

        </div>
      </div>
    );
  }
}
export { CreationEditor };

// className="btn btn-success" data-toggle="modal" data-target="#previewModal"