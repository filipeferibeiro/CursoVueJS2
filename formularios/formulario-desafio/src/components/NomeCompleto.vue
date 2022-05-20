<template>
	<div>
		<Rotulo nome="Nome">
			<input type="text" :value="value.nome" @input="mudarNome" />
		</Rotulo>
		<Rotulo nome="Sobrenome">
			<input
				type="text"
				:value="value.sobrenome"
				@input="mudarSobrenome"
			/>
		</Rotulo>
	</div>
</template>

<script>
import Rotulo from "./Rotulo.vue";
export default {
	props: {
		value: {
			type: Object,
			required: true,
		},
	},
	components: {
		Rotulo,
	},
	methods: {
		mudarNome(event) {
			this.$emit("input", { ...this.value, nome: event.target.value });
		},
		mudarSobrenome(event) {
			this.$emit("input", {
				...this.value,
				sobrenome: event.target.value,
			});
		},
	},
};
</script>

<style></style>
