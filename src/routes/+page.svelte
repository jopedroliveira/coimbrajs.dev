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

	<div class="main">
		<div class="branding">
			<img src={paren_left} alt="(" class="paren" />
			<img src={logo} alt="Coimbra.js" class="logo" />
			<img src={paren_right} alt=")" class="paren" />
		</div>

		<iframe
			title="Luma event"
			src="https://luma.com/embed/event/evt-5ECNA9iNMrr6ynW/simple"
			width="784"
			height="400"
			frameborder="0"
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
	}

	.logo {
		max-width: 90%;
		width: 580px;
		margin: 20px 0 20px 0;

		@media (min-width: 1000px) {
			margin: 0 20px;
		}

		@media (min-width: 1440px) {
			margin: 40px 20px;
		}
	}

	.paren {
		width: 0px;
		position: absolute;

		@media (min-width: 1000px) {
			width: 130px;
		}

		@media (min-width: 1440px) {
			width: 150px;
		}

		&:first-of-type {
			left: 0;
			rotate: -3deg;
			translate: -120px 10%;
		}

		&:last-of-type {
			right: 0;
			rotate: 3deg;
			translate: 120px -10%;
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
			margin-bottom: 20vh;
		}

		@media (max-width: 1000px) {
			height: stretch;
		}
	}
</style>
