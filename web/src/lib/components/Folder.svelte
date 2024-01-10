<!-- src/lib/components/Folder.svelte -->
<script>
	import { setContext, createEventDispatcher } from 'svelte';
	export let title; // text title for the folder
	let isOpen = false;
	const dispatch = createEventDispatcher();
	function toggleFolder() {
		isOpen = !isOpen;
		dispatch('toggle', { isOpen });
	}
	setContext('isFolderOpen', () => isOpen);
</script>

<button class="folder-shortcut" on:click={toggleFolder}>
	<div class="folder-preview">
		<slot />
	</div>
	<div class="title">{title}</div>
	{#if isOpen}
		<div class="folder-content">
			<slot />
		</div>
	{/if}
</button>

<style>
	.folder-shortcut {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.folder-preview {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		width: 100%;
		aspect-ratio: 1;
		margin-bottom: 8px;
	}
</style>
