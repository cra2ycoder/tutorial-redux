import { useState } from "react";
import CodeEditor from "./CodeEditor";
import componentList from "../CSS/ComponentList";

function LiveCoder() {
  const [activeComponent, setActiveComponent] = useState(null);

  const renderComponent = (activeComponent: any) => {
    setActiveComponent(activeComponent);
  };

  return (
    <>
      {componentList.map((x, idx) => (
        <button key={`btn-${idx}`} onClick={() => renderComponent(x)}>
          {x.name}
        </button>
      ))}
      <hr />
      <div>{activeComponent?.component || <></>}</div>
      <hr />
      <CodeEditor />
    </>
  );
}

export { LiveCoder };
export default LiveCoder;
