<template>
	<div class="auth-content">
		<div class="auth-modal">
			<img src="@/assets/logo.png" width="200" alt="logo" />
			<hr />
			<div class="auth-title">{{ showSignup ? "Cadastro" : "Login" }}</div>
			<input v-if="showSignup" type="text" v-model="user.name" placeholder="Nome" />
			<input type="email" v-model="user.email" name="email" placeholder="E-mail" />
			<input type="password" v-model="user.password" name="password" placeholder="Senha" />
			<input v-if="showSignup" type="password" v-model="user.confirmPassword" placeholder="Comfirme a Senha" />

			<button v-if="showSignup" @click="signup">Registrar</button>
			<button v-else @click="signin">Entrar</button>

			<a href @click.prevent="showSignup = !showSignup">
				<span v-if="showSignup">Já tem cadastro? Acesse o Login!</span>
				<span v-else>Não tem cadastro? Registre-se aqui!</span>
			</a>
		</div>
	</div>
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import axios from "axios";

export default {
	name: "AppAuth",
	data: function () {
		return {
			showSignup: false,
			user: {},
		};
	},
	methods: {
		signin() {
			axios
				.post(`${baseApiUrl}/signin`, this.user)
				.then((res) => {
					this.$store.commit("setUser", res.data);
					localStorage.setItem(userKey, JSON.stringify(res.data));
					this.$router.push({ path: "/" });
				})
				.catch(showError);
		},
		signup() {
			axios
				.post(`${baseApiUrl}/signup`, this.user)
				.then(() => {
					this.$toasted.global.defaultSuccess();
					this.user = {};
					this.showSignup = false;
				})
				.catch(showError);
		},
	},
};
</script>

<style>
.auth-content {
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.auth-modal {
	background-color: #fff;
	width: 350px;
	padding: 35px;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
	border-radius: 10px;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 15px;
}
.auth-title {
	font-size: 1.2rem;
	font-weight: 100;
	margin-top: 8px;
}
.auth-modal input {
	border: 1px solid #bbb;
	width: 100%;
	padding: 8px 16px;
	outline: none;

	border-radius: 10px;
}
.auth-modal button {
	align-self: flex-end;
	background-color: #2460ae;
	color: #fff;
	padding: 4px 24px;
	border: none;
	border-radius: 10px;

	transition: opacity 0.2s linear;
}
.auth-modal button:hover {
	opacity: 80%;
}
.auth-modal a {
	margin-top: 16px;
}
.auth-modal hr {
	border: 0;
	width: 100%;
	height: 1px;
	background: linear-gradient(to right, rgba(120, 120, 120, 0), rgba(120, 120, 120, 0.75), rgba(120, 120, 120, 0));
}
</style>
