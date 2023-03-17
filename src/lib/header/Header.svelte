<script lang="ts">
	import Auth from '$lib/auth/Auth.svelte';
	import type { ClientUser } from '@lucia-auth/sveltekit/client';
	import type { Readable } from 'svelte/store';

	export let user: Readable<ClientUser>;

	let showNav = false;
</script>

<!-- Nav Bar -->

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container-fluid">
		<a class="navbar-brand" href="/">Notty</a>
		<button
			class="navbar-toggler"
			type="button"
			data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent"
			aria-expanded="false"
			aria-label="Toggle navigation"
		>
			<span class="navbar-toggler-icon" />
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item">
					<a class="nav-link active" aria-current="page" href="/">Home</a>
				</li>
			</ul>
			<div class="d-flex mx-2 m-sm-t-">
				<Auth {user} />
			</div>
		</div>
	</div>
</nav>
