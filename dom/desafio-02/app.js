new Vue({
	el: "#desafio",
	data: {
		valor: "",
	},
	methods: {
		alerta() {
			alert("Este é um alerta!");
		},
		changeValue(event) {
			this.valor = event.target.value;
		},
	},
});
