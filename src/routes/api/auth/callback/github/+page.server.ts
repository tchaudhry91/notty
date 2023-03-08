import type { PageServerLoad } from './$types';
import { github } from '@lucia-auth/oauth/providers';
import { auth } from '$lib/server/lucia';
import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url, locals, cookies }) => {
	const provider = github(auth, {
		clientId: env.GITHUB_ID,
		clientSecret: env.GITHUB_SECRET
	});

	const authCode = url.searchParams.get('code') as string;
	const state = url.searchParams.get('state') as string;

	if (cookies.get('state') != state) {
		throw new Error('State mismatch');
	}
	const { existingUser, providerUser, createUser } = await provider.validateCallback(authCode);
	const getUser = async () => {
		if (existingUser) return existingUser;
		// create a new user if the user does not exist
		return await createUser({
			username: providerUser.login // attributes
		});
	};

	const user = await getUser();

	const session = await auth.createSession(user.userId);
	locals.setSession(session);
	throw redirect(301, '/');
};
