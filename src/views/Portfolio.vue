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
        <ul class="nav nav-tabs nav-justified">
          <li class="nav-link fs-4" @click.prevent="set_active('company_information')">Statistics</li>
          <li class="nav-link fs-4" @click.prevent="set_active('buy_sell')">Buy / Sell</li>
          <li class="nav-link fs-4" @click.prevent="set_active('news')">News</li>
        </ul>
        <div class="tab-content py-3">
          <div class="tab-pane fade" :class="{'active show': is_active('company_information')}" id="company_information">
            <span class="tw-bold">Name:</span> VUT <br>
            <span class="tw-bold">Website:</span> <a class="text-black" href="http://bitly.com/98K8eH">https://www.vut.cz/</a><br>
            <span class="tw-bold">Industry:</span> Crushing people <br>
            <span class="tw-bold">Name:</span> Soul sucking <br>
          </div>
          <div class="tab-pane fade" :class="{'active show': is_active('buy_sell')}" id="buy_sell">
            <button onclick="buy()">Buy</button>
            <button onclick="sell()">Sell</button>
          </div>
          <div class="tab-pane fade" :class="{'active show': is_active('news')}" id="news">
            <ul>
              <li><a class="text-black" href="https://i.pinimg.com/originals/86/41/d6/8641d6de409bfd8271b647db30229e6e.jpg">What happens when you go for a midnight snack.</a></li>
              <li><a class="text-black" href="https://www.forbes.com/uk/advisor/wp-content/uploads/2021/05/short-coated-tan-puppy-stockpack-unsplash-scaled.jpg">I'm tired.. Enjoy this puppy</a></li>
              <li><a class="text-black" href="https://www.cbc.ca/kidscbc2/content/the_feed/feathered-tree-viper.jpg">This snake looks nice</a></li>
              <li><a class="text-black" href="https://www.youtube.com/watch?v=-ujIz6nmvsE">Advanced warfare tactics</a></li>
            </ul>
          </div>
        </div>
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
        },
        active_item: "company_information"
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
      },
      is_active (menuItem) {
        return this.active_item === menuItem
      },
      set_active (menuItem) {
        this.active_item = menuItem
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
