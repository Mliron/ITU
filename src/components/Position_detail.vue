<template>
  <div id="details" v-if="show">
      {{company_data.Name}}<br>
      <div id="graph" class="justify-content-center">
        <line-chart
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
          <li class="nav-link fs-6" @click.prevent="set_active('Positions')">Positions</li>
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
          <div class="tab-pane fade" :class="{'active show': is_active('buy_sell')}" id="buy_sell">
            <button onclick="">Buy</button>
            <button onclick="">Sell</button>
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
</template>

<script>
  export default{
    props: ["company_data", "show"],
    data(){
      return{
        shown: false,
        active_item: "company_information"
      }
    },
    methods:{
      is_active (menuItem) {
        return this.active_item === menuItem
      },
      set_active (menuItem) {
        this.active_item = menuItem
      }
    }
  }
</script>

<style scoped>
  #details {display: block; height: 800; border: 2px solid black; font-size: 32px;}
  #graph { width: 700px; padding: 0 10px;}
</style>