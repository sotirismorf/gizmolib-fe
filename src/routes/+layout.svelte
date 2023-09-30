<script lang="ts">
  import "../app.postcss";
</script>

<header class="bg-zinc-800 text-fuchsia-300">
  <div
    class="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8 flex items-center justify-between"
  >
    <div class="font-bold text-5xl"><a href="/">gizmolib</a></div>
    <div>
      <a href="/upload" class="text-xl px-2">Δημοσίευση</a>
    </div>
  </div>
</header>

<main class="text-fuchsia-50">
  <div class="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <slot />
    </div>
  </div>
</main>
