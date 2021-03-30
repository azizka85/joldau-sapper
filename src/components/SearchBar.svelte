<script lang="ts">
import { createEventDispatcher } from 'svelte';
import { _ } from 'svelte-i18n';
import type { SearchSettings } from '../globals';

export let hideCategory = false;
export let hideAnswer = false;
export let hideSearch = false;

const dispatch = createEventDispatcher();  

let settingsShowed = false;

let searchElem: HTMLInputElement;

let categoryTitleElem: HTMLInputElement;
let descriptionElem: HTMLInputElement;
let answersCountFromElem: HTMLInputElement;
let answersCountToElem: HTMLInputElement;
let createdAtFromElem: HTMLInputElement;
let createdAtToElem: HTMLInputElement;

let contentTitleElem: HTMLInputElement;
let contentElem: HTMLInputElement;
let updatedAtFromElem: HTMLInputElement;
let updatedAtToElem: HTMLInputElement;

let form: HTMLFormElement;

let searchSettings: SearchSettings = {};

export function getSearchSettings() {
  return searchSettings;
}

export function setSearchSettings(params: SearchSettings) {
  searchSettings = params;
}

function showMenu() {
  dispatch('showMenu');
}

function showSettings() {    
  settingsShowed = true;
}

function hideSettings() {
  settingsShowed = false;  
}

function clearSettings() {
  searchElem.value = '';
  form.reset();
  updateSearch();
}

function submit() {
  hideSettings();
  updateSearch();
}

function updateSearch() {
  searchSettings = {};

  if(!hideCategory) {
    searchSettings.categoryTitle = categoryTitleElem.value;
    searchSettings.description = descriptionElem.value;
    searchSettings.answersCountFrom = answersCountFromElem.value ? Number.parseInt(answersCountFromElem.value, 10) : null;
    searchSettings.answersCountTo = answersCountToElem.value ? Number.parseInt(answersCountToElem.value, 10) : null;
    searchSettings.createdAtFrom = createdAtFromElem.value ? new Date(createdAtFromElem.value) : null;
    searchSettings.createdAtTo = createdAtToElem.value ? new Date(createdAtToElem.value) : null;    
  }

  if(!hideAnswer) {
    searchSettings.contentTitle = contentTitleElem.value;
    searchSettings.content = contentElem.value;
    searchSettings.updatedAtFrom = updatedAtFromElem.value ? new Date(updatedAtFromElem.value) : null;
    searchSettings.updatedAtTo = updatedAtToElem.value ? new Date(updatedAtToElem.value) : null;
  }

  dispatch('search');
}
</script>
  
<header>
  <div class="search-bar-wrapper">
    <div class="search-bar">			
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        class="search-bar-menu-icon" 
        viewBox="0 0 16 16"
        on:click={showMenu}
      >
        <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
      </svg>			
      <div class="search-bar-area" class:hide-search={settingsShowed || hideSearch}>
        <input 
          bind:this={searchElem}
          type="text" 
          placeholder={$_('search')} 
          class="search-bar-area-input"
        >
        <svg class="search-bar-area-icon" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>	
      </div>
      <div class="search-bar-filter-wrapper" class:hide-filter-settings={hideSearch}>
        <svg class="search-bar-filter-icon" viewBox="0 0 16 16" on:click={clearSettings}>
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          <path d="M11.354 4.646a.5.5 0 0 0-.708 0l-6 6a.5.5 0 0 0 .708.708l6-6a.5.5 0 0 0 0-.708z"/>
        </svg>         
        <div class="search-bar-filter-icon-wrapper">
          <svg 
            class="search-bar-filter-icon filter-layer" 
            class:hide-filter={settingsShowed}
            viewBox="0 0 16 16"
            on:click={showSettings}>
            <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
          </svg>
          <svg 
            class="search-bar-filter-icon filter-layer" 
            class:hide-filter={!settingsShowed}
            viewBox="0 0 16 16" 
            on:click={submit}
          >
            <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
          </svg>          	          
        </div>     
      </div>
    </div>
    <div class="search-bar-details" class:hide-details={!settingsShowed}>      
      <form class="form" on:submit|preventDefault={submit} bind:this={form}>
        <h2>{$_('category')}</h2>
        <div class="form-item">
          <label for="category_title" class="form-item-name">{$_('title')}: </label>
          <input 
            id="category_title" name="category_title" 
            type="text" 
            class="form-item-value" 
            placeholder={$_('title')} 
            bind:this={categoryTitleElem}
          >          
        </div>
        <div class="form-item">
          <label for="description" class="form-item-name">{$_('description')}: </label>
          <input 
            id="description" name="description" 
            type="text" 
            class="form-item-value" 
            placeholder={$_('description')} 
            bind:this={descriptionElem}
          >          
        </div>   
        <div class="form-item">{$_('count_answers')}:</div> 
        <div class="form-item">
          <label for="answersCountFrom" class="form-item-name">{$_('from')}: </label>
          <input 
            id="answersCountFrom" name="answersCountFrom" 
            type="number" step="1"
            class="form-item-value" 
            placeholder={$_('from')} 
            bind:this={answersCountFromElem}
          >          
        </div>             
        <div class="form-item">
          <label for="answersCountTo" class="form-item-name">{$_('to')}: </label>
          <input 
            id="answersCountTo" name="answersCountTo" 
            type="number" step="1"
            class="form-item-value" 
            placeholder={$_('to')} 
            bind:this={answersCountToElem}
          >          
        </div>  
        <div class="form-item">{$_('creation_date')}: </div>     
        <div class="form-item">
          <label for="createdAtFrom" class="form-item-name">{$_('from')}: </label>
          <input 
            id="createdAtFrom" name="createdAtFrom" 
            type="date"
            class="form-item-value" 
            placeholder={$_('from')} 
            bind:this={createdAtFromElem}
          >          
        </div>             
        <div class="form-item">
          <label for="createdAtTo" class="form-item-name">{$_('to')}: </label>
          <input 
            id="createdAtTo" name="createdAtTo" 
            type="date" 
            class="form-item-value" 
            placeholder={$_('to')} 
            bind:this={createdAtToElem}
          >          
        </div>   
        <h2>{$_('answer')}</h2>        
        <div class="form-item">
          <label for="content_title" class="form-item-name">{$_('title')}: </label>
          <input 
            id="content_title" name="content_title" 
            type="text" 
            class="form-item-value" 
            placeholder={$_('title')} 
            bind:this={contentTitleElem}
          >          
        </div>
        <div class="form-item">
          <label for="content" class="form-item-name">{$_('content')}: </label>
          <input 
            id="content" name="content" 
            type="text" 
            class="form-item-value" 
            placeholder={$_('content')} 
            bind:this={contentElem}
          >          
        </div>  
        <div class="form-item">{$_('editing_date')}: </div>     
        <div class="form-item">
          <label for="updatedAtFrom" class="form-item-name">{$_('from')}: </label>
          <input 
            id="updatedAtFrom" name="updatedAtFrom" 
            type="date"
            class="form-item-value" 
            placeholder={$_('from')} 
            bind:this={updatedAtFromElem}
          >          
        </div>             
        <div class="form-item">
          <label for="updatedAtTo" class="form-item-name">{$_('to')}: </label>
          <input 
            id="updatedAtTo" name="updatedAtTo" 
            type="date" 
            class="form-item-value" 
            placeholder={$_('to')} 
            bind:this={updatedAtToElem}
          >          
        </div>               
      </form>
    </div>
  </div>
</header>
  