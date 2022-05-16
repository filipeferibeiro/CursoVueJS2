import Vue from "vue";

export default new Vue({
	methods: {
		setUsuario(usuario) {
			this.$emit("setUsuario", usuario);
		},
		onSetUsuario(callback) {
			this.$on("setUsuario", callback);
		},
	},
});
