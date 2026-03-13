import client from "client";
import { gql } from "@apollo/client";

export const POST = async (request) => {
  try {
    const filters = await request.json();

    let hasParkingFilter = ``;
    let petFriendlyFilter = ``;
    let minPriceFilter = ``;
    let maxPriceFilter = ``;

    if (filters.hasParking) {
      hasParkingFilter = `
        {
          key: "has_parking"
          compare: EQUAL_TO
          value:"1"
        }
      `;
    }
    if (filters.minPrice) {
      minPriceFilter = `
        {
          key: "price"
          compare: GREATER_THAN
          value:"${filters.minPrice}"
          type: NUMERIC
        }
      `;
    }
    if (filters.maxPrice) {
      maxPriceFilter = `
        {
          key: "price"
          compare: LESS_THAN_OR_EQUAL_TO
          value:"${filters.maxPrice}"
          type: NUMERIC
        }
      `;
    }
    if (filters.petFriendly) {
      petFriendlyFilter = `
        {
          key: "pet_friendly"
          compare: EQUAL_TO
          value:"1"
        }
      `;
    }

    const { data } = await client.query({
      query: gql`
        query AllPropertiesQuery {
          properties(where: { offsetPagination: { size: 3, offset: ${((filters.page || 1) - 1) * 3} }
            metaQuery: {
            relation:AND
            metaArray: [
                ${hasParkingFilter}
                ${petFriendlyFilter}
                ${minPriceFilter}
                ${maxPriceFilter}
              ]}}) {
            pageInfo {
              offsetPagination {
                total
              }
            }
            nodes {
              databaseId
              uri
              title
              featuredImage {
                node {
                  uri
                  sourceUrl
                }
              }
              propertyFeatures {
                bathrooms
                bedrooms
                hasParking
                petFriendly
                price
              }
            }
          }
        }
      `,
    });

    return Response.json({
      total: data.properties.pageInfo.offsetPagination.total,
      properties: data.properties.nodes,
    });
  } catch (error) {
    console.log("Error fetching properties", error);
    return Response.json(
      { message: "Error fetching properties", error: error.message },
      { status: 500 },
    );
  }
};
