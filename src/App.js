import './App.css';
import React, {useState} from "react";

let move = props => {
    return <button onClick={props.playMove}>{props.icon}</button>
}

let Game = () => {
    //Status
    //	scores
    let [playerScore, setPlayerScore] = useState(0);
    let [botScore, setBotScore] = useState(0);
    //	status
    let [matchStatus, setMatchStatus] = useState("VS")

    //Scoreboard
    <Scoreboard playerPoints={playerScore} botPoints={botScore} />

    //bot moves
    <botMoves />
    //Status
    <Status/>
    //Player moves
    <playerMoves />
}
function App() {
  return <Game />;
}

export default App;
