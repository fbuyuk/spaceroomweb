const KEY = 'magicEmail';

export const setMagicEmail = (/** @type {string} */ email) => localStorage.setItem(KEY, email);

export const getMagicEmail = () => localStorage.getItem(KEY);

export const clearMagicEmail = () => localStorage.removeItem(KEY);
