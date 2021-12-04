<template>
    <nav id="navbar" class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link class="fs-3 fw-bold text-decoration-none" id="name" to="/homepage">Fio Broker</router-link>
        <form class="d-flex bd-highlight">
          <input class="form-control" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <div></div><div></div><div></div><div></div>
        <div class="fw-bold">Balance: {{balance}} EUR</div>
        <div> 
         <router-link to="/user" class="d-flex align-items-center text-black">
            <img src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-04-01-14-58/2f0.png" alt="hugenerd" width="40" height="40" class="rounded-circle">
            <span class="px-3 text-decoration-none">{{username}}</span>
          </router-link>
        </div>
      </div>
    </nav>
</template>

<script>
  export default{
    props: ["username", "balance"]
  }
</script>

<style scoped>
  #navbar{
    background-color: #9DC12B;
  }
  #name{
    outline-color: black;
    outline-width: 2px;
    color: #01448A;
  }
</style> 