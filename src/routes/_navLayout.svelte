<script lang="ts">
import SearchBar from '../components/SearchBar.svelte';	
import MenuBar from '../components/MenuBar.svelte';
import type { SearchSettings } from '../globals';
import { createEventDispatcher } from 'svelte';

let menuBar: MenuBar;
let searchBar: SearchBar;

const dispatch = createEventDispatcher();

export function setSearch(params: SearchSettings) {
  searchBar.setSearchSettings(params);
}

function search() {
  dispatch('search', searchBar.getSearchSettings());
}
</script>

<SearchBar on:showMenu={menuBar.showMenu} on:search={search} bind:this={searchBar} />
<MenuBar bind:this={menuBar} />		

<slot></slot>
