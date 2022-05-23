export default {
	computed: {
		espacoPorVirgulaComputed() {
			return this.frase.split(" ").join(",");
		},
		countPalavraComputed() {
			return this.frase
				.split(" ")
				.map((v) => `${v} (${v.length})`)
				.join(" ");
		},
	},
};
