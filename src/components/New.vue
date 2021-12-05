<!-- Author: xdreng01 (Vladimir Drengubiak) -->
<template>
<h4 id="list-item-1">{{New.title}}</h4>
  <p>{{New.text}}
 <a :href="New.link" class="btn btn-primary">viac</a>
  </p>
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