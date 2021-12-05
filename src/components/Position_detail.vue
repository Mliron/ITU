<!-- Author: xfabom01 (Matus Fabo) -->
<template>
  <div id="details" v-if="show" class="col justify-content-center">
      <div class="row">
        <div class="col justify-content-center">
          {{company_data.name}}
        </div> 
        <div class="col justify-content-end">
          <span @click="buy_sell('buy')" class="btn buy">Buy</span>
          <input type="number" v-model="quantity" min="0"/>
          <span @click="buy_sell('sell')" class="btn sell">Sell</span>
          <span @click="toggle_favorite()" class="fs-1 ms-3" id="fav">&#9734;</span>
        </div>
      </div>
      <div id="graph" class="justify-content-center">
        <area-chart
          :min="null"
          :points="false"
          :curve="false"
          :data="graph"
        />
      </div><br>
      <div>
        <ul class="nav nav-tabs nav-justified">
          <li class="nav-link fs-6" @click.prevent="set_active('statistics')">Statistics</li>
          <li class="nav-link fs-6" @click.prevent="set_active('company_information')">Company information</li>
          <li class="nav-link fs-6" @click.prevent="set_active('positions');">Positions</li>
        </ul>
        <div class="tab-content py-2">
          <div class="tab-pane fade fs-6" :class="{'active show': is_active('company_information')}" id="company_information">
            <table style="text-align: left;">
              <tr><th class="tw-bold fs-5 px-2">Name:</th> <td>{{instrumentModel.name}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Symbol:</th> <td>{{instrumentModel.symbol}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Website:</th> <td><a class="text-black" :href="instrumentModel.website">{{instrumentModel.website}}</a></td></tr>
              <tr><th class="tw-bold fs-5 px-2">Industry:</th> <td>{{instrumentModel.industry}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Sector:</th> <td>{{instrumentModel.sector}}</td></tr>
            </table>
          </div>
          <div class="tab-pane fade fs-6" :class="{'active show': is_active('statistics')}" id="statistics">
            <table style="text-align: left;">
              <tr><th class="tw-bold fs-5 px-2">Current Price:</th> <td>{{instrumentModel.currentPrice}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Closing Price:</th> <td>{{instrumentModel.closePrice}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Market Cap:</th>    <td>{{instrumentModel.marketCap}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">P/E:</th>           <td>{{instrumentModel.pe}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">EPS:</th>           <td>{{instrumentModel.eps}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Dividend:</th>      <td>{{instrumentModel.dividend}}</td></tr>
            </table>
          </div>
          <div class="tab-pane fade fs-5" :class="{'active show': is_active('positions')}" id="positions">
            <div class="scrollable">
              <table class="table">
                <thead>
                  <tr>
                    <th span="col">ID</th>
                    <th span="col">Type</th>
                    <th span="col">Price</th>
                    <th span="col">Quantity</th>
                  </tr>
                </thead>
                <tbody id="pos_list">
                  <tr v-for="pos in stuff" :key="pos.id">
                    <td span="col">{{pos.id}}</td>
                    <td span="col">{{pos.type}}</td>
                    <td span="col">{{pos.price}}</td>
                    <td span="col">{{pos.volume}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import { useCookies } from "@vueuse/integrations/useCookies"

  export default{
    props: ["company_data", "instrumentModel", "graph", "show"],
    data(){
      return{
        shown: false,
        active_item: "statistics",
        quantity: 0,
        current_detail: 0,
        stuff: [],
        shown_ID: -1
      }
    },
    methods:{
      is_active (menuItem) {
        return this.active_item === menuItem
      },
      set_active (menuItem) {
        this.active_item = menuItem
      },
      async buy_sell(type){
        const posModel ={
          type: type,
          price: this.instrumentModel.currentPrice,
          date: (new Date()).toISOString().split('T')[0],
          volume: this.quantity
        };
        console.log( {positionModel:posModel, instrumentModel:this.instrumentModel});
        axios
          .post(this.cookies.get("server_host")+"user/"+this.cookies.get("user_id")+"/position", {positionModel:posModel, instrumentModel:this.instrumentModel})
          .then((response)=>{
            console.log(response);
            this.update_stuff();
          })
          .catch((error)=>{console.log(error)})
      },
      async update_stuff(){
        axios
          .get(this.cookies.get("server_host")+"user/"+this.cookies.get("user_id")+"/position/"+this.company_data.id)
          .then((response)=>{
            console.log(response);
            this.stuff = response.data.positions;
          })
          .catch((error)=>{console.log(error)})

        axios
          .get(this.cookies.get("server_host")+"user/"+this.cookies.get("user_id")+"/favourite/"+this.instrumentModel.id)
          .then((response)=>{
            console.log(response);
            var tmp = document.getElementById("fav");
            tmp.innerHTML = "&#9733;";
            // tmp.style("color: yellow;");
          })
          .catch((error)=>{
            console.log(error);
            var tmp = document.getElementById("fav");
            tmp.innerHTML = "&#9734;";
            // tmp.style("color: black;");
          })
      },
      async toggle_favorite(){
        console.log("Adding to favorite");
        axios
          .post(this.cookies.get("server_host")+"user/"+this.cookies.get("user_id")+"/favourite/"+this.instrumentModel.id)
          .then((response)=>{console.log(response); this.update_stuff();})
          .catch((error)=>{console.log(error);})
      }
    },
    setup(){
      const cookies = useCookies();
      return {cookies}
    },
    updated(){
      if(this.shown_ID != this.company_data.id){
        this.update_stuff();
        this.shown_ID = this.company_data.id;
      }
    }
  }
</script>

<style scoped>
  #details {display: block; height: 800; border: 2px solid black; font-size: 32px;}
  #graph { width: 700px; padding: 0 10px;}
  .nav-link:hover {background-color: #DDF;}
  .ext_link:hover {margin: 10px;}
  .btn { border: 3px solid; border-radius: 15px; height: 30px; width: 75px; font-weight: bold;}
  .buy {background-color: green; border-color: darkgreen; color: lightgreen;}
  .sell {background-color: red; border-color: darkred; color: #FBB;}
  .btn:hover {color: white;}
  #details input {height: 30px; width: 50px; font-weight: normal; font-size: 16px; border-radius: 5px; border-style: solid;}
  .scrollable {overflow-y: auto; max-height: 320px;}
  #fav:hover { cursor: pointer;}
</style>


<!-- &#9734; &#9733; -->