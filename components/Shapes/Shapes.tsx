import { useEffect, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

const Circle = () => {
  const styleSheet = `
  .circle {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: red;
 }`;

  return (
    <div id="circle">
      <style
        id="css"
        dangerouslySetInnerHTML={{
          __html: styleSheet
        }}
      />
      <div id="html">
        <div className="circle"></div>
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
    <div>
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
      <hr />
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
      <div style={{ visibility: "hidden", height: 0 }}>
        {activeComponent?.component || <></>}
      </div>
      <CodePreviewer html={code?.html} css={code?.css} />
      <hr />
      <CodeEditor code={code} setCode={setCode} />
      {components.map((x, idx) => (
        <button key={`btn-${idx}`} onClick={() => renderComponent(x)}>
          {x.name}
        </button>
      ))}
    </>
  );
}

export { Shapes };
export default Shapes;
