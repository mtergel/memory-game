<script lang="ts">
  import tweomji from 'twemoji';
  import {game} from "$lib/stores/game"

  export let emoji:string;
  export let selected: boolean;
  export let onSelect: () => void;

  $: open = selected || $game.has(emoji); // reactive element so cool!

</script>


<div class='flip-box' on:click={onSelect}>
  <div class='flip-box-inner' class:flip-it={open}>
    <div class='card-front'>
      {@html tweomji.parse("❔")}
    </div>
    <div class='card-back' class:conceal-answer={selected} class:card-correct={$game.has(emoji)}>
      {#if open}
        <div>
          {@html tweomji.parse(emoji)}
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang='postcss' type='text/postcss'>
  .flip-box {
    @apply aspect-square h-full;

    background-color: transparent;
    perspective: 1000px;
  }

  .flip-box-inner {
    @apply relative w-full h-full text-center transition-transform;
    transform-style: preserve-3d;
  }

  .flip-it {
    transform: rotateY(180deg);
  }
  
  .card-correct {
    @apply border-4 border-green-active;
  }
    
  .card-front, .card-back {
    @apply absolute w-full h-full rounded-lg transition-colors;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform-style: preserve-3d;
  }

  .card-front {
    @apply bg-gray-active/20 flex justify-center p-8;
  }

  @keyframes revealSlowly {
    to {opacity: 1}
  }

  .conceal-answer { 
    animation: revealSlowly .3s forwards; 
  }

  .card-back {
    @apply flex items-center justify-center p-4;
    transform: rotateY(180deg);
  }

</style>

