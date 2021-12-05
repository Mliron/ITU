<template>
  <table class="table table-hover my-0">
    <thead>
      <tr>
        <label class="fw-bold" v-for="str in col_names" :key="str">
          {{str}}
        </label>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, i) in rows" :key="i">
        <td>
            <One_stock
              :onclick="onclick"
              :data="row"
            />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
  import One_stock from '@/components/One_stock.vue'

  export default{
    components:{
      One_stock
    },
    props: ["col_names", "rows", "onclick"],
    data(){
      return{
      }
    },
    methods:{
      bridge(data){
        onclick(data);
      }
    }
  }
</script>

<style scoped>
  label { display: inline-block; width: 150px; font-size: 16px;}
  .table { width: 650px; }
</style>