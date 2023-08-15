<script lang="ts">
  export let book: Api.Book;
</script>

<div class="border-t border-t-white py-3">
  <div class="pb-1">
    <span class="text-xl font-bold">{book.attributes.title}</span>
    <span class="text-gray-200">{book.attributes.yearPublished}</span>
  </div>
  <div>
    <span>By </span>
    {#each book.attributes.authors.data as author}
      {author.attributes.name}
    {/each}
  </div>
  <div class="text-gray-300 italic">{book.attributes.description}</div>
  <div class="text-gray-300 italic">
    Διαθέσιμα: {book.attributes.copiesAvailable}/{book.attributes.copiesTotal}
  </div>
</div>
