<!-- Author: xfabom01 (Matus Fabo) -->
<template>
    <nav id="navbar" class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <div class="col">
          <router-link class="fs-1 fw-bold text-decoration-normal" id="name" to="/homepage">Fio Broker</router-link>
        </div>
        <div class="col-6">
          <form class="d-flex bd-highlight px-3" style="width: 400px;">
            <input class="form-control" v-model="search" type="search" placeholder="Search" aria-label="Search" @click="toggle()">
            <button class="btn btn-outline-success" type="submit" @click.prevent="getInstrument()" @click="show()">Search</button>
          </form>
          <div class="search" v-if="active">
            <div v-bind:key="item" v-for="item in items"> 
              <div class="col">
                <a class="custom_button" @click="$router.push('/result/' + item.id);"> {{item.name}}</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="row">
            <div class="col">
              <div class="fw-bold">Balance: {{cookies.get('pos_bal')+cookies.get('fiat_bal')}}</div>
              <div class="fw-bold">Position Balance: {{cookies.get('pos_bal')}}</div>
              <div class="fw-bold">Fiat Balance: {{cookies.get('fiat_bal')}}</div>
            </div>
            <div class="col-2">
              <button style="width: 100px;" @click="popup_show=true;popup_type='deposit'">Deposit</button><br>
              <button style="width: 100px;" @click="popup_show=true;popup_type='withdraw'">Withdraw</button>
            </div>
          </div>
        </div>
        <div class="col">
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
               <router-link to="/user" class="d-flex align-items-center text-black text-decoration-normal">
                  <span class="px-3 fs-4 fw-bold fst-normal">{{cookies.get("username")}}</span>
                </router-link>
            </div>
            <div class="col">
              <button @click="logout()" class="fs-5 fw-bold">Logout</button>
            </div>
          </div>
        </div>
      </div>
      <Popup
        :show="popup_show"
        :onclick="money"
        :type="popup_type"
        :cancel="cancel"
      />
    </nav>
</template>

<script>
  import axios from 'axios'
  import { useCookies } from "@vueuse/integrations/useCookies";
  import Popup from "@/components/Popup.vue"

  export default{
    props: ["balance", "username", "themes"],
    components:{
      Popup
    },
    data(){
      return {
        bg : "",
        fg : "",
        search : "",
        items : Array,
        active : false,
        popup_show: false,
        popup_type: ""
      }
    },
    mounted(){
      this.bg = this.themes.default_green;
      this.fg = this.themes.default_blue;
      this.update();
    },
    setup() {
      const cookies = useCookies();
      return {
        cookies,
      };
    },
    methods:{
      async getInstrument(){
        axios.get(this.cookies.get("server_host")+"instrument/name/"+this.search)
        .then((response)=>{
          console.log(response.data)
          this.items = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
      },
      toggle(){
        this.active = !this.active
      },
      show(){
        this.active = true
      },
      async money(type, amount){
        const tmp = {
          type: type,
          amount: amount.toFixed(2)
        }
        console.log(tmp);
        axios
          .post(this.cookies.get("server_host")+"user/"+this.cookies.get("user_id")+"/depositWithdrawal", tmp)
          .then((response)=>{console.log(response); this.update()})
          .catch((error)=>{console.log(error);})
        this.popup_show = false;
      },
      async update(){
        axios
          .get(this.cookies.get("server_host")+"user/"+this.cookies.get("user_id"))
          .then((response)=>{
            console.log(response);
            this.cookies.set("pos_bal", response.data.positionsBalance);
            this.cookies.set("fiat_bal", response.data.fiatBalance);
          })
      },
      cancel(){
        this.popup_show = false;
      },
      logout(){
        console.log("Fuck off")
      }
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
  left: 12.3%;
  top: 62%;
  z-index: 100;
  margin: auto;
  width: 290px;
  height: 110%;
  background: white;
  border: 1px solid gray;
  }
  .custom_button {
    cursor: pointer;
    width: 80%;
  }
</style> 