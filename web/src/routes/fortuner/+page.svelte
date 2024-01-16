<script>
	import AppHeader from '$lib/components/AppHeader.svelte';
	import Button from '$lib/components/Button.svelte';

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
	<Button width="block" on:click={tellFortune}>Tell me my fortune</Button>
</div>

<style>

	.app-content {
		padding: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 20px;
		height: calc(100% - 50px);
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
