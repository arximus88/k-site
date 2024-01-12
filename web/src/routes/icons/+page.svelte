<script>
	import Icons from '$lib/components/Icons.svelte';
	import AppHeader from '$lib/components/AppHeader.svelte';
	const icons = [
		'android',
		'code-snippet-inv',
		'code-snippet',
		'github',
		'ios',
		'lightbulb-inv',
		'lightbulb',
		'macos',
		'menu-04-inv',
		'menu-04',
		'moon-inv',
		'moon',
		'presentation-inv',
		'presentation',
		'stars-inv',
		'stars',
		'sun-inv',
		'sun',
		'svelte-logo',
		'user-edit-inv',
		'user-edit',
		'web',
		'windows'
	];
</script>

<AppHeader title="Icons Viewer" backLink="/" secondaryIcon="/path/to/icon.png" />
<div class="icons-grid">
	{#each icons as icon}
		<Icons name={icon} size="24" />
	{/each}
</div>

<style>
	.icons-grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr); /* 6 items in a row */
		gap: 20px;
		padding: 24px;
	}
</style>
