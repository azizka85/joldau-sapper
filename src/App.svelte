<script lang="ts">
import Loader from "./components/Loader.svelte";
import SearchBar from "./components/SearchBar.svelte";
import { DEFAULT_TITLE } from "./globals";
</script>

<svelte:head>
	<title>Joldau - {DEFAULT_TITLE}</title>
</svelte:head>

<SearchBar />

<main>
	<Loader />
</main>
