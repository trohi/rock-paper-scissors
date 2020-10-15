<template>
<v-container class="stage2-container">
    <v-layout >
        <div class="main-left">
            <h3 class="ml-11">YOU PICKED</h3>
            <div :class="computedPlayersClass">
                <v-img class="img1" :src="PlayersImgSrc"></v-img>
            </div>
        </div>
        <div class="mt-auto mb-auto text-center" id="buttonPlaceholder" v-if="gameStatus">
            <div v-if="gameWinner === 'user'">
                <h2 class="mt-n3">YOU WIN</h2>
            </div>
            <div v-else-if="gameWinner === 'comp'">
                <h2 class="mt-n3">YOU LOSE</h2>
            </div>
            <div v-else>
                <h2 class="mt-n3">TIE</h2>
            </div>
            <v-btn class="mt-5 red--text" raised width="150" @click="playAgain">PLAY AGAIN</v-btn>
        </div>
        <div class="main-right">
            <h3 class="md-mt-n16">THE HOUSE PICKED</h3>
            <div :class="computedComputersClass"  v-if="computersChoice">
                <v-img class="img1" :src="ComputersImgSrc"></v-img>
            </div>
            <div v-else class="img-wrapper-none">
                <div></div>
            </div>
        </div>
    </v-layout>
</v-container>
</template>

<script>
export default {
    name:'Stage2',
    data(){
        return{ 
        }
    },
    computed:{
        gameStatus(){
            return this.$store.getters.gameStatus
        },
        gameWinner(){
            return this.$store.getters.getWinner
        },
        usersChoice(){
            return this.$store.getters.playersChoise
        },
        computersChoice(){
            return this.$store.getters.computersChoice
        },
        PlayersImgSrc(){
           return require("../assets/icon-" + this.usersChoice + ".svg") 
        },
        ComputersImgSrc(){
            return require("../assets/icon-" + this.computersChoice + ".svg")
        },
        computedPlayersClass(){
            let className = 'default'
            if(this.usersChoice === 'paper'){
                className = 'img-wrapper-1'
            } else if( this.usersChoice === 'scissors'){
                className = 'img-wrapper-2'
            } else if( this.usersChoice === 'rock'){
                className = 'img-wrapper-3'
            }
            return className 
        },
        computedComputersClass(){
            let className = 'default'
            if(this.computersChoice === 'paper'){
                className = 'img-wrapper-1'
            } else if( this.computersChoice === 'scissors'){
                className = 'img-wrapper-2'
            } else if( this.computersChoice === 'rock'){
                className = 'img-wrapper-3'
            }
            return className 
        }
    },
    methods:{
        playAgain(){
            return this.$store.dispatch('PlayAgain')
        }
    }
    
}
</script>

<style>
.stage2-container{
    height:400px;
    display:flex;
}

.img-wrapper-1, .img-wrapper-2, .img-wrapper-3{
  background-color:white;
  height:220px;
  width:220px;
  border-radius: 120px;
  position:relative;
  z-index:1;
  box-shadow: inset 0px 4px 6px;
  margin-top:15%;
  }

.img-wrapper-none{
  background:linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  height:220px;
  width:220px;
  border-radius: 120px;
  position:relative;
  z-index:1;
  box-shadow: inset 0px 4px 6px;
  margin-top:15%;
}

.img-wrapper-1{
  border: 20px solid blue;
}

.img-wrapper-2{
  border: 20px solid yellow
}

.img-wrapper-3{
  border: 20px solid red;
}

.img1, .img2{
  scale:0.6 
}


h3, h2{
    color:white;
    letter-spacing: 2px;
    margin-top:15%
}

.main-left{
    margin-left:auto;
    margin-right:5%
}

#main-center{
    width:350px

}

.main-right{
    margin-right:auto;
    margin-left:5%
}

@media only screen and (max-width:675px){
   .img-wrapper-1, .img-wrapper-2, .img-wrapper-3{
       height:180px;
       width:180px;
       margin:0 0 10 0
   }

   .img-wrapper-none{
       height:180px;
       width:180px
   }

   #buttonPlaceholder{
       position: absolute;
       top:70%;
       left:35%
   }

   .main-left{
       margin-left:5%
   }
}
</style>
