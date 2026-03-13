import { notFound } from "next/navigation";
import { cleanAndTransformBlock } from "./cleanAndTransformBlock";

const getPage = async (uri) => {
  const param = {
    query: `
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            
            
            blocks(postTemplate: false)
            
          }
          ... on Property {
            
            blocks(postTemplate: false)
            
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
  const blocks = cleanAndTransformBlock(data.nodeByUri?.blocks || []);
  return blocks;
};

export default getPage;
