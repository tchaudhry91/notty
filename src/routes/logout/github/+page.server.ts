import { auth } from '$lib/server/lucia';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
	default: async ({ cookies, locals }) => {
		const session = await locals.validate();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.setSession(null); // remove cookie
		throw redirect(301, '/');
	}
};
