<template>
  <div class="user" align="acc">
    <h3 align="center">Uzivatel: {{username}} </h3>
    <img v-bind:src="img" class="acc">
  </div>
</template>

<script>

export default {
  name: 'Homepage_user',
  data() {
    return {
      username : "Jozko",
      img: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Gnome-stock_person.svg"
    }   
  }

}
</script>

<style>
.acc{
  position: absolute;
  top: 0px;
  right: 0px;
}
.user {
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 0px;
  border-radius: 0px;
  margin: auto;
  width: 20%;
  border: 3px solid steelblue;
}

</style>
