<!-- src/lib/components/Folder.svelte -->
<script>
	import { writable } from 'svelte/store';
	import { fade } from 'svelte/transition';
	export let title; // text title for the folder
	export const isFolderOpen = writable(false);

	// Function to open the folder
	function openFolder() {
		isFolderOpen.set(true);
		// Prevent scrolling on the body when the folder is open
		document.body.style.overflow = 'hidden';
	}

	// Function to close the folder
	function closeFolder() {
		isFolderOpen.set(false);
		// Allow scrolling on the body when the folder is closed
		document.body.style.overflow = '';
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

{#if $isFolderOpen}
	<div
		class="overlay"
		on:click={closeFolder}
		in:fade={{ delay: 0, duration: 200 }}
		out:fade={{ delay: 0, duration: 200 }}
	>
		<div class="folder-opened" on:click|stopPropagation>
			<h2 class="text-center">{title}</h2>
			<div class="folder-content">
				<slot />
			</div>
		</div>
	</div>
{/if}

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div class="folder-shortcut" on:click={openFolder}>
	<div class="folder-background">
		<div class="folder-preview">
			<slot />
		</div>
	</div>
	<h5 class="title">{title}</h5>
</div>

<style>
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.5); /* Dimmed background */
		z-index: 100; /* High z-index to ensure it covers other content */
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.folder-opened {
		background: rgb(43, 43, 43); /* Semi-transparent background */
		border-radius: 16px;
		padding: 24px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
		z-index: 101; /* Ensures it sits above the overlay */
		overflow-y: auto; /* Allows scrolling within the folder if needed */
		position: absolute;
		left: -4px;
		right: -4px;
	}

	.folder-preview {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* 3 columns for app shortcuts */
		gap: 2px;
	}

	.folder-content {
		display: grid;
		grid-template-columns: repeat(3, 1fr); /* 4 items in a row */
		gap: 20px;
		padding: 0px;
		margin-top: 16px;
	}

	.title {
		margin-top: 8px;
		text-align: center;
		color: var(--primary-basic);
	}
	.folder-shortcut {
		cursor: pointer;
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
