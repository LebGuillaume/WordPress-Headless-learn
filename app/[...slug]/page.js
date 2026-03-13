import { BlockRenderer } from "components/BlockRenderer";
import getPage from "utils/getPage";
import { notFound } from "next/navigation";
import getSeo from "utils/getSeo";

export default async function Page({ params }) {
  const data = await getPage(params.slug.join("/"));
  if (!data) {
    notFound();
  }
  console.log(data);
  return <BlockRenderer blocks={data} />;
}
export async function generateMetadata({ params }) {
  const seoData = await getSeo(params.slug.join("/"));
  return {
    title: seoData?.title || "Default Title",
    description: seoData?.metaDesc || "Default description",
  };
}