"use client";

import React, { useState } from "react";
import FormSection from "../_Components/FormSection";
import OutputSection from "../_Components/OutputSection";
import { TEMPLATE } from "../../_Components/TemplateListSection";
import { chatSession } from "@/utils/aiModel";

const CreateContent = ({
  selectedTemplate,
}: {
  selectedTemplate: TEMPLATE | undefined;
}) => {
  const [loading,setLoading]=useState(false);
  const [aiOutput,setAiOutput]=useState<string>('')

  const generateAiContent = async(formdata: any) => {
    setLoading(true);
    const selectedContent=selectedTemplate?.aiPrompt;
    const finalAiPrompt=JSON.stringify(formdata)+", "+selectedContent;
    const result= await chatSession.sendMessage(finalAiPrompt);
    console.log(result.response.text());
    setAiOutput(result?.response?.text())
    setLoading(false);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormInput={generateAiContent}
        loading={loading}
      />

      <div className="col-span-2">
        <OutputSection aiOutput={aiOutput}/>
      </div>
    </div>
  );
};

export default CreateContent;
