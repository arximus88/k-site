<!-- src/routes/HomeScreen.svelte -->
<script>
	import ClockWidget from '$lib/components/ClockWidget.svelte';
	import AppShortcut from '$lib/components/AppShortcut.svelte';
	import Folder from '$lib/components/Folder.svelte';
</script>

<div class="home-screen">
	<ClockWidget />

	<div class="cards">
		<div class="card bio">Bio</div>
		<div class="card contact">Contact Me</div>
	</div>

	<div class="app-grid">
		<AppShortcut icon="app_books" title="Portfolio" />
	</div>
</div>

<style>
	.home-screen {
		background: var(--body-bg-color);
		padding: 20px;
	}

	.cards {
		display: flex;
		justify-content: space-between;
	}

	.card {
		flex-basis: calc(50% - 10px); /* Adjust the spacing between cards */
		background: var(--card-bg);
		border-radius: 10px;
		padding: 20px;
		margin-bottom: 20px;
		color: var(--primary-basic);
	}

	.app-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr); /* 4 items in a row */
		gap: 10px; /* Adjust the gap between items */
	}
</style>
