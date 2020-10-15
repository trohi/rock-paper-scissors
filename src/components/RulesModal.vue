<template>
    <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="rules-btn float-right mr-16 mt-5"
          v-bind="attrs"
          v-on="on"
          dark
          outlined
        >
          Rules
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline  mb-5">
         <div class="rulesHeader">RULES</div> <v-spacer ></v-spacer><v-img class="closeImg" src="../assets/icon-close.svg" @click="dialog = false"></v-img>
        </v-card-title>

        <v-card-text>
            <v-img class="img" src="../assets/image-rules.svg"></v-img>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    name:'Rules',
    data(){
        return {
            dialog:false
        }
    }
}
</script>

<style scoped>
.rules-btn{
  border-radius: 10px;
  width:115px
}

.img{
    scale:1;
    z-index:1
}

.closeImg{
    scale:0.2;
    cursor:pointer;
    max-width:100px;
    margin-left:auto
}

.closeImg:hover{
    scale:0.25;
    transition:linear 200ms
}

.v-card{
    border-radius:10px
}

.rulesHeader{
    font-size:30px;
    letter-spacing: -0.5px
}

@media only screen and (max-width:675px){
    .rules-btn{
        margin-top:10% !important;
        margin-right:37% !important;
    }
}

</style>
