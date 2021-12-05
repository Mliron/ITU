<template>
<div class="indexes">
<div class="tit">
<h5>Indexy</h5>
</div>
<input type="text" v-model="search" placeholder="Search Index."/>
<br>
<table class="table table-bordered">
  <thead class="thead-light">
    <tr>
      <th scope="col">Burza</th>
      <th scope="col">Meno</th>
      <th scope="col">Cena</th>
    </tr>
  </thead>
  <tbody id ="myTable">
  <tr v-bind:key="Index" v-for="Index in filterIndexes">
    <Index :Index="Index"/>
  </tr>
  </tbody>
</table>
</div>
</template>


<script>

import Index from './Index.vue'

export default {
  name: 'Indexes',
  props:{
    Indexes: Array,
  },
  data() {
    return {
     search: ''
    }   
  },
  components:{
    Index
  },
    computed:{
     filterIndexes(){
       return this.Indexes.filter( Indexes => {
       return !this.search ||
        Indexes.symbol.toLowerCase().indexOf(this.search.toLowerCase()) > -1
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

.indexes {
  position: absolute;
  left: 158px;
  top: 50%;
  margin: auto;
  width: 20%;
  height: 38%;
  overflow-y: scroll;
}
.tit {
  background: #f4f4f4;
  margin: 7px;
  padding: 10px 20px;
}


</style>
