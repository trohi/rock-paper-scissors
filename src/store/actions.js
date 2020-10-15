export default {
    Choose:({commit}, paramObj)=>{
        console.log(paramObj.payload1)
        commit('playersChoice', paramObj.payload1)
        setTimeout(()=>{
            console.log("DONE")
            commit('computersChoice', paramObj.payload2)
        }, 2000)
    },

    PlayAgain:({commit}) =>{
        commit('playersChoice', '')
        commit('computersChoice', '')
    },

    DetermineTheWinner:({commit})=>{
        console.log("deremined the winner action has been called")
        commit('changeGameStatus', false)
        setTimeout(()=>{
            commit('calculateTheWinner')
            commit('changeGameStatus', true)
        }, 2200)
    }
}