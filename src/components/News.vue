<template>
<div class="position-relative">
<div class="position-absolute bottom-30 end-0"> 
<table class="table table-dark table-striped">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Datum</th>
      <th scope="col">Text</th>
    </tr>
  <tbody>
  <tr v-bind:key="New" v-for="New in News">
    <New :New="New"/>
  </tr>
  </tbody>
</table>
</div>
</div>
</template>

<script>
import New from './New.vue'

export default {
  name: 'News',
  props:{
    News: Array,
  },
  data() {
    return {
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSOpd3naVkFzyakD0I9WEN592jxYwTRKunyhsWaUOaUdPqT9ST-C7gG76p_EZyhDPc79M&usqp=CAU",
    }   
  },
  components:{
    New
  }
}

</script>

<style>
.news_img {
  width: auto;
  height: 150px;
  position: absolute;
  right: 0px;
  top: 8%;
}
.container2 {
  position: absolute;
  right: 0px;
  top: 25%;
  border-radius: 2px;
  margin: auto;
  width: 25%;
  border: 3px solid darkblue;
}

</style>
