<script lang="ts">
	export let label: string;
	export let id: string;
	export let placeholder: string;
	export let searchItems: searchItem[];

	interface searchItem {
		id: number;
		name: string;
	}

	let currentSearchItems: searchItem[] = [];
	let currentInput: string = '';
	let selectedItemId: number;

	function handleKeydown() {
		console.log('hello');
		if (currentInput.length == 0) {
			currentSearchItems = [];
		} else {
			currentSearchItems = searchItems.filter((item) =>
				item.name.toLowerCase().match(currentInput.toLowerCase())
			);
		}
	}

	function handleItemSelection(item: searchItem) {
		currentInput = item.name;
		selectedItemId = item.id;
		currentSearchItems = [];
	}
</script>

<div>
	<label for={id}>{label}</label>
	<input
		class="bg-gray-700 focus:bg-gray-600 outline-none"
		type="text"
		autocomplete="off"
		bind:value={currentInput}
		on:input={handleKeydown}
		{placeholder}
		id="searchable-text-input-name"
		name="{id}Searchable"
	/>

	<input type="hidden" name={id} bind:value={selectedItemId} id="searchable-text-input-id" />

	<div class="bg-gray-700">
		{#each currentSearchItems as searchItem}
			<div>
				<button type="button" on:click={() => handleItemSelection(searchItem)}>
					{searchItem.name}
				</button>
			</div>
		{/each}
	</div>
</div>
