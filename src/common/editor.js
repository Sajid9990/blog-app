import React, { Fragment, useState, useRef, useEffect } from "react";
import { Editor } from '@tinymce/tinymce-react';

const TextEditor = (props) => {
    const editorRef = useRef();

    // if (props.isEdit !== false) {
    //     try {
    //         // document.getElementById("image" + props.contentId).src = file;
    //         const ff = document.getElementById("text" + props.contentId);
    //         ff.innerHTML = props.content;
    //         //    console.log(ff);
    //     } catch (error) { }
    // }

    return (
        <>
            <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                // onChange={updateText}
                onEditorChange={(content) => props.pushEditorValue(content)}
                // initialValue="<p>This is the initial content of the editor.</p>"
                // initialValue={props.content ? props.content : ""}  // not set initialValue  value  it will permanent.
                value={props.content}
                init={{
                    height: props.height ? props.height : 'auto',
                    width: props.width ? props.width : '100%',
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: props.isCTA ? 'bold italic backcolor forecolor | fontselect fontsizeselect' :
                        'undo redo | formatselect | ' +
                        'bold italic backcolor forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | ' +
                        'fontselect | fontsizeselect | code ', //link image |
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px; }',
                    // custom_undo_redo_levels: 2
                    //content_css: 'css/content.css'
                }}
            />
        </>
    )
}
export default TextEditor;