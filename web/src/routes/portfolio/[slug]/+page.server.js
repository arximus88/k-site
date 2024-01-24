
/** @type {import('./$types').LayoutServerLoad} */
import { pb } from '$lib/pocketbase';

export async function load({ params }) { 
    
    const record = await pb.collection('projects').getFirstListItem(`folder="${params.slug}"`, {
        expand: 'relField1,relField2.subRelField',
    });
    if (!record) {
        throw error(404, 'Project not found');
    }

    return { record };
    
}

