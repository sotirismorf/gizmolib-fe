<script lang="ts">
  import BookItem from "./BookItem.svelte";

  export let data;
  const { items } = data;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
  <div class="bold text-3xl pb-4">Κατάλογος</div>
  {#each items as item}
    <BookItem book={item} />
  {/each}
</div>
