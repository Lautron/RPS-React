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
    let [botColors, setBotColors] = useState(
	    {
	    "rock": "",
	    "paper": "",
	    "scissors": "",
	    }
	)

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
    let changeBotColor = botMove => {
	let colorsCopy = {...botColors}
	for (let type in colorsCopy){
	    if (type == botMove){
		colorsCopy[type] = " ai-move"
	    }
	    else {
		colorsCopy[type] = ""
	    }
	}
	console.log(colorsCopy)
	setBotColors(colorsCopy)
    }
    let helpers = {
	"changeState": changeState,
	"changeBotColor": changeBotColor
    }
    return (
	<div className="container">
	<div>
	    <Scoreboard scores={Scores}/>
	    <BotMoves colors={botColors} />
	    <Status data={matchStatus}/>
	    <PlayerMoves handler={helpers}/>
	</div>
	</div>
    )
}
export default Game
