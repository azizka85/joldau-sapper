<script lang="ts" context="module">
export async function preload({ params }) {
  const res = await this.fetch(`${[params.lang, 'answer', ...params.path].join('/')}.json`);
  const data = await res.json();

  if(res.status == 200) {
    return {
      language: params.lang, 
      data
    };
  } else {
    this.error(res.status, data.message);
  }
}  
</script>

<script lang="ts">
import { _ } from 'svelte-i18n';
import { stores } from '@sapper/app';
import { formatDate } from '../../../globals';
import type { Answer } from '../../../globals';
import Loader from '../../../components/Loader.svelte';
import NavLayout from '../../_navLayout.svelte';

export let language: string;
export let data: Answer;

let title = data.title;

const { preloading } = stores();

$: {
  if($preloading) {
    title = $_('loading');
  } else {
    title = data.title;
  }
}
</script>
  
<svelte:head>
  <title>{title}</title>
</svelte:head>

<NavLayout>
  {#if $preloading}
    <Loader />
  {:else}
    <div class="breadcrumbs">
      <a class="breadcrumbs-link" href="{language}">{$_('home')}</a>
      {#each data.parents as category}
        <span class="breadcrumbs-separator">/</span>
        <a class="breadcrumbs-link" href="{language}/category/{category.path}">
          {category.title}
        </a>
      {/each}
    </div>

    <main>
      <div class="content">
        <div class="title">
          <h1>{data.title}</h1>
          <button class="btn">
            <svg class="btn-icon" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
            </svg>			
          </button>        
        </div>
        <p class="info">0 {$_('cnt_messages', {values: {n: 0}})}</p> 
        <p class="date-time">
          {$_('updated')}: {formatDate(data.updatedAt, language)}
        </p>
        <div class="content-wrapper">
          {@html data.content}
        </div>        
      </div>
    </main>
  {/if}  
</NavLayout>
