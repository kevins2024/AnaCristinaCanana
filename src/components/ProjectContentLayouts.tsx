import "./ProjectContentLayouts.css";

function ProjectContentLayoutOneTwo(props: LeftRightProps) {
  return (
    // Since this is a layout component I'm going to put the styling here
    <>
      <br />
      <div className="pcl-outer-flex">
        <div className="center-it-all pcl-one-two-left">{props.left}</div>
        <div className="center-it-all pcl-one-two-right">{props.right}</div>
      </div>
    </>
  );
}

function ProjectContentLayoutThreeColumns(props: ThreeColProps) {
  // todo copy/paste warning! this need refactored
  return (
    <>
      <br />
      <div className="pcl-outer-flex">
        <div className="pcl-three-columns">{props.left}</div>
        <div className="pcl-three-columns">{props.center}</div>
        <div className="pcl-three-columns">{props.right}</div>
      </div>
    </>
  );
}

function ProjectContentLayoutOneOne(props: LeftRightProps) {
  return (
    // Since this is a layout component I'm going to put the styling here
    <>
      <br />
      <div className="pcl-outer-flex pcl-outer-flex-space-around">
        <div className="pcl-one-one">{props.left}</div>
        <div className="pcl-one-one">{props.right}</div>
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
