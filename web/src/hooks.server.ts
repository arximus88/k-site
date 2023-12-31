import type { Handle } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';
import { cookieParse } from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
	// before

	console.log(cookieParse(event.request.headers.get('cookie') || ''));

	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');
	if (pb.authStore.isValid) {
		try {
			await pb.collection('users').authRefresh();
		} catch (_) {
			pb.authStore.clear();  
		}
	}
event.locals.pb = pb;
event.locals.user = structuredClone(pb.authStore.model);

	const response = await resolve(event);

	// after

    response.headers.set('Set-Cookie', pb.authStore.exportToCookie({ httpOnly: false }));

	return response;
};

