<script>
	export let data;
	let project = data;
	console.log(project)
</script>

<svelte:head>
	<title>{project.title} - Project</title>
	<meta name="description" content={project.description} />
</svelte:head>


<!-- Main content -->
<div class="project-content">
	<div>
		<h1 class="project-title">{project.title}</h1>
		<p class="project-description caption">
			{project.description}
		</p>

		<div>
			{@html project.project_body}
		</div>
	</div>
</div>

<style>
	/* img {
		max-width: 100%;
	} */
</style>
