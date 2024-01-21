// portfolio/+layout.server.js

/** @type {import('./$types').LayoutServerLoad} */
import { pb } from '$lib/pocketbase';

export async function load() {
    try {
        const records = await pb.collection('projects').getFullList({
            sort: '-order'
        });
        
        return { records };
    } catch (error) {
        console.error('Failed to fetch projects:', error);
        throw error(502, 'Error fetching project list');
    }
}
