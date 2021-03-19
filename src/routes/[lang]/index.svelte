<script lang="ts" context="module">
export function preload({ params }) {
  return {
    params
  };
}
</script>

<script lang="ts">
import { _ } from "svelte-i18n";
import { DEFAULT_TITLE } from "../../globals";

export let params;

$: console.log(params);  
</script>

<svelte:head>
	<title>{$_('guide')} - {DEFAULT_TITLE}</title>
</svelte:head>

<main>
  <div class="title">
    <h1>{$_('guide')}</h1>
    <button class="btn">
      <svg class="btn-icon" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
      </svg>			
    </button>
    <button class="btn">
      <svg class="btn-icon" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M10.5 3.16V2.5a1.5 1.5 0 1 1 3 0v.66A7 7 0 0 1 19 10V17h1a1 1 0 0 1 1 1 1 1 0 0 1-1 1h-5a3 3 0 0 1-6 0H4a1 1 0 0 1-1-1 1 1 0 0 1 1-1h1v-7a7 7 0 0 1 5.5-6.84zM11 19a1 1 0 0 0 2 0h-2zm6-2v-7a5 5 0 0 0-10 0v7h10z"/>
      </svg>			
    </button>
  </div>  
</main>
