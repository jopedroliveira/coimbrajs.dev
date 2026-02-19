<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import sponsors from '$lib/assets/sponsors.svg';
	import paren_left from '$lib/assets/paren_left.svg';
	import paren_right from '$lib/assets/paren_right.svg';
	import { genPositions } from '$lib/utils';

	let positions = genPositions();
</script>

<div class="wrapper">
	<svg class="svg">
		{#each positions as pos, idx (idx)}
			<rect x="{pos.x}%" y="{pos.y}%" class="rect"></rect>
		{/each}
	</svg>
	<img
		src={sponsors}
		alt="Powered by Subvisual, Remote Crew, and Pink Room"
		class="sponsors"
	/>

	<div class="branding">
		<img src={paren_left} alt="(" class="paren" />
		<img src={logo} alt="Coimbra.js" class="logo" />
		<img src={paren_right} alt=")" class="paren" />
	</div>

	<iframe
		title="Luma event"
		src="https://luma.com/embed/event/evt-5ECNA9iNMrr6ynW/simple"
		width="784"
		height="408"
		frameborder="0"
		allow="fullscreen; payment"
		aria-hidden="false"
	></iframe>
</div>

<style>
	.wrapper {
		position: relative;
		height: 100%;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		background-color: var(--brand-maroon);

		img {
			z-index: 10;
		}
	}

	.branding {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.sponsors {
		position: absolute;
		top: 5vh;
		right: 0;
		left: 0;
		margin: auto;
		height: 24px;
	}

	.logo {
		max-width: 580px;
		margin: 0 20px;
	}

	.paren {
		max-width: 150px;

		&:first-of-type {
			rotate: -3deg;
			translate: 0 10%;
		}

		&:last-of-type {
			rotate: 3deg;
			translate: 0 -10%;
		}
	}

	.svg {
		position: absolute;
		width: 100%;
		height: 100%;
		pointer-events: none;

		.rect {
			fill: var(--brand-pink);
			width: 40px;
			height: 40px;

			translate: -4vmin;
		}
	}

	iframe {
		position: relative;
		margin-bottom: 20vh;
	}
</style>
