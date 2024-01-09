<!-- HomeScreen -->
<script>
	import ClockWidget from '$lib/components/ClockWidget.svelte';
	import AppShortcut from '$lib/components/AppShortcut.svelte';
	import Folder from '$lib/components/Folder.svelte';
</script>

<svelte:head>
	<title>Borys's Place</title>
	<meta name="description" content="It's a Borys's website" />
</svelte:head>

<div class="home-screen">
	<ClockWidget />
	<div class="card bio">Bio</div>
	<div class="card contact">Contact Me</div>
	<AppShortcut icon="app_books" title="Portfolio" />
	<Folder title="Tools" />
	<AppShortcut icon="app_cats" title="Cats" />
	<AppShortcut icon="app_fortune" title="Fortuner" />
	<AppShortcut icon="app_settings" title="Settings" />
	<AppShortcut icon="app_auth" title="Auth" />
	<AppShortcut icon="app_crud" title="CRUD" />
</div>

<style>
	.home-screen {
		display: grid;
		grid-template-columns: repeat(4, 1fr); /* 4 items in a row */
		gap: 20px;
	}

	.card {
		flex: 1;
		background: var(--card-bg);
		border-radius: 16px;
		padding: 20px;
		color: var(--primary-basic);
		grid-column: span 2;
		aspect-ratio: 1 / 0.6;
	}
</style>
