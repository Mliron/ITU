<template>
    <th scope="row">{{Event.country}}</th>
    <td>
        <img class="img-responsive" :src="Event.flag" width="40" height="20">
    </td>
    <td>{{Event.text}}</td>
    <td>{{Event.date}}</td>  
</template>
<script>

export default {
    name: "Event",
    props: {
        Event:Object
    }
}
</script>

<style >
.currency {
  background: #f4f4f4;
  margin: 0px;
  padding: 3px 6px;
  cursor: pointer;
}
.img {
  position: absolute;
  margin: auto;
  width: 20%;
  left: 158px;
  top: 35%;
}
</style>