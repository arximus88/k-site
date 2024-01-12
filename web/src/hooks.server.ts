import type { Handle } from '@sveltejs/kit';
import { pb } from '$lib/pocketbase';
import { cookieParse } from 'pocketbase';

export const handle: Handle = async ({ event, resolve }) => {
    // Parse the cookie from the incoming request
    const cookies = cookieParse(event.request.headers.get('cookie') || '');

    // Load the auth state from the cookie
    pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

    if (pb.authStore.isValid) {
        // If there's a valid session, try to refresh it
        try {
            await pb.collection('users').authRefresh();
        } catch (error) {
            // If refreshing the auth fails, clear the auth store
            console.error('Auth refresh failed:', error);
            pb.authStore.clear();
        }
    }

    // Attach PocketBase instance and the user model to locals for use in endpoints
    event.locals.pb = pb;
    event.locals.user = structuredClone(pb.authStore.model);

    // Continue to resolve the request
    const response = await resolve(event);

    // After the request has been resolved, export auth state to cookie
    // Make sure to handle HttpOnly and Secure flags based on your deployment (e.g., HttpOnly should be true in production)
    response.headers.set('Set-Cookie', pb.authStore.exportToCookie({ httpOnly: false }));

    return response;
};
