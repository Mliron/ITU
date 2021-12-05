<!-- Author: xdreng01 (Vladimir Drengubiak) -->
<template>
<div class="tit_news">
<h5>Noviny</h5>
</div>
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
  top: 8%;
  margin: auto;
  width: 29%;
  height: 80%;
  overflow-y: scroll;
}
.buttons {
  position: absolute;
  justify-content: center;
  align-items: center;
}
.tit_news{
  position: absolute;
  right: 0px;
  top: 1%;
  background: #f4f4f4;
  padding: 10px 20px;
  margin: auto;
  width: 29%;
}

</style>
