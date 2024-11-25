import { writable } from 'svelte/store';

export const languageStore = writable(localStorage.getItem('showChineseExplanation') !== 'false'); 