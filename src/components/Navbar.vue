<template>
    <nav id="navbar" class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="col">
          <router-link class="fs-1 fw-bold text-decoration-normal" id="name" to="/homepage">Fio Broker</router-link>
        </div>
        <div class="col">
          <form class="d-flex bd-highlight">
            <input class="form-control" v-model="search" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search
            </button>
          </form>
            <div class="search">
              <div v-bind:key="item" v-for="item in items"> 
                <div class="col">
                  <h4>{{item.message}}</h4>
                </div>
              </div>
            </div>
          </div>
        <div class="col">
          <div class="fw-bold">Balance: {{balance}} EUR</div>
          <div class="fw-bold">Position Balance: {{balance}} EUR</div>
          <div class="fw-bold">Fiat Balance: {{balance}} EUR</div>
          <button>Deposit</button>
          <button>Withdraw</button>
        </div>
        <div class="col">
         <router-link to="/user" class="d-flex align-items-center text-black text-decoration-normal">
            <img src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-04-01-14-58/2f0.png" alt="hugenerd" width="40" height="40" class="rounded-circle">
            <span class="px-3 fs-4 fw-bold fst-normal">{{username}}</span>
            <span class="fs-4 fw-bold">Logout</span>
          </router-link>
        </div>
      </div>
    </nav>
</template>

<script>
 
  export default{
    props: ["balance", "username", "themes"],
    data(){
      return {
        bg : "",
        fg : "",
        search : "",
        items: [{ message: 'Foo' }, { message: 'Bar' }]
      }
    },
    mounted(){
      this.bg = this.themes.default_green;
      this.fg = this.themes.default_blue;
    }

}
</script>

<style scoped>
  #navbar{
    background-color: v-bind(bg);
  }
  #name{
    outline-color: black;
    outline-width: 2px;
    color: v-bind(fg);
  }
  .search {
  position: absolute;
  left: 26%;
  top: 33%;
  margin: auto;
  width: 20%;
  z-index: 100;
  height: 200%;
  opacity: 0.5;
  overflow-y: scroll;
  }
  .custom_button {
    width: 80%;
  }
</style> 