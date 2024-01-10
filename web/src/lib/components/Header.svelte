<script>
	import { page } from '$app/stores';
	import { applyAction, enhance } from '$app/forms';
	import logo from '$lib/images/svelte-logo.svg';
	import { currentUser } from '$lib/pocketbase';
	import { pb } from '$lib/pocketbase';
</script>

<header>
	<div class="corner">
		<a href="/">
			<img src={logo} alt="Home" />
		</a>
	</div>

	<!-- <nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about">About</a>
			</li>
		</ul>
	</nav> -->

	<div class="corner">
		{#if $currentUser}
			<form
				action="/logout"
				method="POST"
				use:enhance={() => {
					return async ({ result }) => {
						pb.authStore.clear();
						await applyAction(result);
					};
				}}
			>
				<button type="submit">Log Out</button>
			</form>
		{:else}
			<a href="/auth/login">Authenticate</a>
		{/if}
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	} */

	a:hover {
		color: var(--color-theme-1);
	}
</style>
