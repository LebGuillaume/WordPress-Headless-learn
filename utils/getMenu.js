import { cleanAndTransformBlock } from "./cleanAndTransformBlock";
import { mapMainMenuItems } from "./mapMainMenuItems";

const getMenu = async (uri) => {
  const param = {
    query: `
      query PageQuery {
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
  };
  const response = await fetch(process.env.WP_GRAPHQL_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(param),
  });
  const json = await response.json();

  if (!json.data?.acfOptionsMainMenu) {
    console.error("getMenu GraphQL response:", JSON.stringify(json, null, 2));
    throw new Error(
      `getMenu: missing acfOptionsMainMenu in response. Check WP_GRAPHQL_URL and ACF Options plugin.`,
    );
  }

  const { data } = json;
  console.log("getMenu data:", JSON.stringify(data, null, 2));
  return {
    mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
    callToActionLabel:
      data.acfOptionsMainMenu.mainMenu.callToActionButton?.label || null,
    callToActionDestination:
      data.acfOptionsMainMenu.mainMenu.callToActionButton?.destination?.uri ||
      null,
  };
};

export default getMenu;
