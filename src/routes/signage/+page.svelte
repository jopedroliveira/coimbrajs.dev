<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/signage/welcome');
	});
</script>

<div class="container">
	<p>Redirecting...</p>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		display: grid;
		place-items: center;
		background: var(--brand-black);
		color: white;
		font-family: system-ui, sans-serif;
	}
</style>
