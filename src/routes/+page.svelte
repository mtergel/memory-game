<script lang="ts">
	import Card from "$lib/components/Card.svelte";
  import shuffle from "$lib/shuffle"
  import {game} from "$lib/stores/game"

  const emoji_pairs = shuffle(Array.from(game.emojis)
    .concat(Array.from(game.emojis)));

</script>

<div class='m-auto pt-24 px-8 lg:max-w-screen-lg'>
  <div class='grid grid-cols-4 grid-rows-4 h-full gap-4'>
    {#each emoji_pairs as emoji}
      <Card emoji={emoji} />
    {/each}
  </div>
</div>
