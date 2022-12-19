<script lang="ts">
  import tweomji from 'twemoji';
  export let emoji:string;
</script>

<div class='bg-gray-base/20 aspect-square h-full rounded-lg flex items-center justify-center p-4 hover:transition-colors hover:bg-gray-active/40'>
  {@html tweomji.parse(emoji)}
</div>

