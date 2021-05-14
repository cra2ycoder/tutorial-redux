import { useEffect, useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

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
  useEffect(() => {
    const css = document.querySelectorAll("#css")[0].innerHTML;
    const html = document.querySelectorAll("#html")[0].innerHTML;
    setCode({ html, css });
  }, []);

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
  const shapeNames = ["square", "circle", "rectangle"];
  const [code, setCode] = useState({
    css: `.circle {
         width: 100px;
         height: 100px;
         border-radius: 50%;
         background-color: red;
    }`,
    html: `<div class="circle"></div>`
  });

  return (
    <>
      <CodePreviewer html={code?.html} css={code?.css} />
      <CodeEditor code={code} setCode={setCode} />
      {shapeNames.map((x) => (
        <button>{x}</button>
      ))}
    </>
  );
}

export { Shapes };
export default Shapes;
