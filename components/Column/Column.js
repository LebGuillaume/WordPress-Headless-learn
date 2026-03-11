const Column = ({ children, width, txtColor, backgroundColor }) => {
  const textColorStyle = txtColor ? { color: txtColor } : {};
  const backgroundColorStyle = backgroundColor
    ? { backgroundColor: backgroundColor }
    : {};
  const widthStyle = width
    ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };
  return (
    <div
      style={{ ...widthStyle, ...textColorStyle, ...backgroundColorStyle }}
      className="px-2 py-5"
    >
      {children}
    </div>
  );
};

export default Column;
