<script lang="ts">
  import { locale } from 'svelte-i18n';
  import { goto } from '@sapper/app';
  import { onMount } from 'svelte';

  onMount(async () => goto($locale));
</script>
