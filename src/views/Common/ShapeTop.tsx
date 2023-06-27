type ShapeTopPropsType = {
  bgColor: string,
  fillColor: string,
  height: number,
};

const ShapeTop = ({ bgColor, fillColor, height }: ShapeTopPropsType): JSX.Element => {
  return (
    <div className="shape-top" style={{ backgroundColor: bgColor }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height={height}>
        <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" fill={fillColor}></path>
      </svg>
    </div>
  );
};

export default ShapeTop;