import { gql } from "@apollo/client";
import client from "client";
import { mapMainMenuItems } from "./mapMainMenuItems";
import { cleanAndTransformBlock } from "./cleanAndTransformBlock";

export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/";
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            blocks(postTemplate: false)
            seo {
              title
              metaDesc
            }
          }
          ... on Property {
            id
            blocks(postTemplate: false)
            seo {
              title
              metaDesc
            }
          }
        }

        acfOptionsMainMenu {
          mainMenu {
            callToActionButton {
              label
              destination {
                ... on Page {
                  id
                  uri
                }
              }
            }
            menuItems {
              items {
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
                label
              }
              menuItem {
                destination {
                  ... on Page {
                    id
                    uri
                  }
                }
                label
              }
            }
          }
        }
      }
    `,
    variables: { uri },
  });
  return {
    props: {
      seo: data.nodeByUri?.seo || null,
      mainMenuItems: mapMainMenuItems(
        data.acfOptionsMainMenu.mainMenu.menuItems,
      ),
      callToActionLabel:
        data.acfOptionsMainMenu.mainMenu.callToActionButton?.label || null,
      callToActionDestination:
        data.acfOptionsMainMenu.mainMenu.callToActionButton?.destination?.uri ||
        null,
      blocks: cleanAndTransformBlock(data.nodeByUri?.blocks || []),
    },
  };
};
