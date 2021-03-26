<script lang="ts">
import { _ }  from 'svelte-i18n';
import { locale } from 'svelte-i18n';
import { goto } from '@sapper/app';
import { stores } from '@sapper/app';
import Loader from '../../../components/Loader.svelte';

export function cancel() {
  goto($locale);
}

export function submit() {
  loading = true;
}

let title = $_('sign-up');
let loading = false;

const { preloading } = stores();

$: {
  if($preloading) {
    title = $_('loading');
  } else {
    title = $_('sign-up');
  }
}
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

{#if $preloading}
  <Loader />
{:else}
  <div class="single">
    <div class="card">
      <div class="card-title">
        <h2 class="card-title-content">{$_('sign-up')}</h2>
      </div>
      <form class="form" on:submit|preventDefault={submit}>
        <div class="form-item">
          <label for="name" class="form-item-name">{$_('username')}: </label>
          <input 
            type="text" 
            id="name" name="name" 
            class="form-item-value" 
            placeholder={$_('username')} 
            required
            disabled={loading}
          >
        </div>
        <div class="form-item">
          <label for="email" class="form-item-name">{$_('email')}: </label>
          <input 
            type="email" 
            id="email" name="email" 
            class="form-item-value" 
            placeholder={$_('email')} 
            required
            disabled={loading}
          >
        </div>
        <div class="form-item">
          <label for="login" class="form-item-name">{$_('login')}: </label>        
          <input 
            id="login" name="login" 
            type="text" 
            class="form-item-value" 
            placeholder={$_('login')} 
            required
            disabled={loading}
          >
        </div>
        <div class="form-item">
          <label for="password" class="form-item-name">{$_('password')}: </label>        
          <input 
            id="password" name="password" 
            type="password" 
            class="form-item-value" 
            placeholder={$_('password')} 
            required
            disabled={loading}
          >
        </div>
        <div class="form-item right">
          {#if loading}
            {$_('loading')}
          {:else}
            <a href="{$locale}/signin" class="form-item-link">{$_('sign-in')}</a>
          {/if}
        </div>
        <div class="form-item right">
          {#if loading}
            <Loader />
          {/if}
          <button class="form-item-button bg-primary" type="submit" disabled={loading}>{$_('sign-up')}</button>
          <button class="form-item-button bg-secondary" on:click={cancel} type="button" disabled={loading}>{$_('cancel')}</button>        
        </div>
      </form>
    </div>    
  </div>
{/if}
