// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from '@prisma/client';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	var prisma: PrismaClient;
	/// <reference types="lucia-auth" />
	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type UserAttributes = {
			username: string;
		};
	}

	/// <reference types="@sveltejs/kit" />
	declare namespace App {
		interface Locals {
			validate: import('@lucia-auth/sveltekit').Validate;
			validateUser: import('@lucia-auth/sveltekit').ValidateUser;
			setSession: import('@lucia-auth/sveltekit').SetSession;
		}
	}
}

export {};
