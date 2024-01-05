<!-- src/lib/components/Preloader.svelte -->
<script>
	export let icon; // Emoji or image URL
	export let title;
</script>

<div class="preloader">
	<div class="icon">{icon}</div>
	<div class="title">{title}</div>
</div>

<style>
	.preloader {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		text-align: center;
		background: var(--body-bg-color); /* Using your background variable */
		color: var(--primary-basic); /* Using your text color variable */
		font-family: var(--font-body); /* Using your font variable */
	}

	.icon {
		/* Size for the icon, assuming it's an emoji */
		font-size: 64px; /* Example size, adjust as needed */
	}

	.title {
		margin-top: 16px; /* 1rem equivalent if base font-size is 16px */
		font-size: 24px; /* 1.5rem equivalent if base font-size is 16px */
		font-weight: bold;
	}
</style>
