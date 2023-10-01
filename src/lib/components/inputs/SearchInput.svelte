<script lang="ts">
  export let value: string;
  export let name: string;
</script>

<input
  class="bg-zinc-600 outline-none"
  type="text"
  id="search-field"
  name={name}
  autocomplete="off"
  placeholder="Enter a book title"
  bind:value
  on:input
/>
