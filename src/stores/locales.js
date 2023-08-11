import { writable, readable } from "svelte/store";

export const currentLocale = writable("English");
export const locales = readable(["English", "Spanish coming soon!", "Haitian Creole coming soon!"]);

