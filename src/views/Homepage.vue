<!-- Author: xdreng01 (Vladimir Drengubiak) -->
<template>
  <Homepage_user/>
  <News :News ="News"/>
  <Currencies :Currencies ="Currencies"/>
  <Indexes :Indexes="Indexes"/>
  <Calendar :Calendar="Calendar"/>
</template>

<script>
  import News from "@/components/News.vue"
  import Currencies from "@/components/Currencies.vue"
  import Indexes from "@/components/Indexes.vue"
  import Calendar from "@/components/Calendar.vue"
  import axios from 'axios'
  import { useCookies } from "@vueuse/integrations/useCookies"

  export default{
    components: {
      News,
      Currencies,
      Indexes,
      Calendar
    }
    ,
  data() {
    return {
      News: [],
      Currencies: [],
      Indexes: [],
      Calendar : []
    }   
  },
  setup(){
      const cookies = useCookies();
      return { cookies }
    },
  created(){
      this.getNews()
      this.getCurrencies()
      this.getCalendar()
      this.getIndexes()
  }, 
   methods : {
    async getNews(){
      axios.get(this.cookies.get("server_host")+"news")
      .then((response)=>{
        console.log(response.data)
        this.News = response.data
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    async getCurrencies(){
      axios.get(this.cookies.get("server_host")+"exchange")
      .then((response)=>{
        this.Currencies = response.data
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    async getIndexes(){
      axios.get(this.cookies.get("server_host")+"instrument/type/INDEX")
      .then((response)=>{
        this.Indexes = response.data
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    async getCalendar(){
      axios.get(this.cookies.get("server_host")+"calendar")
      .then((response)=>{
        this.Calendar = response.data
      })
      .catch((error)=>{
        console.log(error)
      })
    },
  },

}

</script>
