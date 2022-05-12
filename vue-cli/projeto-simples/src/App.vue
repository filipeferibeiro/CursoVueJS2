<template>
	<div id="app">
		{{ title }}
		<button @click="title += '#'">Alterar</button>
	</div>
</template>

<script>
export default {
	data: () => {
		return {
			title: "Teste Data usando Vuw JS!!",
		};
	},
};
</script>

<style scoped>
#app {
	background-color: chocolate;
	color: #fff;
}
</style>
