<script lang="ts">
import Loader from "./components/Loader.svelte";
import SearchBar from "./components/SearchBar.svelte";
import { DEFAULT_TITLE } from "./globals";
import { CategoryType, Router } from "./utils/Router";

let input = '';
let type = CategoryType.server;

let router = new Router({categories: new Map([
	[CategoryType.client, [
		{pattern: /about/},
		{pattern: /products\/(.*)\/edit\/(.*)/}
	]]
])});

function check() {
	let result = router.check(input, type);

	console.log(result);
}
</script>

<svelte:head>
	<title>Joldau - {DEFAULT_TITLE}</title>
</svelte:head>

<SearchBar />

<main>
	<Loader />
	<form on:submit|preventDefault={check}>
		<select bind:value={type}>
			<option value={CategoryType.general}>General</option>
			<option value={CategoryType.client}>Client</option>
			<option value={CategoryType.server}>Server</option>
		</select>
		<input bind:value={input} />
		<button type="submit">Check</button>
	</form>
</main>
