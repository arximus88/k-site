<script>
	import AppHeader from '$lib/components/AppHeader.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	export let data;
	const records = data.records;
	console.log(records);
	let projects1 = data.items.sort((a, b) => a.order - b.order);
</script>

<svelte:head>
	<title>Borys's Projects</title>
	<meta name="description" content="Projects" />
</svelte:head>


<AppHeader title="Portfolio Viewer" backLink="/" />


<section class="page-container">
	<div class="projects">
		{#each projects1 as project}
			<ProjectCard
				folder={project.folder}
				title={project.title}
				description={project.description}
				clientName={project.clientName}
				tags={project.tags}
				year={project.year}
				disabled={project.disabled}
				visible={project.visible}
			/>
		{/each}
	</div>
</section>

<style>
	.projects {
		padding-top: 32px;
		display: grid;
		gap: 24px;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>
