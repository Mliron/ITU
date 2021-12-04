<template>
<img src="https://play-lh.googleusercontent.com/aCyq5_tBBCKcD5f4yuiE3kaNc1HDbPLA7Tq7PoEqBk1RVODSqJQUYpB_ekCrW23qnhw" class="news_img" />
<div class="nav nav-pills nav-stacked anyClass">
<div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="overflow-auto" tabindex="0" v-bind:key="New" v-for="New in News">
  <New :New="New"/>
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
  right: 0%;
  top: 0%;
}
.anyClass {
  position: absolute;
  right: 0px;
  top: 20%;
  margin: auto;
  width: 25%;
  height: 70%;
  overflow-y: scroll;
}
.buttons {
  position: absolute;
  justify-content: center;
  align-items: center;
}

</style>
