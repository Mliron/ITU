<!-- Author: xfabom01 (Matus Fabo) -->

<template>
  <div class="portfolio row d-flex">
    <div id="stocks" class="col fs-2">
      <List
        :col_names="columns"
        :rows="rows"
        :onclick="detail_work"
      />
    </div>
    <div class="col">
      <Detail
        :show="selected.shown"
        :graph="graph"
        :instrumentModel="selected.details.instrumentModel"
        :company_data="selected.details"
      />
    </div>
  </div>
</template>

<script>
  import Stock_list from '@/components/Stock_list.vue'
  import Position_detail from '@/components/Position_detail.vue'
  import axios from 'axios'
  import { useCookies } from "@vueuse/integrations/useCookies"

  export default{
    components: {
      "List"  : Stock_list,
      "Detail": Position_detail
    },
    data(){
      return{
        columns: ["ID", "Symbol", "Average Price", "Current Price"],
        rows:[],
        company_data:[],
        graph:{},
        selected:{
          details : {},
          shown   : false
        },
        active_item: "company_information"
        //loading: true
      }
    },
    methods:{
      detail_work(data){
        this.company_data.forEach((val, index)=>{if(val.symbol === data) this.selected.details = this.company_data[index]});
        var tmp = {};
        this.selected.details.instrumentModel.prices.forEach((val)=>{tmp[val.x] = val.y;});
        this.graph = tmp;
        this.selected.shown = true;
      },
      async get_stonks(){
        console.log(this.cookies.get("server_host"));
        axios
          .get(this.cookies.get("server_host")+"user/"+this.cookies.get("user_id"))
          .then((response)=>{
            console.log(response.data.positions);
            this.company_data = response.data.positions;
            this.rows = [];
            this.company_data.forEach((val)=>{this.rows.push([val.id, val.symbol, val.averagePrice, val.instrumentModel.currentPrice])});
          })
         .catch((error)=>{
            console.log(error);
          })
      }
    },
    mounted(){
      this.get_stonks();
    },
    setup(){
      const cookies = useCookies();
      return { cookies }
    }
  }
</script>

<style scoped>
  div {display: inline-block;}
  .col {float: left; height: 800px; }
  #stocks {height: 1000px; }
</style>
