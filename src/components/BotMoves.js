import React from "react";

let BotMoves = props => {
    return (
	<div className="move-container">
	    <button className={"move-icon-ai" + props.colors.rock}>R</button>
	    <button className={"move-icon-ai" + props.colors.paper} >P</button>
	    <button className={"move-icon-ai" + props.colors.scissors} >S</button>
	</div>
    )
}
export default BotMoves
