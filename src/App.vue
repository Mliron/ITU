<template>
  <img src="fio.bmp" class="center">
  <h1 align="center" class="title" >Přihlášení do aplikace Fio Broker</h1>
  <div>
    <Form/>
  </div>
</template>

<script>
import Login from './components/Login'
export default {
  name: 'App',
  components: {
    Login
  }
}

</script>

<style>

button {
  cursor: pointer;
  display: inline-block;
  background: CornflowerBlue;
  font-size: 18px;
  border: 0;
  padding: 1rem 1.5rem;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
 .title{

  background:linear-gradient(to right, white 35%, DarkBlue 35% 65%,white 65%);
  border: none;
  font-size: 20px;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;

 }

</style>
