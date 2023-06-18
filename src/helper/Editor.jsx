import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const Editor = ({ designation, setDesignation }) => {

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setDesignation(data);
  };

  return (
    <CKEditor
        editor={ClassicEditor}
        data={designation}
        config={{
          placeholder: "Write Something..."
        }}
        onChange={handleEditorChange}
      />
  );
};

export default Editor;


// import ReactQuill from "react-quill";
// import "react-quill/dist/quill.snow.css"; // or import your desired Quill theme CSS

// const Editor = ({ content, setContent }) => {

//   return (
//     <ReactQuill theme="snow" value={content} onChange={setContent}  />
//   );
// };

// export default Editor;

