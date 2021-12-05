<template>
    <th scope="row">{{Index.symbol}}</th>
    <td>{{Index.name}}</td>
    <td>{{Index.currentPrice}}</td>  
</template>
<script>
export default {
	name: "Index",
	props: {
		Index:Object
	}
}
</script>

<style >
.currency {
  background: #f4f4f4;
  margin: 0px;
  padding: 3px 6px;
  cursor: pointer;
}
</style>