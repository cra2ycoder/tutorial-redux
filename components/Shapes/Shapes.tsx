import { useEffect, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

const Circle = () => {
  const styleSheet = `
  .dimension {
    width: 100px;
    height: 100px;
  }
  .bg-color {
    background-color: red;
  }
  .radius {
    border-radius: 50%;
  }`.trim();

  return (
    <div id="circle">
      <style
        id="css"
        dangerouslySetInnerHTML={{
          __html: styleSheet
        }}
      />
      <div id="html">
        <div className="dimension bg-color radius"></div>
      </div>
    </div>
  );
};

const CodePreviewer = ({ html, css }) => {
  return (
    <>
      <style
        id="css"
        dangerouslySetInnerHTML={{
          __html: css
        }}
      />
      <div id="html" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

function CodeEditor({ code, setCode }: any) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
      }}
    >
      <div style={{ width: "50%" }}>
        <h5 style={{ margin: 0 }}>HTML</h5>
        <CodeMirror
          value={code?.html?.trim()}
          options={{
            mode: "xml",
            theme: "material",
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            code.html = value;
            setCode({ ...code });
          }}
          onChange={(editor, data, value) => {}}
        />
      </div>
      <div style={{ width: `calc(50% - 4px)` }}>
        <h5 style={{ margin: 0 }}>CSS</h5>
        <CodeMirror
          value={code?.css?.replace(/        /g, " ")}
          options={{
            mode: "css",
            theme: "material",
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            code.css = value;
            setCode({ ...code });
          }}
          onChange={(editor, data, value) => {}}
        />
      </div>
    </div>
  );
}

function Shapes() {
  const [activeComponent, setActiveComponent] = useState(null);
  const [code, setCode] = useState({
    css: ``,
    html: ``
  });

  const components = [
    {
      component: <Circle />,
      name: "Circle",
      parentId: "circle"
    }
  ];

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
      {components.map((x, idx) => (
        <button key={`btn-${idx}`} onClick={() => renderComponent(x)}>
          {x.name}
        </button>
      ))}
      <hr />
      <div style={{ visibility: "hidden", height: 0 }}>
        {activeComponent?.component || <></>}
      </div>
      <CodePreviewer html={code?.html} css={code?.css} />
      <hr />
      <CodeEditor code={code} setCode={setCode} />
    </>
  );
}

export { Shapes };
export default Shapes;
