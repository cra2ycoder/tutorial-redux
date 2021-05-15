import { useState, useMemo } from "react";

const styleSheetObject = {
  dimension: {
    width: "100px",
    height: "100px"
  },
  bgColor: {
    "background-color": "red"
  },
  radius: {
    "border-radius": "50%"
  }
};

export const Shapes = () => {
  const [className, setClassNames] = useState([]);

  const handleChange = (e) => {
    const { id, checked } = e.target;
    if (checked === true) {
      className.push(id);
    } else {
      className.splice(className.indexOf(id), 1);
    }
    setClassNames([...className]);
  };

  const css = useMemo(() => {
    const getStylesheet = (obj) => {
      let cssString = ``;
      Object.keys(obj).forEach((key) => {
        cssString += `${key}: ${obj[key]};\n`;
      });
      return cssString;
    };

    return className
      .map(
        (x) => `.${x} {
        ${getStylesheet(styleSheetObject[x])}
    }`
      )
      .join(" ");
  }, [className]);

  return (
    <>
      <div>{className.join(" ")}</div>
      <div>{css}</div>
      <div id="circle">
        <style
          id="css"
          dangerouslySetInnerHTML={{
            __html: css
          }}
        />
        <div id="html">
          <div className={className.join(" ")}></div>
        </div>
      </div>
      <div id="action-buttons" style={{ fontSize: "12px" }}>
        {Object.keys(styleSheetObject).map((key: string, idx: number) => {
          return (
            <label key={`button-${idx}`}>
              <input type="checkbox" id={key} onChange={handleChange} />
              {key}
            </label>
          );
        })}
      </div>
    </>
  );
};
