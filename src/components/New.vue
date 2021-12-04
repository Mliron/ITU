<template>
    <th scope="row">{{New.id}}</th>
    <td>{{New.day}}</td>	
    <td>{{New.text}}</td>
</template>
<script>
export default {
	name: "New",
	props: {
		New:Object
	}
}
</script>

<style >
.new {
  background: #f4f4f4;
  margin: 5px;
  padding: 3px 6px;
  cursor: pointer;
}
</style>