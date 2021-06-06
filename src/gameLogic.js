
let moves = {
            1: 'rock',
            2: 'paper',
            3: 'scissors'
}

let result = {
    'rock': {
        'paper': 'Lose',
        'scissors': 'Win'
    },
    'paper': {
        'rock': 'Win',
        'scissors': 'Lose'
    },
    'scissors': {
        'rock': 'Lose',
        'paper': 'Win'
    }
}
function botChooseMove() {
    let ranNum = Math.floor(Math.random() * 3 + 1);
    //console.log(moves[ranNum]);
    //document.getElementById(moves[ranNum]).classList.add('ai-move');
    return moves[ranNum];
}


function playMove(move, helpers) {
    let botMove = botChooseMove()

    if (move === botMove) {
        helpers.changeState('TIE')
	helpers.changeBotColor(botMove)
	console.log("This works")
	return 
    }

    helpers.changeBotColor(botMove)
    switch (botMove){    
	case "rock":
	    helpers.changeState(result.rock[move])
	    break;
	case "paper":
	    helpers.changeState(result.paper[move])
	    break;
	case "scissors":
	    helpers.changeState(result.scissors[move])
	    break;
	default:
	    console.log("Invalid move")
    }
}
export default playMove;
