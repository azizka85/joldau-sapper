<script lang="ts">
import Loader from "./components/Loader.svelte";
import SearchBar from "./components/SearchBar.svelte";
import { DEFAULT_TITLE } from "./globals";
import type { INavigator } from "./utils/INavigator";

export let navigator: INavigator;

let path = '';

function navigate() {
	navigator?.navigateTo(path);
}
</script>

<svelte:head>
	<title>Joldau - {DEFAULT_TITLE}</title>
</svelte:head>

<SearchBar />

<main>
	<Loader />
	<form on:submit|preventDefault={navigate}>
		<label>
			Input path: <input bind:value={path} />
		</label>		
		<button type="submit">Check</button>
	</form>
</main>
