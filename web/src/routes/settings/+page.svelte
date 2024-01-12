<script>
	import AppHeader from '$lib/components/AppHeader.svelte';
</script>

<AppHeader title="Settings" backLink="/" />
<div class="settings-page">
	<section>
		<h2>Wi-Fi</h2>
		<p>Not Connected</p>
	</section>
	<section>
		<h2>Bluetooth</h2>
		<p>Off</p>
	</section>
	<section>
		<h2>Mobile Data</h2>
		<p>On</p>
	</section>
	<section>
		<h2>Personal Hotspot</h2>
		<p>Off</p>
	</section>
	<!-- Add more sections as needed -->
</div>

<style>
	.settings-page {
		display: flex;
		flex-direction: column;
		gap: 20px;
		padding: 24px;
	}
	section {
		border: 1px solid #ccc;
		padding: 10px;
	}
</style>
