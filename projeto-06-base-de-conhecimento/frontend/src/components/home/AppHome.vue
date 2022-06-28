<template>
	<div class="home">
		<PageTitle
			icon="fa fa-home"
			main="Dashboard"
			sub="Base de Conhecimento"
		/>
		<div class="stats">
			<AppStat
				title="Categorias"
				:value="stat.categories"
				icon="fa fa-folder"
				color="#d54d50"
			/>
			<AppStat
				title="Artigos"
				:value="stat.articles"
				icon="fa fa-file"
				color="#3bc480"
			/>
			<AppStat
				title="Usuários"
				:value="stat.users"
				icon="fa fa-user"
				color="#3282cd"
			/>
		</div>
	</div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import axios from "axios";
import { baseApiUrl } from "@/global";
import AppStat from "./AppStat.vue";

export default {
	name: "AppHome",
	components: { PageTitle, AppStat },
	data: () => ({
		stat: {},
	}),
	methods: {
		getStats() {
			axios
				.get(`${baseApiUrl}/stats`)
				.then((res) => (this.stat = res.data));
		},
	},
	mounted() {
		this.getStats();
	},
};
</script>

<style>
.stats {
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
</style>
