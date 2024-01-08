<script lang="ts">
	export let icon = '';
	export let size = 24;
</script>

<div class="app-background">
	<span
		class="app-icon"
		style="width: {size}px; height: {size}px; background-image: url('/app-icons/{icon}.png');"
	/>
</div>

<style>
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
