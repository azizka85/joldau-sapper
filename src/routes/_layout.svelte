<script lang="ts">
import Loader from '../components/Loader.svelte';
import { isLoading, locale } from 'svelte-i18n';

export let segment;

$: if(segment) {
	locale.set(segment);
} 
</script>

{#if $isLoading}
	<Loader />
{:else}
	<slot></slot>
{/if}
		