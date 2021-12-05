<!-- Author: xfabom01 (Matus Fabo) -->
<template>
  <div class="container-fluid position-fixed">
    <div class="row flex-nowrap">
      <div class="col-auto">
        <div id="navbar" class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
          <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li class="nav-item">
              <router-link
                v-for="route in routes"
                :key="route.path"
                :to="route.path"
                class="nav-link align-middle px-0"
              >
                <span class="px-3">{{route.name}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-start my-4">
        <div class="col-auto align-self-start">
          <router-view :username="username"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ["routes", "username", "themes"],
    data(){
      return{
        bg: "",
        fg: ""
      }
    },
    mounted(){
      this.bg = this.themes.default_blue;
      this.fg = this.themes.default_green;
    }
  }
</script>

<style scoped>
  #navbar{
    background-color: v-bind(bg);
    width: 100%;
    height: 100%;
    color: #fff;
  }
  
  #nav a.router-link-exact-active {
    color: #222;
    background-color: #5472d3;
  }
</style>