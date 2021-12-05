<template><!-- Button to Open the Modal -->
<div class="popup" v-if="show">
  That would be very pog sir.
</div>
</template>

<script>
  export default{
    props: ["show"]
  }
</script>

<style scoped>
    .popup {
      position: absolute;
      /*width: 666px;*/
      /*height: 800px;*/
      left: 35%;
      right: 35%;
      top: 5%;
      bottom: 20%;
      border: 2px solid grey;
      border-radius: 10px;
      background-color: #676;
    }
</style>