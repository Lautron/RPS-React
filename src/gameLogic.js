
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


function playMove(move, changeState) {
    let botMove = botChooseMove()

    if (move === botMove) {
        changeState('TIE')
	console.log("This works")
	return 
    }

    switch (botMove){    
	case "rock":
	    changeState(result.rock[move])
	    break;
	case "paper":
	    changeState(result.paper[move])
	    break;
	case "scissors":
	    changeState(result.scissors[move])
	    break;
	default:
	    console.log("Invalid move")
    }
}
export default playMove;
