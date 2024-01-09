<script>
	import { currentUser } from '$lib/pocketbase';
	import { pb } from '$lib/pocketbase';
	import { applyAction, enhance } from '$app/forms';
	import { onMount } from 'svelte';

	onMount(() => {
		console.log($currentUser);
	});
</script>

{#if $currentUser}
	<div>
		Logged in as {$currentUser.email}
		<img
			class="user-avatar"
			src={`http://127.0.0.1:8090/api/files/_pb_users_auth_/${$currentUser.id}/${$currentUser.avatar}`}
			alt="avatar"
		/>
		<script>
			console.log($currentUser.avatar);
		</script>
	</div>
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

<style>
	.user-avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
	}
</style>
