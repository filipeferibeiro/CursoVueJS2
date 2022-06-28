<template>
	<div id="app" :class="{ 'hide-menu': !isMenuVisible }">
		<AppHeader
			title="Cod3r - Base de Conhecimento"
			:hideToggle="false"
			:hideUserDropdown="false"
		/>
		<AppMenu />
		<AppContent />
		<AppFooter />
	</div>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "@/components/template/AppHeader.vue";
import AppMenu from "@/components/template/AppMenu.vue";
import AppContent from "@/components/template/AppContent.vue";
import AppFooter from "@/components/template/AppFooter.vue";
export default {
	name: "App",
	components: { AppHeader, AppMenu, AppContent, AppFooter },
	computed: mapState(["isMenuVisible"]),
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
