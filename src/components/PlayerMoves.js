import React from "react";
import playMove from "../gameLogic.js"

let PlayerMoves = props => {
    return (
	<div className="move-container">
	    <button onClick={() => playMove("rock", props.handler)} className="move-icon" >R</button>
	    <button onClick={() => playMove("paper", props.handler)} className="move-icon" >P</button>
	    <button onClick={() => playMove("scissors", props.handler)} className="move-icon" >S</button>
	</div>
    )
}

export default PlayerMoves
