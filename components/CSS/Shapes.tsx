export const Shapes = () => {
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
    <>
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
    </>
  );
};
