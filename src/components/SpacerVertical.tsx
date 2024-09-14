function SpacerVertical(props: SpacerProps) {
  const height = props.sizeRelativeToViewport || props.sizeInPixels || "3vh";
  return <div style={{ minHeight: height, width: "1px" }}></div>;
}

export default SpacerVertical;

type SpacerProps = {
  sizeRelativeToViewport?: string;
  sizeInPixels?: string;
};
