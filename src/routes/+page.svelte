<script lang="ts">
	import Card from "$lib/components/Card.svelte";
  import shuffle from "$lib/shuffle"
  import {game} from "$lib/stores/game"

  const emoji_pairs = shuffle(Array.from(game.emojis)
    .concat(Array.from(game.emojis)));

  let selectedOne: number | null = null;
  let selectedTwo: number | null = null;

  function selectCard(index: number) {
    if (selectedOne == null) {
      selectedOne = index;
    } else if (selectedTwo == null && index != selectedOne) {
      selectedTwo = index;
    } 
  }

  function clearSelect() {
    selectedOne = null;
    selectedTwo = null;
  }

  $: {
    if (selectedOne !== null && selectedTwo !== null) {
      setTimeout(() => {
        if (selectedOne !== null && selectedTwo !== null) {
          if (emoji_pairs[selectedOne] == emoji_pairs[selectedTwo]) {
            game.match(emoji_pairs[selectedOne]);
          }
        }
        clearSelect();
      }, 500);
    }
  }

  $: {
    if ($game.size == game.emojis.size) {
      alert("Won");
    }
  }

</script>

<div class='m-auto pt-24 px-8 max-w-screen-sm'>
  <div class='grid grid-cols-4 grid-rows-4 h-full gap-3'>
    {#each emoji_pairs as emoji, i}
      <Card emoji={emoji} selected={i == selectedOne || i == selectedTwo} onSelect={() => selectCard(i)} />
    {/each}
  </div>
</div>
