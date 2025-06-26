"use client";

import React from "react";
import FormSection from "../_Components/FormSection";
import OutputSection from "../_Components/OutputSection";
import { TEMPLATE } from "../../_Components/TemplateListSection";

const CreateContent = ({
  selectedTemplate,
}: {
  selectedTemplate: TEMPLATE | undefined;
}) => {
  const generateAiContent = (formdata: any) => {
    console.log("AI generation logic", formdata);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormInput={generateAiContent}
      />

      <div className="col-span-2">
        <OutputSection />
      </div>
    </div>
  );
};

export default CreateContent;
