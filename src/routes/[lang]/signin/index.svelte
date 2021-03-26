<script lang="ts">
import { _ }  from 'svelte-i18n';
import { locale } from 'svelte-i18n';
import { goto } from '@sapper/app';

export function cancel() {
  goto($locale);
}

export function submit() {
  
}
</script>

<div class="single">
  <div class="card">
    <div class="card-title">
      <h2 class="card-title-content">{$_('signin')}</h2>
    </div>
    <form class="form" on:submit|preventDefault={submit}>
      <div class="form-item">
        <label for="login" class="form-item-name">{$_('login')}: </label>        
        <input id="login" name="login" type="text" class="form-item-value" placeholder={$_('login')} required>
      </div>
      <div class="form-item">
        <label for="password" class="form-item-name">{$_('password')}: </label>        
        <input id="password" name="password" type="text" class="form-item-value" placeholder={$_('password')} required>
      </div>
      <div class="form-item right">
        <button class="form-item-button bg-primary" type="submit">{$_('sign-in-up')}</button>
        <button class="form-item-button bg-secondary" on:click={cancel} type="button">{$_('cancel')}</button>        
      </div>
    </form>
  </div>    
</div>
