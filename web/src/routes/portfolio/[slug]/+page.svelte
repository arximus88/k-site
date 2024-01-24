<script>
	import ProjectDetails from '$lib/components/ProjectDetails.svelte';
	import PersonalQuote from '$lib/components/PersonalQuote.svelte';
	import Slider from '$lib/components/Slider.svelte';

	export let data;
	let project = data.record;

	let blocks = project.project_body.split(/\r\n/).map((block) => {
		if (block.startsWith('<p><code>')) {
			return { type: 'slider', content: block.slice(9, -10) };
		} else if (block.startsWith('<p>')) {
			return { type: 'paragraph', content: block.slice(3, -4) };
		} else if (block.startsWith('<blockquote>')) {
			return { type: 'quote', content: block.slice(13, -14) };
		} else {
			return { type: 'unknown', content: block };
		}
	});
	console.log(project.project_body);
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
		<ProjectDetails
			clientName={project.clientName}
			clientUrl={project.clientUrl}
			year={project.year}
			platform={project.platform}
			tags={project.tags}
			projectUrl={project.projectUrl}
			platforms={project.platforms}
		/>

		<div>
			{#each blocks as block}
				{#if block.type === 'paragraph'}
					<p class="large-text text-secondary">{@html block.content}</p>
				{:else if block.type === 'quote'}
					<PersonalQuote>
						{@html block.content}
					</PersonalQuote>
				{:else if block.type === 'divider'}
					<hr class="solid" />
				{:else if block.type === 'image'}
					<img src={block.content} alt="" />
				{:else if block.type === 'slider'}
					<Slider folder={project.folder} from={block.content.from} to={block.content.to} />
				{:else if block.type === 'column_list'}
					<div class="columns">
						{#each block.content as column}
							<div class="column">
								{#each column.content as item}
									<p class="large-text text-secondary">{item.content}</p>
								{/each}
							</div>
						{/each}
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	img {
		max-width: 100%;
	}
</style>
