<template>
  <div class="one_stock" @click.left="onclick(data.symbol)">
    <label v-for="(key, i) in data" :key="i">
      {{key}}
    </label>
  </div>
</template>

<script>
  export default{
    props: ["onclick", "data"],
    data(){
      return {
      }
    }
  }
</script>

<style scoped>
  table { border-collapse: collapse; }
  .one_stock { padding: 0.2em 0; }
  .one_stock:hover { background-color: #666; }
  .one_stock:hover label { color: #fff; }
  label { display: inline-block; width: 150px; font-size: 16px;}
</style>