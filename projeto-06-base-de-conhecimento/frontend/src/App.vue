<template>
	<div id="app" :class="{ 'hide-menu': !isMenuVisible || !user }">
		<AppHeader title="Cod3r - Base de Conhecimento" :hideToggle="!user" :hideUserDropdown="!user" />
		<AppMenu v-if="user" />
		<AppLoading v-if="validatingToken" />
		<AppContent v-else />
		<AppFooter />
	</div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import { mapState } from "vuex";
import AppHeader from "@/components/template/AppHeader.vue";
import AppMenu from "@/components/template/AppMenu.vue";
import AppContent from "@/components/template/AppContent.vue";
import AppFooter from "@/components/template/AppFooter.vue";
import AppLoading from "./components/template/AppLoading.vue";
export default {
	name: "App",
	components: { AppHeader, AppMenu, AppContent, AppFooter, AppLoading },
	computed: mapState(["isMenuVisible", "user"]),
	data: function () {
		return {
			validatingToken: true,
		};
	},
	methods: {
		async validateToken() {
			this.validatingToken = true;
			const json = localStorage.getItem(userKey);
			const userData = JSON.parse(json);
			this.$store.commit("setUser", null);

			if (!userData) {
				this.validatingToken = false;
				this.$router.push({ name: "auth" });
				return;
			}

			const res = await axios.post(`${baseApiUrl}/validateToken`, userData);

			if (res.data) {
				this.$store.commit("setUser", userData);

				if (this.$mq === "xs" || this.$mq === "sm") {
					this.$store.commit("toggleMenu", false);
				}
			} else {
				localStorage.removeItem(userKey);
				this.$router.push({ name: "auth" });
			}

			this.validatingToken = false;
		},
	},
	created() {
		this.validateToken();
	},
};
</script>

<style>
* {
	font-family: "Lato", sans-serif;
}
body {
	margin: 0;
}
#app {
	-webkit-font-smoothing: antialiased;
	-mos-osx-font-smoothing: grayscale;

	height: 100vh;
	display: grid;
	grid-template-rows: 60px 1fr 40px;
	grid-template-columns: 300px 1fr;
	grid-template-areas: "header header" "menu content" "menu footer";
}
#app.hide-menu {
	grid-template-areas: "header header" "content content" "footer footer";
}
</style>
