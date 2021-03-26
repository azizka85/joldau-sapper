<script lang="ts">
import SearchBar from '../components/SearchBar.svelte';	
import MenuBar from '../components/MenuBar.svelte';

let menuBar: MenuBar;
</script>

<SearchBar on:showMenu={menuBar.showMenu} />
<MenuBar bind:this={menuBar} />		

<slot></slot>
