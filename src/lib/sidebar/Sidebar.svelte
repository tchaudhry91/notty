<script lang="ts">
	export let notes: any;
</script>

<div class="container ml-2 mt-2 rounded">
	<h1>Your Notes</h1>
	<ul class="list-group">
		{#each notes as note}
			<li class="list-group-item bg-dark">
				<a href="/notes/{note.id}" class="no-ul">{note.title}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
	.no-ul {
		text-decoration: none;
	}
</style>
