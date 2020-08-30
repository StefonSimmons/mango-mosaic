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

// class CreationEditor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty(),
//     };
//   }


//   onEditorStateChange = editorState => {
//     const raw = convertToRaw(editorState.getCurrentContent())
//     this.storeContent(raw)

//     this.setState({ editorState });
//   };

//   storeContent = rawContent => {
//     localStorage.setItem('rawCreatedContent', JSON.stringify(rawContent));
//   }

//   render() {
//     const { editorState } = this.state;

//     return (
//       <div className='text-editor-wrapper'>
//         <div>

//           <Editor
//             editorState={editorState}
//             wrapperClassName="rich-editor"
//             editorClassName="editor-field "
//             onEditorStateChange={this.onEditorStateChange}
//           />

//         </div>
//       </div>
//     );
//   }
// }
// export { CreationEditor };

// className="btn btn-success" data-toggle="modal" data-target="#previewModal"