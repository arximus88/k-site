<script>
	import AppShortcut from '$lib/components/AppShortcut.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';
</script>

<AppHeader title="CRUD Test" backLink="/" secondaryIcon="/path/to/icon.png" />

<div class="app-content">
	<div class="grid">
		<AppShortcut title="Create" link="/crud/create" />
		<AppShortcut title="Read" link="/crud/read" />
		<AppShortcut title="Update" link="/crud/update" />
		<AppShortcut title="Delete" link="/crud/delete" />
	</div>
</div>

<style>
	.grid {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px; /* adjust this value to change the spacing between elements */
	}
	.app-content {
		padding: 24px;
	}
</style>
