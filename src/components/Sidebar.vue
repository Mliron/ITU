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
          <hr>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-auto align-self-center">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props: ["routes"],
    data(){
      return{
      }
    }
  }
</script>

<style scoped>
  #navbar{
    background-color: #01448A;
    width: 100%;
    height: 100%;
    color: #fff;
  }
</style>