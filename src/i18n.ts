import { register, init, getLocaleFromNavigator } from 'svelte-i18n';

import { DEFAULT_LANGUAGE } from './globals'

register('en', () => import('./locales/en.json'));
register('ru', () => import('./locales/ru.json'));
register('kk', () => import('./locales/kk.json'));

let language = getLocaleFromNavigator() ?? DEFAULT_LANGUAGE;

language = language.split('-')[0].toLowerCase();
language = language || DEFAULT_LANGUAGE;

init({
  fallbackLocale: DEFAULT_LANGUAGE,
  initialLocale: language
});
