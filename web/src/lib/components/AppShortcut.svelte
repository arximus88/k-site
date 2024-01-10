<!-- src/lib/components/AppShortcut.svelte -->
<script>
	import { getContext } from 'svelte';
	const isFolderOpen = getContext('isFolderOpen');
	export let title; // text title for the shortcut
	export let link; // custom link for the shortcut
	export let mini = isFolderOpen; // whether to render the mini version
	let defaultIcon = `default_0${Math.floor(Math.random() * 9) + 1}`; // generates a random number between 1 and 9
	export let icon = defaultIcon;
	export let size = mini ? 12 : 24; // smaller size for mini version
</script>

<div class="app-shortcut" class:mini>
	<a href={mini ? null : link || title.toLowerCase()}>
		<div class="app-background">
			<span
				class="app-icon"
				style="width: {size}px; height: {size}px; background-image: url('/app-icons/{icon}.png');"
			/>
		</div>
		<div class="title">{title}</div>
	</a>
</div>

<style>
	a {
		text-decoration: none;
	}
	.title {
		margin-top: 8px;
		font-size: 12px; /* Adjust font size for title */
		text-align: center;
		color: var(--primary-basic);
	}
	.app-shortcut.mini .title {
		display: none; /* Hide title in mini version */
	}
	.app-shortcut.mini .app-background {
		background-color: none; /* Remove background color in mini version */
	}
	.app-shortcut.mini a {
		cursor: default; /* Change cursor to default in mini version */
		pointer-events: none; /* Disable pointer events in mini version */
	}
	.app-icon {
		display: inline-block;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
	.app-background {
		display: flex;
		align-items: center;
		aspect-ratio: 1;
		justify-content: center;
		background-color: var(--slight-basic);
		border-radius: 16px;
	}
	.app-background:hover {
		background-color: var(--caption-basic);
	}
</style>
