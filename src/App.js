import './App.css';
import React, {useState} from "react";
import playMove from "./gameLogic.js";

let Move = props => {
    return <button onClick={() => playMove(props.type, props.handler)} className={props.className} >{props.type}</button>
}

let BotMoves = props => {
    return (
	<div className="move-container">
	    <Move className="move-icon-ai" type="R" />
	    <Move className="move-icon-ai" type="P"/>
	    <Move className="move-icon-ai" type="S"/>
	</div>
    )
}

let PlayerMoves = props => {
    return (
	<div className="move-container">
	    <Move handler={props.handler} className="move-icon" type="rock"/>
	    <Move handler={props.handler} className="move-icon" type="paper"/>
	    <Move handler={props.handler} className="move-icon" type="scissors"/>
	</div>
    )
}

let Score = props => {
    return (
    <div className="col">
	<span>{props.name}</span>
	<span id="ai-score">{props.points}</span>
    </div>
    )
}

let Scoreboard = props => {
    return (
    <div className="scoreboard">
	<Score name="Bot" points={props.botScore} />
	<Score name="Player" points={props.playerScore} />
    </div>
    )
}

let Status = props => {
    return <p id="move-result" className="versus">{props.result}</p>
}

let Game = () => {
    let [Scores, setScores] = useState({
	"bot": 0,
	"player": 0,
    });
    let [matchStatus, setMatchStatus] = useState("VS")

    let changeScores = (result) => {
	if (result === "TIE") {
	    return
	}

	let scoresCopy = {...Scores}
	if (result === "Lose") {
	    scoresCopy.bot += 1
	}
	else {
	    scoresCopy.player += 1
	}
	setScores(scoresCopy)
    }
    let changeState = (result) =>{
	console.log(result)
	setMatchStatus(result)
	changeScores(result)
    }
    return (
	<div className="container">
	<div>
	    <Scoreboard scores={Scores}/>
	    <BotMoves/>
	    <Status result={matchStatus}/>
	    <PlayerMoves handler={changeState}/>
	</div>
	</div>
    )
}
function App() {
  return <Game />;
}

export default App;
