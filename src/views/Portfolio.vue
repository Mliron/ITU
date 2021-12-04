<template>
  <div class="portfolio">
    <div id="stocks" class="col">
      <table class="table">
        <thead>
          <tr>
            <label class="fw-bold" v-for="(str, i) in pogger_keys" :key="i">
              {{str}}
            </label>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tru_pog, i) in poggers" :key="i">
            <td>
                <One_stock
                  :onclick="POGGERS"
                  :data="tru_pog"/>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="details" class="col" v-if="selected.shown">
      {{selected.name}}<br>
      <div id="graph">
        <line-chart
          :min="null"
          :points="false"
          :curve="false"
          :data="noice"
        />
      </div><br>
      <div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Statistics</th>
              <th scope="col">Company info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name = eyyy</td>
              <td>CEO cheated</td>
            </tr>
          </tbody>
        </table>
      </div>
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
          console.log(data);
        }
      }
    }
  }
</script>

<style scoped>
  label { display: inline-block; width: 150px; font-size: 16px;}
  div {display: inline-block; margin: 10px;}
  .col {float: left; height: 800px; }
  .table { width: 700px; }
  #stocks {height: 800px; }
  #graph { width: 700px; padding: 0 10px;}
  #details {display: block; height: 800; border: 2px solid black; font-size: 32px;}
</style>
