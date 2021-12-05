<template>
<div class="user">
<div class="tit">
<h5>Měna</h5>
</div>
<input type="text" v-model="search" placeholder="Search Currency.."/>
<br>
<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th></th>
      <th scope="col">Rast</th>
      <th scope="col">Cena</th>
    </tr>
  </thead>
  <tbody id ="myTable">
  <tr v-bind:key="Currency" v-for="Currency in filterCurrencies">
    <Currency :Currency="Currency"/>
  </tr>
  </tbody>
</table>

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
     search: ''
    }   
  },
  components:{
    Currency
  },
  
  computed:{
    filterCurrencies(){
      return this.Currencies.filter( Currencies => {
      return !this.search ||
        Currencies.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1
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

.user {
  position: absolute;
  left: 158px;
  top: 0px;
  margin: auto;
  width: 20%;
  height: 45%;
  overflow-y: scroll;
}
.tit {
  background: #f4f4f4;
  margin: 7px;
  padding: 10px 20px;
  cursor: pointer;
}


</style>
