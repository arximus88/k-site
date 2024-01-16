<!-- +layout.svelte -->
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
		height: clamp(640px, calc(100vh - 80px), 800px);
		width: 100%;
		max-width: 360px;
		margin: 0 auto;
		box-sizing: border-box;
		border-radius: 24px;
		background-color: #000000;
		overflow: hidden;
		border-color: rgba(240, 248, 255, 0.256);
		border-style: solid;
		border-width: 2px;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (max-width: 480px) {
		footer {
			display: none;
		}

		main {
			height: 100vh;
			border-radius: 0px;
		}
	}
</style>
