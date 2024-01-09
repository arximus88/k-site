<script>
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';
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
		<input type="email" name="email" placeholder="Email" required />
		<span>Password</span>
		<input type="password" name="password" placeholder="Password" required />
		<input type="password" name="passwordConfirm" placeholder="Confirm Password" required />
	</div>
	<button>Sign Up</button>
	<div> Already have an account?
	<a href="/auth/login">Log In here</a>
	</div>
</form>
