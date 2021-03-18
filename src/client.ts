import { Router } from "./utils/Router";
import App from './App.svelte';
import { ClientNavigator } from "./utils/ClientNavigator";

const router = new Router({routes: [
	{ pattern: /about/ },
	{ pattern: /products\/(.*)\/edit\/(.*)/ }
]});

const navigator = new ClientNavigator(router);

window.addEventListener('popstate', event => navigator.handlePath(location.pathname));

const app = new App({
	target: document.body,
	props: {
		navigator
	},
	hydrate: true
});

export default app;
