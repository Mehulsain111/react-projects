import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Game } from "./component/Game";

function App() {
  return (
    <div className="container text-center">
      <h1 className="text-center">welcome to rock, paper, Scissors game</h1>
      <Game />
    </div>
  );
}

export default App;
