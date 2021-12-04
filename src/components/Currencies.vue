<template>
<div class="position-relative">
<div class="position-absolute top-0 start-0">
<h5>Kurz Mnen</h5>
<input type="text" v-model="search" placeholder="Search title.."/>
<br>
<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Měna</th>
      <th scope="col">Množství</th>
      <th scope="col">Kurz</th>
    </tr>
  </thead>
  <tbody id ="myTable">
  <tr v-bind:key="Currency" v-for="Currency in filterCurrencies">
    <Currency :Currency="Currency"/>
  </tr>
  </tbody>
</table>
</div>
</div>
</template>


<script>

import Currency from './Currency.vue'

export default {
  name: 'Currencies',
  props:{
    Currencies: Array,
  },
  data() {
    return {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOpd3naVkFzyakD0I9WEN592jxYwTRKunyhsWaUOaUdPqT9ST-C7gG76p_EZyhDPc79M&usqp=CAU",
     search: ''
    }   
  },
  components:{
    Currency
  },
    computed:{
     filterCurrencies(){
       return this.Currencies.filter( Currencies => {
        console.log(Currencies.currency)
       return !this.search ||
        Currencies.currency.toLowerCase().indexOf(this.search.toLowerCase()) > -1
  })
  }
  }

}

</script>

<style>
.container3 {
  position: absolute;
  left: 0px;
  top: 25%;
  border-radius: 2px;
  padding:3px;
  margin: auto;
  width: 25%;
  border: 3px solid darkblue;
}



</style>
