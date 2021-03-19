<script lang="ts">
import SearchBar from '../components/SearchBar.svelte';	
import Loader from '../components/Loader.svelte';
import * as i18n from '../i18n';
import { locale } from 'svelte-i18n';

locale.set('ru');
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<SearchBar />
<Loader />

