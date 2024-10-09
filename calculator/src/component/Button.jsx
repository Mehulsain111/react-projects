export default function Button({ clicked, nums }) {
  return (
    <div className="row">
      {nums.map((number, index) => (
        <button key={index} onClick={() => clicked(number)} className="btn">
          {number}
        </button>
      ))}
    </div>
  );
}
