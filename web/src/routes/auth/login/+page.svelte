<script>
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';
	import Button from '$lib/components/Button.svelte';

	let email = '';
	let password = '';
	let disabled = true;

	// This code runs whenever any of the fields change
	$: {
		disabled = !email || !password;
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
	</div>
	<Button {disabled} width="block" type="submit">Log In</Button>
	<!-- <button>Log In</button> -->
	<div>
		Have no account?
		<a href="/auth/signup">Sign Up here</a>
	</div>
</form>
