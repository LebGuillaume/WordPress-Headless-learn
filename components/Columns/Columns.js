const Columns = ({ stackOnMobile, children, txtColor, backgroundColor }) => {
  console.log(txtColor);
  const textColorStyle = txtColor ? { color: txtColor } : {};
  const backgroundColorStyle = backgroundColor
    ? { backgroundColor: backgroundColor }
    : {};
  return (
    <div
      className="my-10"
      style={{ ...textColorStyle, ...backgroundColorStyle }}
    >
      <div
        className={`max-w-5xl mx-auto ${stackOnMobile ? "block md:flex" : "flex"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Columns;
