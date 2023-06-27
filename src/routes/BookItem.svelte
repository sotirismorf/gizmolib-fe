<script lang="ts">
  export let book: Api.Book
</script>

<div class="border-t border-t-white py-3">
  <div class="pb-1">
    <span class="text-white text-xl font-bold">{ book.title }</span>
    <span class="text-gray-200">{ book.yearPublished }</span>
  </div>
  <div class="text-white">By { book.authorName  }</div>
  <div class="text-gray-200 italic">{ book.description }</div>
  <div class="text-gray-200 italic">Διαθέσιμα: { book.copiesAvailable }/{ book.copiesTotal }</div>
</div>
