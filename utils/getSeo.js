import { notFound } from "next/navigation";
import { cleanAndTransformBlock } from "./cleanAndTransformBlock";

const getSeo = async (uri) => {
  const param = {
    query: `
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            
            seo {
              title
              metaDesc
            }
          }
          ... on Property {
           
            seo {
              title
              metaDesc
            }
          }
        }


      }
    `,
    variables: { uri },
  };
  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(param),
  });
  const { data } = await response.json();
  if (!data?.nodeByUri) {
    notFound();
  }
  return data.nodeByUri.seo;
};

export default getSeo;
