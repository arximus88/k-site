<!-- auth/+page.svelte -->
<script>
	import { currentUser } from '$lib/pocketbase';
	import { pb } from '$lib/pocketbase';
	import { applyAction, enhance } from '$app/forms';
	import AppHeader from '$lib/components/AppHeader.svelte';
</script>

<AppHeader title="Authentication" backLink="/" secondaryIcon="/path/to/icon.png" />
<div class="app-content">
	{#if $currentUser}
			<span class="medium-text text-secondary text-center"> Logged in as: {$currentUser.email}</span>
			<img
				class="user-avatar"
				src={`http://127.0.0.1:8090/api/files/_pb_users_auth_/${$currentUser.id}/${$currentUser.avatar}`}
				alt="user-avatar"
			/>
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

<style>
	.user-avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
	.app-content {
		padding: 24px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px; /* adjust this value to change the spacing between elements */
	}
</style>
