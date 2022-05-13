<template>
	<v-app>
		<app-navigation :itensMenu="itensMenu" />
		<v-app-bar app>
			<app-bar />
		</v-app-bar>
		<v-content>
			<app-carousel :fotos="fotos" />
		</v-content>
		<app-footer />
	</v-app>
</template>

<script>
import AppBar from "./components/template/AppBar.vue";
import AppCarousel from "./components/widgets/AppCarousel.vue";
import AppFooter from "./components/template/AppFooter.vue";
import AppNavigation from "./components/template/AppNavigation.vue";

export default {
	components: {
		"app-navigation": AppNavigation,
		"app-bar": AppBar,
		"app-carousel": AppCarousel,
		"app-footer": AppFooter,
	},
	data() {
		return {
			itensMenu: [
				{ titulo: "Início", icon: "mdi-view-dashboard" },
				{ titulo: "Sobre", icon: "mdi-forum" },
			],
			fotos: [
				{
					src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
				},
				{ src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg" },
				{ src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg" },
				{ src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg" },
			],
		};
	},
};
</script>
