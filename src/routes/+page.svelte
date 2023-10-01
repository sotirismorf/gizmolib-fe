<script lang="ts">
  import SearchInput from "$lib/components/inputs/SearchInput.svelte";
  import BookItem from "./BookItem.svelte";

  export let data;

  let value = "";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<form
  action="/"
  method="get"
>
  <SearchInput bind:value name="q" />
</form>

{#each data.api.data as item}
  <BookItem book={item} />
{/each}

<div>
  {#each Array(data.api.meta.pagination.pageCount) as _, key}
    <a href="?page={key + 1}{ data.search ? `&q=${data.search}` : ''}">
    {#if data.api.meta.pagination.page === key + 1}
      <span class="bg-zinc-500 px-4 py-2 ">{key + 1}</span>
    {:else}
      <span class="bg-zinc-600 px-4 py-2">{key + 1}</span>
    {/if}
    </a>
  {/each}
</div>
