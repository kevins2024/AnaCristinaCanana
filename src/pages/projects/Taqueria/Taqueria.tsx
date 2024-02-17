import ComponentWrapper from "../../../components/ComponentWrapper";
import Heading from "../../../components/Heading";
import "./Taqueria.css";

function Taqueria() {
  return (
    <div className="content-panel taqueria-layout">
      <ComponentWrapper
        direction="column"
        isCentered
        child={
          <Heading>
            Inner Component the component with longer text that needs to wrap
          </Heading>
        }
      />

      <div className="shared-component2">
        <div className="inner-component2">Inner Component</div>
        <div className="inner-component2">Inner Component</div>
        <div className="inner-component2">Inner Component</div>
        <div className="inner-component2">Inner Component</div>
      </div>
    </div>
  );
}

export default Taqueria;
