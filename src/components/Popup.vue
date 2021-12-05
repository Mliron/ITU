<template><!-- Button to Open the Modal -->
<div class="popup" v-if="show">
  <label class="fs-4 fw-bold">{{type}}</label><br>
  <input type="number" placeholder="Amount" v-model="amount" />
  <button @click="send()">{{type}}</button>
  <button @click="cancel()">Cancel</button>
</div>
</template>

<script>
  export default{
    props: ["show", "type", "onclick", "cancel"],
    data(){
      return{
        amount:0,
      }
    },
    methods:{
      send(){
        this.onclick(this.type, this.amount);
      }
    }
  }
</script>

<style scoped>
    .popup {
      position: absolute;
      height: 100px;
      left: 35%;
      right: 35%;
      top: 5%;
      /*bottom: 20%;*/
      border: 2px solid grey;
      border-radius: 10px;
      background-color: #676;
    }
    input{
      width: 50%;
    }
</style>