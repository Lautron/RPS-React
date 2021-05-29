import React from "react";

let Status = props => {
    return <p style={{"color": props.data.color}} className="versus">{props.data.text}</p>
}

export default Status
