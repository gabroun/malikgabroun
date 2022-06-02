import { CSSProperties } from "react";

interface NavigationProps {
  isOpen: boolean;
  menuClicked: () => void;
  width: number;
  height: number;
  strokeWidth: number;
  rotate: number;
  color: string;
  borderRadius: number;
  animationDuration: number;
}

const Navigation = ({
  isOpen = false,
  height = 30,
  width = 36,
  strokeWidth = 2,
  animationDuration = 0.4,
  rotate = 0,
  color,
  borderRadius = 0,
  menuClicked,
}: NavigationProps) => {
  const halfHeight = `${parseInt(height.toString().replace("px", "")) / 2}px`,
    halfStrokeWidth = `-${strokeWidth / 2}px`;

  const getTransformValue = (
    isOpen: boolean,
    defaultPos: number,
    rotateVal: number
  ) =>
    `translate3d(0,${isOpen ? halfHeight : defaultPos},0) rotate(${
      isOpen ? `${rotateVal}deg` : "0"
    })`;

  const styles = {
    container: {
      width,
      height,
      position: "relative",
      transform: `rotate(${rotate}deg)`,
    },
    lineBase: {
      display: "block",
      height: `${strokeWidth}px`,
      width: "100%",
      background: color || "#000",
      transitionTimingFunction: "ease",
      transitionDuration: `${animationDuration}s`,
      borderRadius: `${borderRadius}px`,
      transformOrigin: "center",
      position: "absolute",
    },
    firstLine: {
      transform: getTransformValue(isOpen, 0, 45),
      marginTop: halfStrokeWidth,
    },
    secondLine: {
      transitionTimingFunction: "ease-out",
      transitionDuration: `${animationDuration / 4}s`,
      opacity: isOpen ? "0" : "1",
      top: halfHeight,
      marginTop: halfStrokeWidth,
    },
    thirdLine: {
      transform: getTransformValue(isOpen, height, -45),
      marginTop: halfStrokeWidth,
    },
  };

  return (
    <div
      style={styles.container as CSSProperties}
      onClick={menuClicked}
      onKeyDown={menuClicked}
      aria-hidden="true"
      className="menu-icon"
    >
      <span
        style={
          Object.assign({}, styles.lineBase, styles.firstLine) as CSSProperties
        }
      />
      <span
        style={
          Object.assign({}, styles.lineBase, styles.secondLine) as CSSProperties
        }
      />
      <span
        style={
          Object.assign({}, styles.lineBase, styles.thirdLine) as CSSProperties
        }
      />
    </div>
  );
};

export default Navigation;
