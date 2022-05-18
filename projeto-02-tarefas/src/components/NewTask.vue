<template>
	<div class="new-task">
		<input
			type="text"
			v-model="name"
			@keydown.enter="add"
			class="form-element"
			placeholder="Nova tarefa?"
		/>
		<button class="form-element" @click="add">+</button>
	</div>
</template>

<script>
export default {
	data: () => ({
		name: "",
	}),
	methods: {
		add() {
			this.$emit("taskAdded", { name: this.name });
			this.name = "";
		},
	},
};
</script>

<style>
.new-task {
	margin: 35px;
}
.form-element {
	outline: none;
	font-size: 2rem;
	border: 1px solid #fff;
	padding: 5px 10px 8px;
	color: #fff;
}
input.form-element {
	width: 500px;
	background: #fff2;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
}
button.form-element {
	border-left: node;
	background-color: #2196f3;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
}
</style>
