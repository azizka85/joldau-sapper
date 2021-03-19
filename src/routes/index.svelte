<script lang="ts">
import SearchBar from '../components/SearchBar.svelte';	
import Loader from '../components/Loader.svelte';
import { isLoading } from 'svelte-i18n';
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

{#if $isLoading}
	<Loader />
{:else}
	<SearchBar />
	<Loader />
{/if}

