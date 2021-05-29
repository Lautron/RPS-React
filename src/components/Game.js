import React, {useState} from "react";
import BotMoves from "./BotMoves.js";
import PlayerMoves from "./PlayerMoves.js";
import Scoreboard from "./Scoreboard.js";
import Status from "./Status.js";


let Game = () => {
    let [Scores, setScores] = useState({
	"bot": 0,
	"player": 0,
    });
    let [matchStatus, setMatchStatus] = useState({
	"text": "VS",
	"color": "white",
    })
    let changeStatus = result => {
	let statusCopy = {...matchStatus}
	statusCopy.text = result;
	switch (statusCopy.text) {
	    case "Lose":
		statusCopy.color = "red"
		break;
	    case "Win":
		statusCopy.color = "green"
		break;
	    default:
		statusCopy.color = "white"
	}
	setMatchStatus(statusCopy)
    }
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
	changeStatus(result)
	changeScores(result)
    }
    return (
	<div className="container">
	<div>
	    <Scoreboard scores={Scores}/>
	    <BotMoves/>
	    <Status data={matchStatus}/>
	    <PlayerMoves handler={changeState}/>
	</div>
	</div>
    )
}
export default Game
