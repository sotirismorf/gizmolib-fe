<script lang="ts">
  import BookItem from "./BookItem.svelte";

  export let data;
  $: page = data.meta.pagination.page
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

{#each data.data as item}
  <BookItem book={item} />
{/each}

<div>
  {#each Array(data.meta.pagination.pageCount) as _, key}
    <a href="?page={key + 1}">
      <span class="bg-zinc-600 px-4 py-2 { page === key + 1 ? 'bg-zinc-500' : '' }">{key + 1}</span>
    </a>
  {/each}
</div>
