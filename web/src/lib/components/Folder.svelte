<!-- src/lib/components/Folder.svelte -->
<script>
	import { setContext, createEventDispatcher } from 'svelte';
	import { writable } from 'svelte/store';
	export let title; // text title for the folder
	let isOpen = writable(false);
	const dispatch = createEventDispatcher();
	function toggleFolder() {
		isOpen.update((value) => !value);
		dispatch('toggle', { isOpen });
	}
	setContext('isFolderOpen', isOpen);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="folder-shortcut" on:click={toggleFolder}>
	<div class="folder-background">
		<div class="folder-content">
			<slot />
		</div>
	</div>
	<div class="title">{title}</div>
</div>

<style>
	.title {
		margin-top: 8px;
		font-size: 12px; /* Adjust font size for title */
		text-align: center;
		color: var(--primary-basic);
	}
	.folder-shortcut {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.folder-content {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* 4 items in a row */
		gap: 2px;
	}

	.folder-background {
		display: flex;
		align-items: center;
		aspect-ratio: 1;
		justify-content: center;
		background-color: var(--slight-basic);
		border-radius: 16px;
	}
	.folder-background:hover {
		background-color: var(--caption-basic);
	}
</style>
