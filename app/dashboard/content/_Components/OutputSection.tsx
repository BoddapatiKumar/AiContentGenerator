"use client";

import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";

interface PROPS{
    aiOutput:string
}


const OutputSection = ({aiOutput}:PROPS) => {
  const EditorRef: any = useRef<any>(null);
  useEffect(()=>{
    const editorInstance=EditorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  },[aiOutput])
  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-5">
        <h2>Your Result</h2>
        <Button onClick={()=>navigator.clipboard.writeText(aiOutput)}>
          <Copy />
        </Button>
      </div>
      <Editor
        ref={EditorRef}
        initialValue="Your Result will appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={() =>
          console.log(EditorRef.current.getInstance().getMarkdown())
        }
      />
    </div>
  );
};

export default OutputSection;
