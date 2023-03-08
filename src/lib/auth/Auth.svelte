<script lang="ts">
	import type { Readable } from 'svelte/store';
	import type { ClientUser } from '@lucia-auth/sveltekit/client';

	export let user: Readable<ClientUser>;
</script>

{#if $user?.userId}
	<form method="POST" action="/logout/github">
		<button type="submit" class="btn btn-primary">Logout</button>
	</form>
{:else}
	<form method="POST" action="/login/github">
		<button type="submit" class="btn btn-primary">Login with GitHub</button>
	</form>
{/if}
