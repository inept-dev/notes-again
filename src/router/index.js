import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";

const routes = [
	{
		path: "/",
		name: "Main",
		component: Main,
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
