<template>
  <Homepage_user/>
  <News :News ="News"/>
  <Currencies :Currencies ="Currencies"/>
</template>

<script>
  import Homepage_user from "@/components/Homepage_user.vue"
  import News from "@/components/News.vue"
  import Currencies from "@/components/Currencies.vue"
  export default{
    components: {
      Homepage_user,
      News,
      Currencies
    }
    ,
  data() {
    return {
      News: [],
      Currencies: [],
    }   
  },
  created(){
    this.News=[
    {
      id: 1,
      text: "stalo sa toto",
      day: "1.jula"
    },
    {
      id: 2,
      text: "toto sa nestalo",
      day: "8.decembra"
    },
    {
      id: 3,
      text: "aj toto sa stalo",
      day: "9.augusta"
    }
    ],
    this.Currencies=[
    {
      id: 1,
      currency: "USD",
      amount: "1",
      value: "1.3"
    },
    {
      id: 2,
      currency: "CZK",
      amount: "1",
      value: "2.6"
    },
    {
      id: 3,
      currency: "EUR",
      amount: "1",
      value: "1.544"

    }
    ]

  },

}

</script>
