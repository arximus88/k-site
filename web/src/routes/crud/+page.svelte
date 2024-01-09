<script>
	import AppShortcut from '$lib/components/AppShortcut.svelte';
</script>

<div class="grid">
	<AppShortcut title="Create" />
	<AppShortcut title="Read" />
	<AppShortcut title="Update" />
	<AppShortcut title="Delete" />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr); /* 4 items in a row */
		gap: 20px;
	}
</style>
