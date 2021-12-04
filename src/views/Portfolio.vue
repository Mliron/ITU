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
  import axios from 'axios'

  export default{
    components: {
      One_stock
    },
    data(){
      return{
        pogger_keys: ["Symbol", "Change Rate", "Buy", "Sell"],
        poggers:[
        ],
        selected:{
          name : "",
          shown: false
        },
        noice:{
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
      },
      get_stonks(){
        axios
          .get("http://localhost:6969/data.json")
          .then((response)=>{
            console.log(response.data);
            this.poggers = response.data;
          })
         .catch((error)=>{
            console.log(error);
          })
      }
    },
    mounted(){
      this.get_stonks();
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
