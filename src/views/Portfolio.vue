<template>
  <div class="portfolio row d-flex">
    <div id="stocks" class="col fs-2">
      <List
        :col_names="columns"
        :rows="company_data"
        :onclick="detail_work"
      />
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

  export default{
    components: {
      "List"  : Stock_list,
      "Detail": Position_detail
    },
    data(){
      return{
        columns: ["Symbol", "Average Price", "Current Price", "Revenue"],
        company_data:[
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
          .get("http://localhost:6969/data.json")
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
    }
  }
</script>

<style scoped>
  div {display: inline-block;}
  .col {float: left; height: 800px; }
  #stocks {height: 1000px; }
</style>
