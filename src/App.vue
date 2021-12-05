<!-- Author: xfabom01 (Matus Fabo) -->
<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <Navbar
    :username="username"
    :themes="color_themes"
  />
  <div id="nav" class="row justify-content-start">
    <Sidebar
      :routes="router_paths"
      :username="username"
      :themes="color_themes"
    />
  </div>
</template>

<script>
  import Navbar from "@/components/Navbar.vue"
  import Sidebar from "@/components/Sidebar.vue"
  import { useCookies } from "@vueuse/integrations/useCookies"
  export default{
    components:{
      Navbar,
      Sidebar
    },
    data(){
      return{
        router_paths:[
          {
            name: "Login",
            path: "/"
          },
          {
            name: "Homepage",
            path: "/homepage"
          },
          {
            name: "Portfolio",
            path: "/portfolio"
          },
          {
            name: "Favorites",
            path: "/favorites"
          },
        ],
        color_themes:{
          default_green: "#8FBE00",
          default_blue : "#00448A"
        },
      }
    },
    setup(){
      const cookies = useCookies()
      cookies.set("username", "name");
      cookies.set("user_id", "1");
      cookies.set("server_host", "http://localhost:8000/");
      cookies.set("pos_bal", 0);
      cookies.set("fiat_bal", 0);
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 90%;
  height: 100%;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

</style>
