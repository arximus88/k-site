<script>
	import AppShortcut from '$lib/components/AppShortcut.svelte';
</script>

<div class="grid">
	<AppShortcut title="Create" link="/crud/create" />
	<AppShortcut title="Read" link="/crud/read" />
	<AppShortcut title="Update" link="/crud/update" />
	<AppShortcut title="Delete" link="/crud/delete" />
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr); /* 4 items in a row */
		gap: 20px;
	}
</style>
