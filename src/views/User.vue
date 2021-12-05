<!-- Author: xfabom01 (Matus Fabo) -->
<template>
  <div class="container text-start fs-2">
    <scope class="fw-bold text-black">Info:</scope>
    <table class="table fs-3">
      <tbody>
        <tr v-for="(value, key) in user_info" :key="key">
          <th scope="col">{{key}}</th>
          <td>{{value}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from "axios";
  import { useCookies } from "@vueuse/integrations/useCookies"

  export default {
    props: ["username"],
    data(){
      return{
        user_info:{
        }
      }
    },
    methods:{
      async load_user(){
        axios
          .get(this.cookies.get("server_host")+"user/"+this.cookies.get("user_id"))
          .then((response)=>{
            console.log(response.data);
            this.user_info = {
              Name:    response.data.name,
              Balance: response.data.positionsBalance+response.data.fiatBalance,
              "Position Balance": response.data.positionsBalance,
              "Fiat Balance": response.data.fiatBalance
            };
          })
          .catch((error)=>{
            console.log(error)
          });
      }
    },
    mounted(){
      this.load_user();
    },
    setup(){
      const cookies = useCookies();
      return { cookies }
    }
  }
</script>