<!-- auth/+layout.svelte -->
<script>
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import AppHeader from '$lib/components/AppHeader.svelte';

	let backLink = '/';

	// This code runs whenever the URL path changes
	$: {
		const { path } = $page;

		// If the path is defined and starts with /auth/login or /auth/signup, set the back link to /auth
		if (path && (path.startsWith('/auth/login') || path.startsWith('/auth/signup'))) {
			backLink = '/auth';
		} else {
			backLink = '/';
		}
	}
</script>

<AppHeader title="Authentication" {backLink} />
<main>
	<slot />
</main>
