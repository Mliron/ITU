<template>
  <div class="portfolio row d-flex">
    <div id="stocks" class="col fs-2">
      <div class="scrollable" style="max-height: 800px;">
        <List
          :col_names="columns"
          :rows="company_data"
          :onclick="detail_work"
        />
      </div>
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
        columns: ["Symbol", "Buy", "Sell"],
        company_data:[
        ],
        selected:{
          details : {},
          shown   : false
        }
      }
    },
    methods:{
      detail_work(data){
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
          .get(this.cookies["server_host"]-"data.json")
          .then((response)=>{
            console.log(response.data);
            this.company_data = response.data;
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
      return {cookies}
    }
  }
</script>

<style scoped>
  div {display: inline-block;}
  .scrollable { overflow-x: hidden; overflow-y: auto; }
  .col {float: left; height: auto; }
  #stocks {height: 1000px; }
</style>
