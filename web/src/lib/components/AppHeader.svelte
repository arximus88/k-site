<script>
	export let title = ''; // App title
	export let backLink = '/'; // Link for the back button
	export let secondaryIcon = ''; // Secondary icon
</script>

<header class="app-header">
	<a href={backLink} class="back-button">◀</a>
	<h2 class="app-title">{title}</h2>
	<img src={secondaryIcon} alt="◎" class="secondary-icon" />
</header>

<style>
	.app-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 10px;
        background-color: rgba(240, 248, 255, 0.12);
	}
	.back-button {
		/* Style the back button */
	}
	.app-title {
		text-align: center;
	}
	.secondary-icon {
		/* Style the secondary icon */
	}
</style>
