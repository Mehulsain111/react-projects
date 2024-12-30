export const Menu = ({ setcolor, setbrushwid, setbrushopac }) => {
  return (
    <>
      <div className="container  border rounded border-light text-center bg-black">
        <h1 className="fw-bolder">Paint app</h1>
        <div className="box rounded border-1 bg-body-secondary ">
          <div className=" fw-border pt-3 rounded border-info w-50 m-auto bg-info-subtle row">
            <div className="col">
              <label>Brush color :</label>
              <input
                type="color"
                onChange={(e) => {
                  setcolor(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label>Brush width </label>
              <input
                type="range"
                onChange={(e) => {
                  setbrushwid(e.target.value);
                }}
              />
            </div>
            <div className="col">
              <label>Brush Opacity </label>
              <input
                type="range"
                onChange={(e) => {
                  setbrushopac(e.target.value / 100);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
