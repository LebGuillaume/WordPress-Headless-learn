export const relativeToAbsoluteUrls = (hmtlString = "") => {
  return hmtlString.split(process.env.NEXT_PUBLIC_WP_URL).join("");
};
