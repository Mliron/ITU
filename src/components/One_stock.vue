<template>
  <div class="one_stock" @click.left="send_data()">
    <label v-for="(key, i) in data" :key="i">
      {{key}}
    </label>
  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    props: ["onclick", "data"],
    data(){
      return {
      }
    },
    methods:{
      send_data(){
        axios
          .get("http://localhost:6969/"+this.data.symbol+".json")
          .then((response)=>{
            console.log("Got '"+this.data.symbol+"' data!");

            this.onclick(response.data.Name, response.data.data);
          })
         .catch((error)=>{
            console.log(error);
          })
      },
      send_random_data(){
        var start = Math.floor(Math.random()*(301)+100);
        for(var j = 1; j <= 12; j++){
          for (var i = 0; i < 31; i++) {
            start = Math.floor(Math.random()*(41)+(start-20));
            if(start < 1) start = -start;
            this.stock_data["2021-"+((j<10)?("0"):(""))+j.toString()+"-"+((i<10)?("0"):(""))+i.toString()] = start;
          }
        }
        this.onclick(this.data.symbol, this.stock_data);
      }
    }
  }
</script>

<style scoped>
  table { border-collapse: collapse; }
  .one_stock { padding: 0.2em 0; }
  .one_stock:hover { background-color: #666; }
  .one_stock:hover label { color: #fff; }
  label { display: inline-block; width: 150px; font-size: 16px;}
</style>