<template>
<img src="https://p12cdn4static.sharpschool.com/UserFiles/Servers/Server_1023780/Image/News.jpg" class="news_img" />
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
  width: 500px;
  height: 200px;
  position: absolute;
  right: 0%;
  top: 0%;
}
.anyClass {
  position: absolute;
  right: 0px;
  top: 25%;
  margin: auto;
  width: 25%;
  height: 65%;
  overflow-y: scroll;
}
.buttons {
  position: absolute;
  justify-content: center;
  align-items: center;
}

</style>
