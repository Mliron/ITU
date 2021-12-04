<template>
<h4 id="list-item-1">{{New.headline}}</h4>
  <p>{{New.text}}
  <button onclick="location.href='https://www.webnoviny.sk/vofinanciach/'" type="button" class="btn btn-link">viac</button>
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