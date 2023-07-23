<script lang="ts">
	import '../app.postcss';
</script>

<header class="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
	<div class="flex items-center justify-between">
		<div class="font-bold text-5xl"><a href="/">gizmolib</a></div>
		<div>
			<a href="/upload" class="text-xl px-2">Δημοσίευση</a>
			<a href="/login" class="text-xl px-2">Σύνδεση</a>
		</div>
	</div>
</header>

<main>
	<div class="mx-auto max-w-4xl py-6 sm:px-6 lg:px-8">
		<div class="px-4 py-6 sm:px-0">
			<slot />
		</div>
	</div>
</main>
