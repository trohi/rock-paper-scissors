export default {
    playersChoice(state, payload){
       return state.playersChoise = payload
    },
    computersChoice(state, payload){
        return state.computersChoice = payload
    },
    calculateTheWinner(state){
        let comp = state.computersChoice
        let user = state.playersChoise
        let winner;
        let score = state.score
        console.log(state.playersChoise, state.computersChoice)
        
        if(comp === 'scissors' && user === 'paper'){
            winner = 'comp'
            score --
        } else if(comp === 'paper' && user === 'rock'){
            winner = 'comp'
            score --
        } else if(comp === 'rock' && user === 'scissors'){
            winner = 'comp'
            score --
        } else if(user === 'scissors' && comp === 'paper'){
            winner = 'user'
            score ++
        } else if(user === 'paper' && comp === 'rock'){
            winner = 'user'
            score ++
        } else if(user === 'rock' && comp === 'scissors'){
            winner = 'user'
            score ++
        } else if(user === comp){
            winner = 'tie'
            score +0
        }
        console.log(winner, score)
        
        return state.winner = winner, state.score = score
    },
    changeGameStatus: (state,payload)=>{
        return state.gameStatus = payload
    }
}