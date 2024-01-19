/** @type {import('./$types').LayoutServerLoad} */
import { pb } from '$lib/pocketbase';

const records = await pb.collection('projects').getFullList({
    sort: '-created'
});

export async function load() {
	return { records };
}
