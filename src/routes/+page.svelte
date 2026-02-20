<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import sponsors from '$lib/assets/sponsors.svg';
	import paren_left from '$lib/assets/paren_left.svg';
	import paren_right from '$lib/assets/paren_right.svg';
	import { genPositions } from '$lib/utils';
	import { onMount } from 'svelte';
	import { MouseTracker } from '$lib/mouse-tracker';
	import { Tween } from 'svelte/motion';
	import { expoOut } from 'svelte/easing';

	let positions = genPositions();
	let parenXShift = 50;
	let parenYShift = 20;

	let floatActive = true;
	let interval: ReturnType<typeof setTimeout>;
	let ms: MouseTracker | undefined;
	let tweenLeft = new Tween([0, 0], {
		duration: 1500,
		easing: expoOut
	});
	let tweenRight = new Tween([0, 0], {
		duration: 1500,
		easing: expoOut,
		delay: 90
	});

	function float(alt: number) {
		if (!floatActive) {
			return;
		}

		tweenLeft.set([0, -1 * alt], { duration: 5000 });
		tweenRight.set([0, -1 * alt], { duration: 5000 });

		interval = setTimeout(() => float(alt * -1), 2000);
	}

	onMount(() => {
		ms = new MouseTracker({
			threshold: 100,
			window: 100,
			onForce: ({ x, y }) => {
				floatActive = false;
				tweenLeft.set([x, y]);
				tweenRight.set([x, y]);
			}
		});

		setTimeout(() => float(1), 2000);

		return () => {
			ms?.destroy();
			clearTimeout(interval);
		};
	});
</script>

<h1 class="sr-only">Coimbra.js — JavaScript Meetup in Coimbra, Portugal</h1>
<p class="sr-only">
	Free JavaScript community meetup in Coimbra, Portugal. Join us for talks and networking on
	February 24, 2026 at Pink Room, R. Casal de Vagares 15. Powered by Subvisual, Remote Crew, and
	Pink Room.
</p>

<div class="wrapper">
	<svg class="svg">
		{#each positions as pos, idx (idx)}
			<rect x="{pos.x}%" y="{pos.y}%" class="rect"></rect>
		{/each}
	</svg>

	<div class="main">
		<div class="branding">
			<img
				src={paren_left}
				alt="("
				class="paren"
				style="--x-factor: {tweenLeft.current[0] *
					parenXShift}px; --y-factor: {tweenLeft.current[1] *
					parenYShift}px"
			/>
			<img src={logo} alt="Coimbra.js - JavaScript Meetup in Coimbra, Portugal" class="logo" />
			<img
				src={paren_right}
				alt=")"
				class="paren"
				style="--x-factor: {tweenRight.current[0] *
					parenXShift}px; --y-factor: {tweenRight.current[1] *
					parenYShift}px"
			/>
		</div>

		<iframe
			title="Luma event"
			src="https://luma.com/embed/event/evt-5ECNA9iNMrr6ynW/simple"
			width="784"
			height="400"
			style="border: 0"
			allow="fullscreen; payment"
			aria-hidden="false"
		></iframe>
	</div>

	<img
		src={sponsors}
		alt="Powered by Subvisual, Remote Crew, and Pink Room"
		class="sponsors"
	/>
</div>

<style>
	.wrapper {
		position: relative;
		height: 100%;

		display: flex;
		flex-direction: column;

		background-color: var(--brand-maroon);

		img {
			z-index: 10;
		}
	}

	.main {
		flex: 1 0 auto;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.branding {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: fit-content;
	}

	.sponsors {
		margin: 0 auto;
		height: 24px;
		max-width: 90%;
		margin-bottom: 10px;

		@media (min-width: 1440px) {
			margin-bottom: 20px;
		}

		@media (min-width: 1940px) {
			margin-bottom: 40px;
		}
	}

	.logo {
		max-width: 90%;
		width: 520px;
		margin: 20px 0 20px 0;

		@media (min-width: 1000px) {
			margin: 0 20px 10px;
		}

		@media (min-width: 1440px) {
			width: 590px;
			margin: 40px 20px;
		}
	}

	.paren {
		width: 0px;
		position: absolute;

		--x-offset: 120px;

		@media (min-width: 1000px) {
			width: 130px;
		}

		@media (min-width: 1440px) {
			width: 150px;
		}

		@media (min-width: 1940px) {
			width: 160px;
			--x-offset: 160px;
		}

		&:first-of-type {
			left: 0;
			rotate: -3deg;
			translate: calc(var(--x-offset) * -1 + var(--x-factor))
				calc(10% + var(--y-factor));
		}

		&:last-of-type {
			right: 0;
			rotate: 3deg;
			translate: calc(var(--x-offset) + var(--x-factor))
				calc(-10% + var(--y-factor));
		}
	}

	@keyframes blockIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
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

			@media (min-width: 1440px) {
				width: 80px;
				height: 80px;
			}
		}
	}

	iframe {
		position: relative;
		max-width: 90%;

		@media (min-width: 1440px) {
			margin-bottom: 16vh;
		}

		@media (max-width: 1000px) {
			height: stretch;
		}
	}
</style>
