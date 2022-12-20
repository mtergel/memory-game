import {writable} from 'svelte/store';

const emojis =  new Set(['🤠', '🥶', '👋', 
  '🧑‍💻', '⭐️', '🌼', '🍭', '🍕']);

function createGame() {
  const {subscribe, set, update} = writable(new Set<string>());

  return {
    subscribe,
    emojis,
    match: (emote: string) => update(n => n.add(emote)),
    reset: () => set(new Set<string>())
  };
}

export const game = createGame();
