export const getTextAlign = (textAlign = "left") => {
  const TextAlignMap = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return TextAlignMap[textAlign] || "";
};

export const getFontSize = (level) => {
  const FontSizeMap = {
    1: "text-6xl",
    2: "text-5xl",
    3: "text-4xl",
    4: "text-3xl",
    5: "text-2xl",
    6: "text-xl",
  };
  return FontSizeMap[level] || "";
};
