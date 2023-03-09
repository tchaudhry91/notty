<script lang="ts">
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';

	import { page } from '$app/stores';
	import { handleSession } from '@lucia-auth/sveltekit/client';

	import { getUser } from '@lucia-auth/sveltekit/client';

	handleSession(page);
	const user = getUser();
</script>

<Header {user} />

<main class="flex min-h-screen w-11/12 mx-auto mt-10 mb-10">
	{#if $user?.userId}
		<slot />
	{:else}
		<div class="m-auto text-center">Please Log In</div>
	{/if}
</main>

<Footer />
