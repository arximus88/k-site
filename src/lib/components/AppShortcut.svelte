<!-- src/lib/components/AppShortcut.svelte -->
<script>
	export let icon; // path to the icon image
	export let title; // text title for the shortcut
	import AppIcons from '$lib/components/AppIcons.svelte';
</script>

<div class="app-shortcut">
	<AppIcons {icon} />
	<div class="title">{title}</div>
</div>

<style>

	.title {
		margin-top: 8px;
		font-size: 12px; /* Adjust font size for title */
		text-align: center;
		color: var(--primary-basic);
	}
</style>
