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
  created(){
    this.News=[
    {
      headline: "PUTIN V AFRIKE",
      text: "stalo sa toto",
      day: "1.jula",
      link: "https://www.webnoviny.sk/vofinanciach/"
    },
    {
      headline: "ATOMOVKA V SEVERNEJ KOREI",
      text: "toto sa nestalo",
      day: "8.decembra",
      link: "https://www.webnoviny.sk/vofinanciach/"
    },
    {
      headline: "HITLER BOL VIDENI V CADCI!!!",
      text: "aj toto sa stalo",
      day: "9.augusta",
      link: "https://www.webnoviny.sk/vofinanciach/"
    },
    {
      headline: "DONALD TRUMP NAVSTIVIL SLOVENSKO",
      text: "ano nie",
      day: "9.augusta",
      link: "https://www.webnoviny.sk/vofinanciach/"
    },
    {
      headline: "ATOMOVKA V SEVERNEJ KOREI",
      text: "toto sa nestalo",
      day: "8.decembra",
      link: "https://www.webnoviny.sk/vofinanciach/"
    },
    {
      headline: "HITLER BOL VIDENI V CADCI!!!",
      text: "aj toto sa stalo",
      day: "9.augusta",
      link: "https://www.webnoviny.sk/vofinanciach/"
    },
    {
      headline: "DONALD TRUMP NAVSTIVIL SLOVENSKO",
      text: "ano nie",
      day: "9.augusta",
      link: "https://www.webnoviny.sk/vofinanciach/"
    },
    {
      headline: "ATOMOVKA V SEVERNEJ KOREI",
      text: "toto sa nestalo",
      day: "8.decembra",
      link: "https://www.webnoviny.sk/vofinanciach/"
    },
    {
      headline: "HITLER BOL VIDENI V CADCI!!!",
      text: "aj toto sa stalo",
      day: "9.augusta",
      link: "https://www.webnoviny.sk/vofinanciach/"
    },
    {
      headline: "DONALD TRUMP NAVSTIVIL SLOVENSKO",
      text: "ano nie",
      day: "9.augusta",
      link: "https://www.webnoviny.sk/vofinanciach/"
    },
    ],
    this.Currencies=[
    {
      currency: "USD",
      amount: "1",
      value: "1.3"
    },
    {
      currency: "CZK",
      amount: "1",
      value: "2.6"
    },
    {
      currency: "EUR",
      amount: "1",
      value: "1.544"

    },
    {
      currency: "EUR",
      amount: "1",
      value: "1.544"

    }
    ],
    this.Indexes =[
    {
      name: "DAX",
      price: "1023",
      value: "+3.33%"
    },
    {
      name: "EUROSTOX",
      price: "1402",
      value: "+0.99%"
    },
    {
      name: "CAC 40",
      price: "909",
      value: "+0.48%"

    },
    {
      name: "CC",
      price: "103",
      value: "+3.3%"
    },
    ],
    this.Calendar =[
    {
      flag: "https://flagpedia.net/data/flags/w1600/fr.png",
      country: "FR",
      text: "asdasdasd",
      date: "23 semptember"
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png",
      country: "USA",
      text: "asdasdasd",
      date: "13 semptember"
    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
      country: "CAN",
      text: "asdasdasd",
      date: "7 jula"

    },
    {
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png",
      country: "GER",
      text: "asdasdasd",
      date: "5 juna"
    },
    ] 

  },

}

</script>
