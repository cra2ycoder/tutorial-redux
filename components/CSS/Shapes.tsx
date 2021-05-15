import { useState, useMemo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCode } from "../../redux/livecoder";

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
  const [className, setClassName] = useState([]);
  const actionDispatch = useDispatch();

  const getCSSString = () => {
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
  };

  const handleChange = (e) => {
    const { id, checked } = e.target;

    if (checked === true) {
      className.push(id);
    } else {
      className.splice(className.indexOf(id), 1);
    }
    setClassName([...className]);
  };

  const css = useMemo(() => {
    return getCSSString();
  }, [className]);

  useEffect(() => {
    const html = document.querySelectorAll(`#shapes #html`)[0]?.innerHTML;
    const css = document.querySelectorAll(`#shapes #css`)[0]?.innerHTML;
    actionDispatch(setCode({ html, css }));
  }, [className]);

  return (
    <>
      <div id="shapes">
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
