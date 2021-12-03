<template>
  <div id="example">
  <form class="form">
      <label for="name">Uživatelské jméno: </label><br>
      <input type="text" id="fname" name="fname"><br>
      <label for="pwd">Heslo:</label><br>
    <input type="password" id="pwd" name="pwd"><br><br>
    <input type="submit" value="Přihlásit se">
  </form>
  </div>
</template>

<script>

export default {
  name: 'Login',

}

</script>

<style>

.form{ 
   width: 100%;
   padding: 12px 20px;
   margin: 8px 0;
   font-size: 20px;
   box-sizing: border-box;
   text-align: center;
 }
 input[type=submit]{
  background-color:DarkBlue;
  border: none;
  font-size: 20px;
    color: white;
    padding: 16px 32px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
 }
 input[type=text],[type=password]{
    padding: 8px 16px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
    font-size: 20px;
    border: 3px solid #555;
 }
 label{
  border: none;
  font-size: 20px;
    color: black;
    text-decoration: none;
    margin: 4px 2px;

 }
</style>
