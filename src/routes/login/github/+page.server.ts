import { github } from '@lucia-auth/oauth/providers';
import { auth } from '$lib/server/lucia';
import { env } from '$env/dynamic/private';
import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ cookies }) => {
		const provider = github(auth, {
			clientId: env.GITHUB_ID,
			clientSecret: env.GITHUB_SECRET
		});

		// get url to redirect the user to, with the state
		const [url, state] = await provider.getAuthorizationUrl();

		// the state can be stored in cookies or localstorage for request validation on callback
		cookies.set('state', state, {
			path: '/',
			httpOnly: true, // only readable in the server
			maxAge: 60 * 60 // a reasonable expiration date
		}); // example with cookie

		// redirect to authorization url
		throw redirect(302, url.toString());
	}
};
