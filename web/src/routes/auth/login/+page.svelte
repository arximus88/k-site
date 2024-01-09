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
	</div>
	<button>Log In</button>
	<div> Have no account?
	<a href="/auth/signup">Sign Up here</a>
	</div>
</form>
