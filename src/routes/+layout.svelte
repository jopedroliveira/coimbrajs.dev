<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '$lib/app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>Coimbra.js Meetup · Coimbra, Portugal</title>
	<meta
		name="description"
		content="Join the Coimbra.js community meetup in Coimbra, Portugal. Free JavaScript talks and networking, powered by Subvisual, Remote Crew, and Pink Room."
	/>
	<link rel="canonical" href="https://coimbrajs.dev/" />

	<!-- Open Graph -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://coimbrajs.dev/" />
	<meta property="og:title" content="Coimbra.js Meetup" />
	<meta
		property="og:description"
		content="Join the Coimbra.js community meetup in Coimbra, Portugal. Free JavaScript talks and networking, powered by Subvisual, Remote Crew, and Pink Room."
	/>
	<meta
		property="og:image"
		content="https://coimbrajs.dev/og-image.png"
	/>
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:locale" content="en_GB" />
	<meta property="og:site_name" content="Coimbra.js" />

	<!-- Twitter Card -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Coimbra.js Meetup" />
	<meta
		name="twitter:description"
		content="Join the Coimbra.js community meetup in Coimbra, Portugal. Free JavaScript talks and networking."
	/>
	<meta
		name="twitter:image"
		content="https://coimbrajs.dev/og-image.png"
	/>

	<meta name="theme-color" content="#4a2930" />
	<meta name="robots" content="index, follow" />
	<meta name="geo.region" content="PT-06" />
	<meta name="geo.placename" content="Coimbra" />
	<meta name="geo.position" content="40.2033;-8.4103" />
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
