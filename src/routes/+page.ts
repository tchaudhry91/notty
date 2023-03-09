import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const notes = await fetch('/api/notes').then((r) => r.json());
	return {
		notes: notes
	};
};
