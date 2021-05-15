import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import CodePreviewer from "./CodePreviewer";
import componentList from "../CSS/ComponentList";

function LiveCoder() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [code, setCode] = useState({
    css: ``,
    html: ``
  });

  const renderComponent = (activeComponent: any) => {
    setActiveComponent(activeComponent);
  };

  useEffect(() => {
    const css = document.querySelectorAll(
      `#${activeComponent?.parentId} #css`
    )[0]?.innerHTML;

    const html = document.querySelectorAll(
      `#${activeComponent?.parentId} #html`
    )[0]?.innerHTML;

    setCode({ html, css });
  }, [activeComponent]);

  return (
    <>
      {componentList.map((x, idx) => (
        <button key={`btn-${idx}`} onClick={() => renderComponent(x)}>
          {x.name}
        </button>
      ))}
      <hr />
      <div>{activeComponent?.component || <></>}</div>
      <CodePreviewer html={code?.html} css={code?.css} />
      <hr />
      <CodeEditor code={code} setCode={setCode} />
    </>
  );
}

export { LiveCoder };
export default LiveCoder;
