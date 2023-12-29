<script>
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles.css';
</script>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p class="text-slight">Bo's Place 2023</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 24px;
		width: 100%;
		max-width: 360px;
		max-height: 800px;
		margin: 0 auto;
		box-sizing: border-box;
		border-radius: 24px;
		background-color: #000000;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
