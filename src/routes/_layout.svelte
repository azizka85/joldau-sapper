<script lang="ts">
import Loader from '../components/Loader.svelte';
import { isLoading, locale } from 'svelte-i18n';
import { loadSession } from '../stores/session';
import { onMount } from 'svelte';

export let segment;

onMount(() => loadSession());

$: if(segment) {
	locale.set(segment);
} 
</script>

{#if $isLoading}
	<Loader />
{:else}
	<slot></slot>
{/if}
		