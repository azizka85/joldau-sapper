<script lang="ts">
import SearchBar from '../components/SearchBar.svelte';	
import MenuBar from '../components/MenuBar.svelte';
import Loader from '../components/Loader.svelte';
import { isLoading, locale } from 'svelte-i18n';
import { get } from 'svelte/store';

let menuBar: MenuBar;
export let segment;

$: if(!$isLoading) {
	if(segment) {
		if(get(locale) != segment) {
			locale.set(segment);
		}
	}  
}
</script>

{#if $isLoading}
	<Loader />
{:else}
	<SearchBar on:showMenu={menuBar.showMenu} />

	<MenuBar bind:this={menuBar} />

	<slot></slot>
{/if}
		