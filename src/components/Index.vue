<template>
    <th scope="row">{{Index.name}}</th>
    <td>{{Index.price}}</td>
    <td>{{Index.value}}</td>  
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