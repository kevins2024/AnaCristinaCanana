function ProjectContentLayoutOneTwo(props: OneTwoProps) {
  return (
    // Since this is a layout component I'm going to put the styling here
    // todo need to make a width 80% wrapper somewhere.
    <div style={{ display: "flex", width: "80%" }}>
      <div style={{ width: "33%" }}>{props.left}</div>
      <div style={{ width: "67%" }}>{props.right}</div>
    </div>
  );
}

export default ProjectContentLayoutOneTwo;

type OneTwoProps = {
  left: JSX.Element;
  right: JSX.Element;
};

// todo abandoning this idea for now, will come back to it later
// export enum FlexSizes {
//   ONE_TWO,
//   ONE_ONE_ONE,
//   ONE_ONE,
// }

/* need:
x 1-2
1-1-1
1-1
grid 4 to 8 items?
*/
