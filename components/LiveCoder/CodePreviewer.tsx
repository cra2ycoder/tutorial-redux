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

export { CodePreviewer };
export default CodePreviewer;
