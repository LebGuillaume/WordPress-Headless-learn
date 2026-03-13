import { BlockRenderer } from "components/BlockRenderer";
import { notFound } from "next/navigation";
import getPage from "utils/getPage";
import getSeo from "utils/getSeo";

export default async function Home() {
  const data = await getPage("/");

  if (!data) {
    notFound();
  }

  console.log(data);
  return <BlockRenderer blocks={data} />;
}
export async function generateMetadata() {
  const seoData = await getSeo("/");    
  return {
    title: seoData?.title || "Default Title",
    description: seoData?.metaDesc || "Default description",
  };
}