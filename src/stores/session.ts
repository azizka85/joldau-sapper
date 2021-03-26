import { writable, get } from "svelte/store";
import type { Session } from '../globals';

const SESSION_KEY = 'session';

export const session = writable(null as Session);

export function saveSession() {
  localStorage.setItem(SESSION_KEY, JSON.stringify(get(session)));
}

export function loadSession() {
  session.set(JSON.parse(localStorage.getItem(SESSION_KEY)) as Session);
}
