<script lang="ts">
	let { children } = $props();
</script>

{@render children()}

<style>
	:global(body) {
		overflow: hidden;
	}
</style>
