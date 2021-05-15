import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";

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

export { CodeEditor };
export default CodeEditor;
