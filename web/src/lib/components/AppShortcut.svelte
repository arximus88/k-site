<!-- src/lib/components/AppShortcut.svelte -->
<script>
	let mini;
	export let title; // text title for the shortcut
	export let link; // custom link for the shortcut
	let defaultIcon = `default_0${Math.floor(Math.random() * 9) + 1}`; // generates a random number between 1 and 9
	export let icon = defaultIcon;
</script>

<div class="app-shortcut">
	<a href={mini ? null : link || title.toLowerCase()}>
		<div class="app-background">
			<span class="app-icon" style="background-image: url('/app-icons/{icon}.png');" />
		</div>
		<h5 class="title">{title}</h5>
	</a>
</div>

<style>
	a {
		text-decoration: none;
	}
	.title {
		margin-top: 8px;
		text-align: center;
		color: var(--primary-basic);
	}

	.app-icon {
		width: 24px;
		height: 24px;
		display: inline-block;
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
	}
	.folder-preview > .app-shortcut .title {
		display: none; /* Hide title in mini version */
	}
	.folder-preview > .app-shortcut .app-background {
		background-color: none; /* Remove background color in mini version */
	}
	.folder-preview > .app-shortcut a {
		cursor: default; /* Change cursor to default in mini version */
		pointer-events: none; /* Disable pointer events in mini version */
	}
	.folder-preview > .app-shortcut .app-icon {
		width: 12px;
		height: 12px;
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
