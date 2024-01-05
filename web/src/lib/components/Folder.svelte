<!-- src/lib/components/Folder.svelte -->
<script>
	import { createEventDispatcher } from 'svelte';
  import AppShortcut from './AppShortcut.svelte'; // Import the missing 'AppShortcut' component
	export let folderContent = []; // Array of app objects inside the folder
	export let title; // text title for the shortcut
	let isOpen = false;

	const dispatch = createEventDispatcher();

	function toggleFolder() {
		isOpen = !isOpen;
		dispatch('toggle', { isOpen });
	}
</script>

<div class="folder-shortcut" on:click={toggleFolder} on:keydown={toggleFolder} role="button" tabindex="0">
  <div class="folder-preview">
    {#each folderContent as app, index}
      {#if index < 4}
        <div class="app-miniature">
          <img src={app.icon} alt={app.title} />
        </div>
      {/if}
    {/each}
  </div>
  <div class="title">{title}</div>
  {#if isOpen}
    <div class="folder-content">
      {#each folderContent as app}
        <AppShortcut icon={app.icon} title={app.title} />
      {/each}
    </div>
  {/if}
</div>

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

	.app-miniature {
		width: 25%;
		height: 25%;
		overflow: hidden;
		position: relative;
	}

	.app-miniature img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 8px;
	}

	.title {
		font-size: 12px; /* Adjust font size for title */
		text-align: center;
		color: var(--primary-basic);
	}

	.folder-content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		background: var(--card-bg);
		border-radius: 16px;
		padding: 10px;
		transform: scaleY(0);
		transform-origin: top;
		transition: transform 0.3s ease-in-out;
		z-index: 10;
	}

	.folder-shortcut.open .folder-content {
		transform: scaleY(1);
	}
</style>
