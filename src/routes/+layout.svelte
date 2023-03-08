<script>
	import '../app.css';
	import Header from '$lib/header/Header.svelte';
	import Footer from '$lib/footer/Footer.svelte';
	import Sidebar from '$lib/sidebar/Sidebar.svelte';

	import { page } from '$app/stores';
	import { handleSession } from '@lucia-auth/sveltekit/client';

	import { getUser } from '@lucia-auth/sveltekit/client';

	handleSession(page);
	const user = getUser();
</script>

<Header {user} />

<Sidebar />

<slot />

<Footer />
