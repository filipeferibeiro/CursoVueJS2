<template>
	<div id="contadores">
		<h1>Contadores</h1>
		<app-contador v-for="c in 5" :key="c" />
	</div>
</template>

<script>
import ContadorComp from "./ContadorComp.vue";

export default {
	components: {
		"app-contador": ContadorComp,
	},
};
</script>

<style></style>
