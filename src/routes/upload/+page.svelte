<script lang="ts">
	import TextInput from '$lib/components/inputs/TextInput.svelte';
	import NumberInput from '$lib/components/inputs/NumberInput.svelte';
	import SearchableTextInput from '$lib/components/inputs/SearchableTextInput.svelte';

	export let data;
	const { authors } = data;

	console.log(authors);
</script>

<svelte:head>
	<title>Δημοσίευση</title>
	<meta name="Δημοσίευση" content="Δημοσίευση νέου βιβλίου" />
</svelte:head>

<h1>Νέα Δημοσίευση</h1>

<form class="appearance-none" method="POST">
	<TextInput label="Τίτλος" id="title" placeholder="Το Κεφάλαιο (1ος τόμος)" />
	<TextInput label="Περιγραφή" id="description" placeholder="Και μία περιγραφή..." />
	<SearchableTextInput
		label="Συγγραφείς"
		id="author"
		placeholder="Karl Marx"
		searchItems={authors.map(({ id, name }) => ({ id: id, name: name }))}
	/>
	<NumberInput label="Έτος Έκδοσης" id="yearPublished" min="1" max="2500" placeholder="1996" />
	<NumberInput label="Συνολικά Αντίτυπα" id="copiesTotal" min="1" max="1000" placeholder="4" />
	<button class="bg-green-700 hover:bg-green-600">Δημοσίευση</button>
</form>
