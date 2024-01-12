<script>
	import AppHeader from '$lib/components/AppHeader.svelte';

	let fortune = '';
	const fortunes = [
		'You will have a great day!',
		'Something exciting is about to happen.',
		'Good fortune is coming your way.',
		'Be patient, good things take time.',
		'Your hard work will soon pay off.'
	];

	function tellFortune() {
		const randomIndex = Math.floor(Math.random() * fortunes.length);
		fortune = fortunes[randomIndex];
	}
</script>

<AppHeader title="Fortune Teller" backLink="/" />

<div class="app-content">
	<h2 class="text-center">{fortune}</h2>
	<button on:click={tellFortune}>Tell me my fortune</button>
</div>

<style>
	button {
		background-color: #f1f1f1;
		border: 1px solid #ccc;
		border-radius: 12px;
		color: #333;
		cursor: pointer;
		font-size: 16px;
		padding: 10px 20px;
	}
	.app-content {
		padding: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 20px;
		height: 100%; /* take up full height of parent */
		flex-grow: 1;
	}
	h2 {
		text-align: center;
		flex-grow: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
