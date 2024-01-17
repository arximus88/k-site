<script>
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';
	import Button from '$lib/components/Button.svelte';

	let email = '';
	let password = '';
	let passwordConfirm = '';
	let disabled = true;
	export let form;

	// This code runs whenever any of the fields change
	$: {
		disabled = !email || !password || !passwordConfirm;
	}
</script>

<form
	method="POST"
	class="card"
	use:enhance={() => {
		return async ({ result }) => {
			pb.authStore.loadFromCookie(document.cookie);
			await applyAction(result);
		};
	}}
>
	<div class="form-control">
		<span>Email</span>
		<input type="email" bind:value={email} name="email" placeholder="Email" required />
		<span>Password</span>
		<input type="password" bind:value={password} name="password" placeholder="Password" required />
		<input type="password" bind:value={passwordConfirm} name="passwordConfirm" placeholder="Confirm Password" required />
	</div>
	{#if form}
		<div class="error">{form}</div>
	{/if}
	<Button {disabled} width="block" type="submit">Sign Up</Button>
	<!-- <button>Sign Up</button> -->
	<div>
		Already have an account?
		<a href="/auth/login">Log In here</a>
	</div>
</form>
