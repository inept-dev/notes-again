import { createRouter, createWebHistory } from "vue-router";
import Base from "../views/Base.vue";

const routes = [
	{
		path: "/",
		name: "Base",
		component: Base,
	},
	{
		path: "/login",
		name: "Login",
		component: () => import("../views/Login.vue"),
	},
	{
		path: "/register",
		name: "Register",
		component: () => import("../views/Register.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
