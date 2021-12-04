<template>
  <div id="details" v-if="show" class="col justify-content-center">
      <div class="row">
        <div class="col justify-content-center">
          {{company_data.Name}}
        </div> 
        <div class="col justify-content-end">
          <span class="btn buy">Buy</span><input type="number" :value="quantity" min="0"/><span class="btn sell">Sell</span>
        </div>
      </div>
      <div id="graph" class="justify-content-center">
        <area-chart
          :min="null"
          :points="false"
          :curve="false"
          :data="company_data.data"
        />
      </div><br>
      <div>
        <ul class="nav nav-tabs nav-justified">
          <li class="nav-link fs-6" @click.prevent="set_active('company_information')">Company information</li>
          <li class="nav-link fs-6" @click.prevent="set_active('statistics')">Statistics</li>
          <li class="nav-link fs-6" @click.prevent="set_active('positions')">Positions</li>
          <li class="nav-link fs-6" @click.prevent="set_active('news')">News</li>
        </ul>
        <div class="tab-content py-2">
          <div class="tab-pane fade fs-6" :class="{'active show': is_active('company_information')}" id="company_information">
            <table style="text-align: left;">
              <tr><th class="tw-bold fs-5 px-2">Name:</th> <td>{{company_data.Name}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Symbol:</th> <td>{{company_data.Symbol}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Website:</th> <td><a class="text-black" :href="company_data.Website">{{company_data.Website}}</a></td></tr>
              <tr><th class="tw-bold fs-5 px-2">Industry:</th> <td>{{company_data.Industry}}</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Sector:</th> <td>{{company_data.Sector}}</td></tr>
            </table>
          </div>
          <div class="tab-pane fade fs-6" :class="{'active show': is_active('statistics')}" id="statistics">
            <table style="text-align: left;">
              <tr><th class="tw-bold fs-5 px-2">Market Cap:</th> <td>69 B</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Target price:</th> <td>420</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Revenue:</th> <td>666</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Rev/Shr:</th> <td>42.69</td></tr>
              <tr><th class="tw-bold fs-5 px-2">Div/Shr:</th> <td>21.48</td></tr>
            </table>
          </div>
          <div class="tab-pane fade fs-5" :class="{'active show': is_active('positions')}" id="positions">
            <div class="scrollable">
              <table class="table">
                <thead>
                  <tr>
                    <th span="col">ID</th>
                    <th span="col">Type</th>
                    <th span="col">Quantity</th>
                    <th span="col">Average price</th>
                    <th span="col">Current price</th>
                    <th span="col">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th span="col">Total</th>
                    <th span="col">Buy</th>
                    <th span="col">3.14</th>
                    <th span="col">10</th>
                    <th span="col">16</th>
                    <th span="col">420%</th>
                  </tr>
                  <tr v-for="pos in positions" :key="pos.ID">
                    <td span="col">{{pos.ID}}</td>
                    <td span="col">{{pos.Type}}</td>
                    <td span="col">{{pos.Quantity}}</td>
                    <td span="col">{{pos.Avg_pr}}</td>
                    <td span="col">{{pos.Cur_pr}}</td>
                    <td span="col">{{pos.Revenue}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="tab-pane fade fs-5" style="text-align: left;" :class="{'active show': is_active('news')}" id="news">
            <table>
              <tr><a class="ext_link text-black px-2 text-decoration-none" href="https://i.pinimg.com/originals/86/41/d6/8641d6de409bfd8271b647db30229e6e.jpg">What happens when you go for a midnight snack.</a></tr>
              <tr><a class="ext_link text-black px-2 text-decoration-none" href="https://www.forbes.com/uk/advisor/wp-content/uploads/2021/05/short-coated-tan-puppy-stockpack-unsplash-scaled.jpg">I'm tired.. Enjoy this puppy</a></tr>
              <tr><a class="ext_link text-black px-2 text-decoration-none" href="https://www.cbc.ca/kidscbc2/content/the_feed/feathered-tree-viper.jpg">This snake looks nice</a></tr>
              <tr><a class="ext_link text-black px-2 text-decoration-none" href="https://www.youtube.com/watch?v=-ujIz6nmvsE">Advanced warfare tactics</a></tr>
            </table>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  export default{
    props: ["company_data", "show"],
    data(){
      return{
        shown: false,
        active_item: "company_information",
        positions: [
          {
            ID      : "696969",
            Type    : "Buy",
            Quantity: "1.41",
            Avg_pr  : "12",
            Cur_pr  : "16",
            Revenue : "-24.19%"
          },
          {
            ID      : "420666",
            Type    : "Buy",
            Quantity: "1.73",
            Avg_pr  : "8",
            Cur_pr  : "16",
            Revenue : "500.181%"
          }
        ],
        quantity: 0,
      }
    },
    methods:{
      is_active (menuItem) {
        return this.active_item === menuItem
      },
      set_active (menuItem) {
        this.active_item = menuItem
      }
    },
    updated(){
      if(this.quantity < 0 ) this.quantity = 0;
      console.log("asd")
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
</style>