<template>
	<div class="citacao">
		<slot name="autor" />
		<slot />
		<div class="fonte">
			<slot name="fonte" />
		</div>
	</div>
</template>

<script>
export default {
	activated() {
		console.log("activated");
	},
	deactivated() {
		console.log("deactivated");
	},
	created() {
		console.log("created");
	},
	destroyed() {
		console.log("destroyed");
	},
};
</script>

<style scoped>
.citacao {
	border: 1px solid #ddd;
	background-color: rgba(0, 0, 0, 0.1);
	padding: 25px;
	max-width: 450px;
	border-radius: 10px;
}
.fonte {
	float: right;
}
</style>
