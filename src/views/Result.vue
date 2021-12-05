<!-- Author: xfabom01 (Matus Fabo) -->
<template>
  <Position_detail
    show="true"
    :graph="graph"
    :company_data="details"
    :instrumentModel="details"
  />
</template>


<script>
  import Position_detail from '@/components/Position_detail.vue'
  import axios from 'axios'
  import { useCookies } from "@vueuse/integrations/useCookies"

  export default{
    components:{
      Position_detail
    },
    data(){
      return{
        details: {},
        graph: {},
        shown_ID:-1
      }
    },
    methods:{
      async detail_work(){
        axios
          .get(this.cookies.get("server_host")+"instrument/"+this.$route.params.id)
          .then((response)=>{
            console.log(response.data);
            this.details = response.data;
            var tmp = {};
            this.details.prices.forEach((val)=>{tmp[val.x] = val.y;});
            this.graph = tmp;
          })
         .catch((error)=>{
            console.log(error);
          })
      },
    },
    setup(){
      const cookies = useCookies();
      return {cookies}
    },
    mounted(){
        this.detail_work();
    },
    updated(){
      if(this.$route.params.id != this.shown_ID){
        this.detail_work();
        this.shown_ID = this.$route.params.id;
      }
    }
  }
</script>

<!-- this.$route.params.id -->