<script>
	import AppHeader from '$lib/components/AppHeader.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	export let data;
	const projects = data.records;
	// console.log(projects);

</script>

<svelte:head>
	<title>Borys's Projects</title>
	<meta name="description" content="Projects" />
</svelte:head>


<AppHeader title="Portfolio Viewer" backLink="/" />


<section class="page-container">
	<div class="projects">
		{#each projects as project}
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
	.page-container {
		padding: 0px 12px;
	}
	.projects {
		overflow: auto;
		padding-top: 32px;
		display: grid;
		gap: 24px;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>
