import { useNavigate } from "react-router-dom";
import SpacerVertical from "./SpacerVertical";
import arrowLeft from "../assets/arrow-left.svg";
import "./PageBottom.css";

export default function PageBottom(props: PageBottomProps) {
  const { buttonUrl, buttonText } = props;
  const heightNum: number = props.heightRelativeToViewport || 35;
  const height = heightNum / 2;

  const navigate = useNavigate();

  function handleClick(url: string) {
    navigate(url);
  }

  return (
    <div className="page-bottom-content">
      <SpacerVertical sizeRelativeToViewport={height + "vh"} />
      {buttonUrl && buttonText && (
        <button
          className="page-bottom-button"
          onClick={() => handleClick(props.buttonUrl || "")}
        >
          <div className="page-bottom-button-inner">
            <img src={arrowLeft}></img>
            {buttonText}
          </div>
        </button>
      )}
      <SpacerVertical sizeRelativeToViewport={height + "vh"} />
    </div>
  );
}

type PageBottomProps = {
  buttonUrl?: string;
  buttonText?: string;
  heightRelativeToViewport?: number;
};
