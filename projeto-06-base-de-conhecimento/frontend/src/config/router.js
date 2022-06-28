import Vue from "vue";
import VueRouter from "vue-router";

import AppHome from "@/components/home/AppHome";
import AdminPages from "@/components/admin/AdminPages";

Vue.use(VueRouter);

const routes = [
	{
		name: "home",
		path: "/",
		component: AppHome,
	},
	{
		name: "adminPages",
		path: "/admin",
		component: AdminPages,
	},
];

export default new VueRouter({
	mode: "history",
	routes,
});
