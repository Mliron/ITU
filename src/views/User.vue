<template>
  <div class="container text-start fs-2">
    <div class="row">
      <div class="col">
        <scope class="fw-bold text-black">Profile picture:</scope>
        <img src="https://d2skuhm0vrry40.cloudfront.net/2021/articles/2021-04-01-14-58/2f0.png"
           style="max-width: 500px; width: auto;"
        >
      </div>
      <div class="col">
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
    </div>
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
          .get(this.cookies.get("server_host")+"users/"+this.username+".json")
          .then((response)=>{
            console.log(response.data);
            this.user_info = response.data;
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