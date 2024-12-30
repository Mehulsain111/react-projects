export const Button = ({ btn }) => {
  return (
    <>
      <div className="container w-25 border p-3 rounded">
        {btn.map((btnn, index) => (
          <button key={index} className="btn btn-primary m-2  px-4 ">
            {btnn}
          </button>
        ))}

        <button className="btn bg-white w-100"> New Game</button>
      </div>
    </>
  );
};
