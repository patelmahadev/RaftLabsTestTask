import color from "@/assets/color/color";
import * as React from "react";
import Svg, { Path } from "react-native-svg";

function TabPropertyDetail(props: any) {
  return (
    <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M12 2L2 8V22H9V15H15V22H22V8L12 2ZM12 4.5L18 8V20H14V13H10V20H6V8L12 4.5ZM9 10H15V12H9V10Z"
      fill={props.fillColor || color.white} 
    />
  </Svg>
  );
}

export default TabPropertyDetail;
