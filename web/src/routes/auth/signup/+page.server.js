import { redirect, fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ locals, request }) => {
		const data = Object.fromEntries(await request.formData());

		try {
			await locals.pb.collection('users').create(data);
			await locals.pb.collection('users').authWithPassword(data.email, data.password);
		} catch (e) {
			return fail(e.status, e.response.message)
		}
		// throw redirect(303, '/');
	}
};