<script lang="ts">
	export let label: string;
	export let id: string;
	export let placeholder: string;
	export let min: string;
	export let max: string;
</script>

<div>
	<label for={id}>{label}</label>
	<input
		class="bg-gray-700 focus:bg-gray-600 outline-none"
		type="number"
		name={id}
		{placeholder}
		{id}
		{min}
		{max}
		required
	/>
</div>
