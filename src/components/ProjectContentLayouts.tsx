import "./ProjectContentLayouts.css";
import SpacerVertical from "./SpacerVertical";

function ProjectContentLayoutOneTwo(props: LeftRightProps) {
  return (
    <>
      <SpacerVertical />
      <div className="pcl-outer-flex">
        <div className="center-it-all pcl-one-two-left">{props.left}</div>
        <div className="center-it-all pcl-one-two-right">{props.right}</div>
      </div>
    </>
  );
}

function ProjectContentLayoutThreeColumns(props: ThreeColProps) {
  return (
    <>
      <SpacerVertical />
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
    <>
      <SpacerVertical />
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
