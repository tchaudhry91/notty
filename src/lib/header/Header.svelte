<script lang="ts">
	import Auth from '$lib/auth/Auth.svelte';
	import type { ClientUser } from '@lucia-auth/sveltekit/client';
	import type { Readable } from 'svelte/store';

	export let user: Readable<ClientUser>;

	let showNav = false;
</script>

<!-- Nav Bar -->
<div class="navbar bg-base-300 text-primary-content rounded-xl mx-auto my-2 p-2 w-11/12">
	<div class="flex-none">
		<button class="btn btn-square btn-ghost">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</button>
	</div>
	<div class="flex-1">
		<a href="/">
			<button class="btn btn-ghost normal-case text-xl rounded-lg">Notty</button>
		</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			<Auth {user} />
		</ul>
	</div>
</div>
