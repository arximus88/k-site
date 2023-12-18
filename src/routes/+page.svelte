<script>
	import Button from '$lib/components/Button.svelte';
	let innerWidth = 0;
</script>

<svelte:head>
	<title>Borys's Place</title>
	<meta name="description" content="Borys's Place" />
</svelte:head>
<svelte:window bind:innerWidth />
<div class="home-block">
	<h1 class="hero-text">Borys Kharchenko</h1>
	<div class="hero-subtext">Adjusting | Digital | Experience</div>
	<section>
		<div class="greeting-block">
			<p class="h3 text-primary">Hey,</p>
			<p class="text-secondary">
				My name is Borys, a UI/UX designer with over 11 years of experience in the industry.
			</p>
			<p class="text-secondary">
				I bring a wealth of knowledge from working with companies such as Chegg and Upwork, and I
				have recently spent 4+ years as a Senior Product Designer at Virtually Human Studios, where
				I led the design process for ZED RUN their flagship product and Human Park game.
			</p>
			<p class="text-secondary">
				With my skills and expertise, I can help bring your digital vision to life. Check out my
				LinkedIn page to see some of my previous work and let's create something awesome together!
			</p>
		</div>
		<div class="action-line">
			<Button
				projectUrl="https://www.linkedin.com/in/boryskharchenko/"
				size="default"
				width="adaptive"
				variant="primary">Connect me on Linkedin</Button
			>
		</div>
	</section>
</div>

<style>
	.home-block {
		padding-top: 128px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.action-line {
		padding-top: 32px;
		display: flex;
		justify-content: center;
	}
	.greeting-block {
		padding: 32px 64px;
		margin-top: 64px;
		border-top: 1px solid var(--slight-basic);
		border-bottom: 1px solid var(--slight-basic);
	}

	@media (max-width: 1280px) {
		.home-block {
			padding-top: 64px;
		}
	}
	@media (max-width: 576px) {
		.home-block {
			padding-top: 32px;
		}
		.greeting-block {
			padding: 32px 0px;
		}
	}

</style>
