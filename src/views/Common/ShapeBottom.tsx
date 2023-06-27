type ShapeBottomPropsType = {
  bgColor: string,
  fillColor: string,
  height: number,
};


const ShapeBottom = ({ bgColor, fillColor, height }: ShapeBottomPropsType): JSX.Element => {
  return (
    <div className="shape-bot" style={{ backgroundColor: bgColor, transform: 'rotateY(180deg)' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none" width="100%" height={height}>
        <path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z" fill={fillColor}></path>
      </svg>
    </div>
  );
};

export default ShapeBottom;