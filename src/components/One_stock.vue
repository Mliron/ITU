<!-- Author: xfabom01 (Matus Fabo) -->
<template>
  <div class="one_stock" @click.left="send_data()">
    <label id="info" v-for="(key, i) in row" :key="i">
      {{key}}
    </label>
  </div>
</template>

<script>


  export default{
    props: ["onclick", "data"],
    data(){
      return {
        row: this.data
      }
    },
    methods:{
      send_data(){
        this.onclick(this.data[1]);
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
    },
    mounted(){
      this.row[2] = this.row[2].toFixed(2);
      this.row[3] = this.row[3].toFixed(2);
    }
  }
</script>

<style scoped>
  table { border-collapse: collapse; }
  .one_stock:hover { background-color: #666; }
  .one_stock:hover label { color: #fff; }
  label { display: inline-block; width: 150px; font-size: 16px;}
</style>