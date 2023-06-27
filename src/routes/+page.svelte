<script lang="ts">
	import BookItem from './BookItem.svelte';

	export let data;
	const { items } = data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div>
	{#each items as item}
		<BookItem book={item} />
	{/each}
</div>
