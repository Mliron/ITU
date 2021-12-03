<template>
  <div class="portfolio">
    <div>
      <table>
        <label v-for="(str, i) in pogger_keys" :key="i">
          {{str}}
        </label>
        <tr v-for="(tru_pog, i) in poggers" :key="i">
          <td>
              <One_stock
                :onclick="POGGERS"
                :data="tru_pog"/>
          </td>
        </tr>
      </table>
    </div>
    <div class="graph" v-if="selected.shown">
      {{selected.name}} <br>
        <line-chart
          :min="null"
          :points="false"
          :curve="false"
          :data="noice"
        />
    </div>
  </div>
</template>

<script>
  import One_stock from '@/components/One_stock.vue'  

  export default{
    components: {
      One_stock
    },
    data(){
      return{
        pogger_keys: ["Symbol", "Change Rate", "Buy", "Sell"],
        poggers:[
          {
            symbol : "Pog",
            change : "0.666%",
            buy    : "420",
            sell   : "666"
          },
          {
            symbol : "KEKW",
            change : "0.42%",
            buy    : "4542",
            sell   : "4569"
          },
          {
            symbol : "dogecoin",
            change : "-1.58%",
            buy    : "42069",
            sell   : "50000"
          },
        ],
        selected:{
          name : "",
          shown: false
        },
        noice:{
          "2015-04-05": 4
        }
      }
    },
    methods:{
      POGGERS(name, data){
        console.log(name);
        if(this.selected.name == name){
          this.selected.shown = !this.selected.shown;
        }
        else{
          this.selected.name = name; 
          this.selected.shown = true;
          this.noice = data;
        }
      }
    }
  }
</script>

<style scoped>
  table { border-collapse: collapse; }
  td { border: 1px solid black; }
  label { display: inline-block; width: 150px; font-size: 16px;}
  div { float: left; }
  .graph { width: 600px; height: 800px; border: 2px solid black; font-size: 32px; }
</style>
