<template>
<div class="calendar">
<div class="tit_cal">
<h5>Kalendar</h5>
</div>
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Stat</th>
      <th scope="col">Vlajka</th>
      <th scope="col">Udalost</th>
      <th scope="col">Datum</th>
    </tr>
  </thead>
  <tbody id ="myTable">
  <tr v-bind:key="Event" v-for="Event in Calendar">
    <Event :Event="Event"/>
  </tr>
  </tbody>
</table>
</div>
</template>

<script>
import Event from './Event.vue'

export default {
  name: 'Calendar',
  props:{
    Calendar: Array,
  },
  data() {
    return {
    }   
  },
  components:{
    Event
  }
}

</script>

<style>

.calendar {
  position: absolute;
  left:  28%;
  top: 0%;
  margin: auto;
  width: 42%;
  height: 90%;
  overflow-y: scroll;
}
.tit_cal{
  background: #f4f4f4;
  margin: 7px;
  padding: 10px 20px;
  cursor: pointer;
 
}

</style>
