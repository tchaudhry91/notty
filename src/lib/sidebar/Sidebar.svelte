<script lang="ts">
	export let notes: any;
</script>

<div class="drawer ml-2 mt-2 w-80">
	<div class="drawer-side">
		<div class="drawer-title">Your Notes</div>
		<ul class="menu p-4 w-80 rounded-xl bg-base-100 text-base-content">
			{#each notes as note}
				<li class="menu-item">
					<a href="/notes/{note.id}" class="link link-hover">{note.title}</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
