<template>
  <v-container id="mainContainer" fluid>
    <v-layout class="layout1">
      <v-flex class="first-flex" justify-center>
        <span class="d-block mt-2">ROCK</span>
        <span class="d-block mt-n5">PAPER</span>
        <span class="d-block mt-n5">SCISSORS</span>
      </v-flex>
      <v-flex class="second-flex">
        <span class="top-score d-block  mt-3 text-center">SCORE</span>
        <span class="bottom-score d-block mt-n3 text-center" v-bind="this.score">{{score}}</span>
      </v-flex>
    </v-layout>
    <div v-if="!haveUserChosen" class="middle-div">
    <v-layout class="layout2 text-center">
      <v-flex class="third-flex">
        <div class="img-wrapper-1 float-right  mr-md-0" @click="choice('paper')">
          <v-img class="img1" src="../assets/icon-paper.svg"></v-img>
        </div>
      </v-flex>
      <v-flex class="fifth-flex ">
        <div class="img-wrapper-2 ml-10 xs-ml-1" @click="choice('scissors')">
          <v-img class="img2" src="../assets/icon-scissors.svg"></v-img>
        </div>
      </v-flex>
    </v-layout>
    <v-layout class="layout3">
      <v-flex>
        <div class="img-wrapper-3" @click="choice('rock')">
          <v-img class="img3" src="../assets/icon-rock.svg"></v-img>
        </div>
      </v-flex>
        <div class="triangle-wrapper">
        <v-img class="triangle-image" src="../assets/bg-triangle.svg"></v-img>
      </div>
    </v-layout>
    </div>
    <div v-else>
      <Stage2/>
    </div>
    <rules-dialog/>
  </v-container>
</template>

<script>
  export default {
    name: 'Home',

    data: () => ({

    }),
    methods:{
      choice(payload){
        let computersChoice = ['paper', 'scissors', 'rock']
        let random = Math.floor(Math.random()*computersChoice.length)
        const paramObj = {payload1:payload, payload2:computersChoice[random]}
        this.$store.dispatch('Choose',paramObj)
        this.$store.dispatch('DetermineTheWinner')
      },
      openRulesModal(){
        this.$store.dispatch('openModal')
      }
    },
    computed:{
      haveUserChosen(){
        return this.$store.getters.playersChoise
      },
      score(){
        return this.$store.getters.score
      }
    }
  }
</script>

<style scoped>
#mainContainer{
  margin: 0px;
  padding:5% 0 0 0;
  height:100%;
  width:100%;
  background:radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))
}

.layout1{
  border: 2px solid rgb(126, 123, 123);
  width:50%;
  border-radius:10px;
  margin-left:auto;
  margin-right: auto
}

.first-flex span{
  margin-left:5%;
  font-size:30px;
  font-weight: bolder;
  color:white
}

.second-flex{
  background-color:white;
  margin: 3% 3% 3% 22vw;
  width: 0px !important;
  border-radius:10px;
}

.second-flex :nth-child(1){
  font-size:12px;
  letter-spacing: 2px;
  width:50px;
  margin-left:auto;
  margin-right:auto;
}

.second-flex :nth-child(2){
  font-size: 40px;
  width:50px;
  margin-top:-5%;
  margin-left:auto;
  margin-right:auto
}

.layout2{
  margin-top:7%;
}

.img1, .img2 , .img3{
  scale: 0.45;
}

.img1, .img2{
  margin-top:-10%
}

.img2{
  margin-left:3%;
}

.img-wrapper-1, .img-wrapper-2, .img-wrapper-3{
  background-color:white;
  height:150px;
  width:150px;
  border-radius: 100px;
  position:relative;
  z-index:1;
  box-shadow: inset 0px 4px 6px; 
  margin-top:0
}

.img-wrapper-1{
  border: 20px solid blue;
}

.img-wrapper-2{
  border: 20px solid yellow
}

.layout3{
  display:block
}

.layout3 .img-wrapper-3{
  border: 20px solid red;
  margin: 15px auto 0px auto
}

.rules-btn{
  border-radius: 10px;
  width:115px
}

.triangle-wrapper{
  width:200px;
  height:200px;
  margin-top:-18%;
  margin-left:42.5%
}

.triangle-image{
  scale: 1.2
}

.rules-wrapper{
  margin-top:auto
}

@media only screen and (max-width:1070px){
  .second-flex{
    margin:3% 3% 3% 15vw
  }

  .triangle-wrapper{
    margin-top: -22%;
    margin-left: 40.5%
  }

  .middle-div{
    margin-top:9%
  }
}

@media only screen and (max-width:930px){
  .triangle-wrapper{
    margin-left: 39%;
    margin-top:-24vw
  }
}

@media only screen and (max-width:810px){
  .triangle-wrapper{
    margin-top:-26%;
    margin-left:37.5%
  }

  .middle-div{
    margin-top:12%
  }
}

@media only screen and (max-width:710px){
  .triangle-wrapper{
    margin-top:-29%;
    margin-left:36%
  }
  
  .middle-div{
    margin-top:16%
  }

  .second-flex{
    margin: 3% 3% 3% 
  }
}

@media only screen and (max-width:670px){
  .triangle-wrapper{
    margin-top:-35%;
    margin-left:34.5%
  }
}

@media only screen and (max-width:585px){
  .triangle-wrapper{
    margin-top:-39%;
    margin-left:33%
  }

  .middle-div{
    margin-top:18%
  }

  .layout1{
    width:80%
  }
}

@media only screen and (max-width:495px){
  .triangle-wrapper{
    margin-left:29%;
    margin-top:-42%
  }

  .middle-div{
    margin-top:20%
  }
}

@media only screen and (max-width:460px){
  .triangle-wrapper{
    margin-top:-50%;
    margin-left:28%;
    margin-bottom:15%
  }
}

@media only screen and (max-width:390px){
  .triangle-wrapper{
    margin-left:24%;
    margin-top:-59%
  }
}
</style>

