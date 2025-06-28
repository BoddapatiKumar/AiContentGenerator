"use client";

import React, { useState } from "react";
import FormSection from "../_Components/FormSection";
import OutputSection from "../_Components/OutputSection";
import { TEMPLATE } from "../../_Components/TemplateListSection";
import { chatSession } from "@/utils/aiModel";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/Schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

const CreateContent = ({
  selectedTemplate,
}: {
  selectedTemplate: TEMPLATE | undefined;
}) => {
  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();

  const generateAiContent = async (formdata: any) => {
    setLoading(true);
    const selectedContent = selectedTemplate?.aiPrompt;
    const finalAiPrompt = JSON.stringify(formdata) + ", " + selectedContent;
    const result = await chatSession.sendMessage(finalAiPrompt);
    console.log(result.response.text());
    setAiOutput(result?.response?.text());

    await SaveIndb(formdata, selectedTemplate?.slug, result?.response?.text());

    setLoading(false);
  };

  const SaveIndb = async (formData: any, slug: any, aiOutput: string) => {
    try {
      const result = await db.insert(AIOutput).values({
        formData: formData,
        templateSlug: slug,
        aiResponse: aiOutput,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD/MM/yyyy"),
      });
      console.log("Saved to DB ✅", result);
    } catch (error) {
      console.error("Error saving to DB ❌", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
      <FormSection
        selectedTemplate={selectedTemplate}
        userFormInput={generateAiContent}
        loading={loading}
      />

      <div className="col-span-2">
        <OutputSection aiOutput={aiOutput} />
      </div>
    </div>
  );
};

export default CreateContent;
