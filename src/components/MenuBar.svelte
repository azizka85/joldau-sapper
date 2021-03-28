<script lang="ts">
import { locale, _, locales } from 'svelte-i18n';
import { UserRole } from '../globals';
import { session } from '../stores/session';

let menuShowed = false;
let languageSelectorShowed = false;

export function showMenu() {
	menuShowed = true;
}

export function hideMenu() {
	menuShowed = false;
	hideLanguageSelector();
}

export function showLanguageSelector() {
	languageSelectorShowed = true;		
}

export function hideLanguageSelector() {
	languageSelectorShowed = false;
}

export function toggleLanguageSelector() {
	if(languageSelectorShowed) {
		hideLanguageSelector();
	} else {
		showLanguageSelector();
	}
}
</script>
	
	<div class="background" class:hide-background={!menuShowed} on:click={hideMenu}></div>
	
	<div class="menu" class:hide-menu={!menuShowed}>
		<div class="menu-profile">
			<a href="{$locale}/settings" class="menu-profile-image">
				{#if $session?.user?.image}		
					<img src={$session?.user?.image} alt={$session?.user?.image}>
				{:else}
					<svg xmlns="http://www.w3.org/2000/svg" class="menu-profile-icon" viewBox="0 0 16 16">
						<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
					</svg>				
				{/if}	
			</a>
			{#if !$session}
				<a href="{$locale}/signin" class="menu-profile-signin">{$_('signin')}</a>
			{:else}
				<div class="menu-profile-item">{$session?.user?.name}</div>
				<div class="menu-profile-item">{$session?.user?.email}</div>	
			{/if}				
		</div>
		<div class="menu-items">
			<div class="menu-item">
				<div class="menu-item-wrapper" on:click={toggleLanguageSelector}>
					<img class="menu-item-icon" src="/images/locale/{$locale}.svg" alt="{$locale}">
					{$_($locale)}
					<svg xmlns="http://www.w3.org/2000/svg" class="menu-item-right-icon" viewBox="0 0 16 16">
						<path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
					</svg> 						
				</div>	
				<div class="menu-item-selector" class:hide={!languageSelectorShowed}>
					{#each $locales as lang}
						<a href="/{lang}" class="menu-item-selector-item" on:click={hideMenu}>
							<img class="menu-item-selector-item-icon" src="/images/locale/{lang}.svg" alt="{lang}">
							{$_(lang)}
						</a>						
					{/each}
				</div>		
			</div>
			<a href="/" class="menu-item">
				<svg class="menu-item-icon" viewBox="0 0 24 24">
					<path d="M16.47 15.04l4.24 4.24a1 1 0 1 1-1.42 1.42l-4.25-4.23a7.5 7.5 0 1 1 1.42-1.42zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z"/>
				</svg>		
				{$_('seacrh_answers')}
			</a>
			<a href="/" class="menu-item">
				<svg class="menu-item-icon stroke" viewBox="0 0 21 21">
					<path stroke-miterlimit="2" stroke-width="9%" d="M16.79 5.2A4.15 4.15 0 0 0 13.85 4c-1.1 0-2.15.44-2.93 1.21l-.42.4-.41-.4A4.17 4.17 0 0 0 3 8.08c0 1.1.44 2.12 1.22 2.9l5.97 5.88c.09.09.2.13.3.13a.4.4 0 0 0 .3-.12l6-5.88a4.04 4.04 0 0 0 0-5.8z"/>
				</svg>			
				{$_('favorite')}
			</a>
			{#if $session?.user?.role == UserRole.admin}
				<a href="/" class="menu-item">
					<svg class="menu-item-icon" viewBox="0 0 24 24">
						<path d="M20 11V6c0-.56-.42-1-.94-1H4.94C4.42 5 4 5.45 4 6v5h16zm0 2H4v6c0 .56.42 1 .94 1h14.12c.52 0 .94-.45.94-1v-6zM2 19V6c0-1.66 1.28-3 2.85-3h14.3A2.93 2.93 0 0 1 22 6v13c0 1.66-1.28 3-2.85 3H4.85A2.93 2.93 0 0 1 2 19zm4-4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1zm0 3a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1z" fill-rule="evenodd"/>
					</svg>			
					{$_('my_answers')}
				</a>
			{/if}
			{#if $session?.user?.role == UserRole.user}
				<a href="/" class="menu-item">
					<svg class="menu-item-icon" viewBox="0 0 24 24">
						<path d="M6.53 17.6a2 2 0 0 1 2.3-.78 11.13 11.13 0 0 0 3.18.37c4.49 0 7.99-2.83 7.99-6.1C20 7.84 16.5 5 12 5s-8 2.83-8 6.1c0 1.9.51 3.23 1.65 4.16.36.3.6.7.7 1.16.09.48.11.92.06 1.33l.12-.15zm-1.46.85c.03.05.11.14.25.28l-.1.1a1 1 0 0 0-.15-.38zm-.02 1.63l-.07.05H4.9L5 20a1.62 1.62 0 0 0 .21-1.17l-1.3 1.31v-1.7c.1-.09.2-.18.28-.3 1.5 0 1.95-.08 2.22-.39-.1.97-.6 1.74-1.36 2.33zm-.67-3.27C2.6 15.35 2 13.31 2 11.1 2 6.62 6.48 3 12 3s10 3.62 10 8.1c0 4.47-4.48 8.09-10 8.09-.8 0-2.38 0-3.81-.48-.95 1.43-2.38 1.43-4.29 1.43-1.9-1.9.96-.95.48-3.33z" fill-rule="nonzero"/>
					</svg>			
					{$_('messages')}
				</a>
			{/if}
			{#if $session?.user?.role == UserRole.admin}
				<div class="menu-item-div">
					<a href="/" class="menu-item primary">
						<svg class="menu-item-icon primary" viewBox="0 0 24 24">
							<path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0zm11 1h3.24a1 1 0 1 0 0-2H13V7.76a1 1 0 1 0-2 0V11H7.76a1 1 0 1 0 0 2H11v3.24a1 1 0 0 0 1 1 1 1 0 0 0 1-1V13z" fill-rule="nonzero"/>
						</svg>				
						{$_('publish_answers')}
					</a>
				</div>
			{/if}
			<a href="{$locale}/settings" class="menu-item">
				<svg class="menu-item-icon" viewBox="0 0 24 24">
					<path d="M21.44 13.58c.57.45.73 1.25.35 1.87l-1.85 3.13c-.37.6-1.11.86-1.79.6l-1.8-.7c-.25.16-.52.3-.79.44l-.27 1.88c-.12.69-.73 1.2-1.44 1.2h-3.7c-.72 0-1.32-.51-1.45-1.23l-.27-1.85a8.12 8.12 0 0 1-.78-.44l-1.81.7c-.66.27-1.42 0-1.79-.6L2.2 15.44a1.44 1.44 0 0 1 .37-1.88l1.5-1.15a6.47 6.47 0 0 1 0-.84l-1.52-1.16a1.44 1.44 0 0 1-.35-1.87l1.85-3.12a1.47 1.47 0 0 1 1.8-.62l1.8.71c.25-.16.51-.3.78-.44l.28-1.87C8.83 2.5 9.43 2 10.15 2h3.7c.7 0 1.3.5 1.45 1.23l.27 1.85c.27.13.53.28.78.44l1.81-.7c.66-.27 1.42 0 1.79.6l1.85 3.13c.37.63.21 1.44-.37 1.88l-1.5 1.15a6.45 6.45 0 0 1 0 .84l1.51 1.16zm-3.64-.26l.08-.57a5.68 5.68 0 0 0 0-1.5l-.08-.57 2.02-1.54-1.36-2.3-2.4.94-.44-.33a6.12 6.12 0 0 0-1.34-.76l-.53-.22-.08-.56L13.39 4h-2.78l-.36 2.47-.53.22c-.48.2-.93.45-1.34.76l-.45.33-.52-.2-1.87-.74-1.37 2.3 2.02 1.54-.07.57a5.85 5.85 0 0 0 0 1.5l.07.57-.46.35-1.56 1.19 1.37 2.3 2.4-.94.44.33c.42.31.87.57 1.34.76l.53.22.08.56.28 1.91h2.78l.36-2.47.53-.22c.48-.2.93-.45 1.33-.76l.45-.33.52.2 1.88.74 1.36-2.3-2.02-1.54zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" fill-rule="nonzero"/>
				</svg>			
				{$_('settings')}
			</a>
		</div>
	</div>
	