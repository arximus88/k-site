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
		position: sticky;
		top: 0;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px;
		background-color: rgba(38, 38, 38, 0.952);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		z-index: 1;
	}
	.back-button {
		display: block;
	}
	a {
		text-decoration: none;
		color: var(--primary-basic);
		font-size: 1.5rem;
	}
	.app-title {
		text-align: center;
	}
	.secondary-icon {
		display: block;
	}
</style>
