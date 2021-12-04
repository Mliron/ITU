<template>
    <th scope="row">{{Currency.id}}</th>
    <td>{{Currency.currency}}</td>	
    <td>{{Currency.amount}}</td>
    <td>{{Currency.value}}</td>
    
</template>
<script>
export default {
	name: "Currency",
	props: {
		Currency:Object
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