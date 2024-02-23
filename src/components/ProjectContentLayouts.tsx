// todo need to make a width 80% wrapper somewhere.
const outerFlexStyle = {
  display: "flex",
  width: "80%",
  justifyContent: "space-between",
};

function ProjectContentLayoutOneTwo(props: LeftRightProps) {
  return (
    // Since this is a layout component I'm going to put the styling here
    <>
      <br />
      <div style={outerFlexStyle}>
        <div style={{ width: "33%" }}>{props.left}</div>
        <div style={{ width: "67%" }}>{props.right}</div>
      </div>
    </>
  );
}

function ProjectContentLayoutThreeColumns(props: ThreeColProps) {
  // todo copy/paste warning! this need refactored
  return (
    <>
      <br />
      <div style={outerFlexStyle}>
        <div style={{ width: "33%" }}>{props.left}</div>
        <div style={{ width: "33%" }}>{props.center}</div>
        <div style={{ width: "33%" }}>{props.right}</div>
      </div>
    </>
  );
}

function ProjectContentLayoutOneOne(props: LeftRightProps) {
  return (
    // Since this is a layout component I'm going to put the styling here
    <>
      <br />
      <div style={{ ...outerFlexStyle, justifyContent: "space-around" }}>
        <div style={{ width: "40%", backgroundColor: "bisque" }}>
          {props.left}
        </div>
        <div style={{ width: "40%", backgroundColor: "thistle" }}>
          {props.right}
        </div>
      </div>
    </>
  );
}

export {
  ProjectContentLayoutOneTwo,
  ProjectContentLayoutThreeColumns,
  ProjectContentLayoutOneOne,
};

type LeftRightProps = {
  left: JSX.Element;
  right: JSX.Element;
};

interface ThreeColProps extends LeftRightProps {
  center: JSX.Element;
}

// todo abandoning this idea for now, will come back to it later
// export enum FlexSizes {
//   ONE_TWO,
//   ONE_ONE_ONE,
//   ONE_ONE,
// }

/* need:
x 1-2
x 1-1-1
1-1
grid 4 to 8 items?
*/

// todo another idea, have all my project components accept a styles prop
// and potentially a function that can wrap a component with conditional
// styles
