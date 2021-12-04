<template>
  <div class="portfolio row d-flex">
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
    <div class="col">
      <Detail
        :show="selected.shown"
        :company_data="selected.details"
      />
    </div>
  </div>
</template>

<script>
  import One_stock from '@/components/One_stock.vue'
  import Position_detail from '@/components/Position_detail.vue'
  import axios from 'axios'

  export default{
    components: {
      One_stock,
      "Detail" : Position_detail
    },
    data(){
      return{
        pogger_keys: ["Symbol", "Buy", "Sell"],
        poggers:[
        ],
        selected:{
          details : {},
          shown   : false
        },
        active_item: "company_information"
        //loading: true
      }
    },
    methods:{
      POGGERS(data){
        if(this.selected.details.Symbol === data.Symbol){
          this.selected.shown = !this.selected.shown;
        }
        else{
          this.selected.details = data; 
          this.selected.shown = true;
          console.log(this.selected.shown);
        }
      },
      async get_stonks(){
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
  .table { width: 550px; }
  #stocks {height: 1000px; }
</style>
