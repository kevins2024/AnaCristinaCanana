import { CSSProperties } from "react";

function ComponentWrapper(props: ComponentWrapperProps) {
  var styles = {
    width: "80%",
    display: "flex",
    flexDirection: props.direction ? props.direction : "row",
  } as CSSProperties; // workaround/fix detailed here https://github.com/cssinjs/jss/issues/1344
  if (props.isCentered) {
    if (props.direction && props.direction == "column") {
      styles.alignItems = "center";
    } else {
      styles.justifyContent = "center";
    }
  }
  return <div style={styles}>{props.child}</div>;
}

type ComponentWrapperProps = {
  direction?: string;
  isCentered?: boolean;
  child: JSX.Element;
};

export default ComponentWrapper;
