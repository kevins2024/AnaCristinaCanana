function ComponentWrapper(props: ComponentWrapperProps) {
  // TypeScript is being difficult about style names/types so using
  // flex-direction instead of flexDirection is good here
  var styles: StyleType = {
    width: "80%",
    display: "flex",
    "flex-direction": props.direction ? props.direction : "row",
  };
  if (props.isCentered) {
    if (props.direction && props.direction == "column") {
      styles["align-items"] = "center";
    } else {
      styles["justify-content"] = "center";
    }
  }
  return <div style={styles}>{props.child}</div>;
}

type StyleType = {
  width: string;
  display: string;
  "flex-direction": string;
  "align-items"?: string;
  "justify-content"?: string;
};

type ComponentWrapperProps = {
  direction?: string;
  isCentered?: boolean;
  child: JSX.Element;
};

export default ComponentWrapper;
