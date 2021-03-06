import Vue from "vue";
import VueRouter from "vue-router";

import AppHome from "@/components/home/AppHome";
import AdminPages from "@/components/admin/AdminPages";
import ArticlesByCategory from "@/components/article/ArticlesByCategory";
import ArticleById from "@/components/article/ArticleById";
import AppAuth from "@/components/auth/AppAuth";

import { userKey } from "@/global";

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
		meta: { requiresAdmin: true },
	},
	{
		name: "articlesByCategory",
		path: "/categories/:id/articles",
		component: ArticlesByCategory,
	},
	{
		name: "articleById",
		path: "/articles/:id",
		component: ArticleById,
	},
	{
		name: "auth",
		path: "/auth",
		component: AppAuth,
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

router.beforeEach((to, from, next) => {
	const json = localStorage.getItem(userKey);

	if (to.matched.some((record) => record.meta.requiresAdmin)) {
		const user = JSON.parse(json);
		user && user.admin ? next() : next({ path: "/" });
	} else {
		next();
	}
});

export default router;
