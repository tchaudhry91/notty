<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import Sidebar from '$lib/sidebar/Sidebar.svelte';

	let noteTitle: string;
	let noteContent: string;
	let showSuccessToast = false;

	async function handleCreate() {
		const response = await fetch('/api/notes', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				title: noteTitle,
				content: noteContent
			})
		});

		if (response.ok) {
			showSuccessToast = true;
			setTimeout(() => {
				showSuccessToast = false;
			}, 3000);
		}
	}
</script>

{#if showSuccessToast}
	<div class="toast toast-top toast-end">
		<div class="alert alert-success">
			<div>
				<span>Message sent successfully.</span>
			</div>
		</div>
	</div>
{/if}

<div class="flex-none w-3/12">
	<Sidebar notes={data.notes} />
</div>
<div class="flex-none w-9/12">
	<input
		type="text"
		bind:value={noteTitle}
		placeholder="Title"
		class="input input-bordered w-full max-w-md mb-5"
	/>
	<textarea
		class="textarea textarea-bordered max-w-full w-full h-3/5 bg-base-200"
		placeholder="Note Contents"
		bind:value={noteContent}
	/>
	<button on:click={handleCreate} class="mt-5 btn btn-primary btn-wide mx-auto">Save</button>
</div>
