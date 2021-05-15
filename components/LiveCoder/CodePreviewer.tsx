import { useSelector } from "react-redux";

const CodePreviewer = () => {
  const { code: { css = "", html = "" } = {} } = useSelector(
    (state) => state.liveCoderReducer
  );

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

export { CodePreviewer };
export default CodePreviewer;
