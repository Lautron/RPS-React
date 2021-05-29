import React from "react";

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
	<Score name="Bot" points={props.scores.bot} />
	<Score name="Player" points={props.scores.player} />
    </div>
    )
}

export default Scoreboard
