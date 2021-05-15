import { useSelector } from "react-redux";

const CodePreviewer = () => {
  const { code = {} } = useSelector((state) => state.liveCoderReducer);
  return (
    <>
      <style
        id="css"
        dangerouslySetInnerHTML={{
          __html: code?.css
        }}
      />
      <div id="html" dangerouslySetInnerHTML={{ __html: code?.html }} />
    </>
  );
};

export { CodePreviewer };
export default CodePreviewer;
