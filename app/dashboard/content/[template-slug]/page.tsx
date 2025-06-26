import templates from "@/app/(data)/templates";
import { TEMPLATE } from "../../_Components/TemplateListSection";
import CreateContent from "../_Components/CreateContent";

interface Props {
  params: {
    "template-slug": string;
  };
}

const Page = async ({ params }: Props) => {
  const selectedTemplate: TEMPLATE | undefined = templates.find(
    (item) => item.slug === params["template-slug"]
  );

  return <CreateContent selectedTemplate={selectedTemplate} />;
};
export default Page;
