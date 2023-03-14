import React, {useState} from "react";
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function App(){
  const [data, setData]= useState('');
  const handleChange =(e, editor) =>{
   setData(editor.getData());
  }
  return(
    <div style={{maxWidth:"300px", margin: "0 auto",}}>
      <CKEditor 
      editor={ClassicEditor}
      onChange={(e, editor)=> {handleChange(e, editor)}}/>
      <div>

      </div>
    </div>
  )
}