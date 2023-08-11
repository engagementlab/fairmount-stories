<script>
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	import Story from "$components/story/Story.svelte";
	import Footer from "$components/Footer.svelte";

	let animateIntro = true;
	let loading = true;
	onMount(() => {
		animateIntro = false;
		setInterval(() => {
			loading = false;
		}, 500);
	});
</script>

{#if loading}
	<div
		class="fixed justify-center items-center flex z-[10000] bg-[#B5D334] min-h-full min-w-full"
	>
		<div class="shrink-0 -translate-y-[2vw] absolute">
			<img
				src="assets/full-train-loader.png"
				class="train-right w-[150vw] transition-opacity"
				class:opacity-0={!animateIntro}
			/>
		</div>
		<div
			class="shrink-0 absolute transition-opacity"
			class:opacity-0={!animateIntro}
		>
			<img src="assets/full-train-loader.png" class="train-left w-[150vw]" />
		</div>
	</div>
{/if}
<Story />
<Footer />

<style>
	.train-left {
		animation: train-left 1.5s ease-in-out;
	}
	@keyframes train-left {
		0% {
			transform: translate(-100vw, 11vw);
		}
		50% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(100vw, -11vw);
		}
	}
	.train-right {
		animation: train-right 1.5s ease-in-out;
	}
	@keyframes train-right {
		0% {
			transform: translate(100vw, -11vw);
		}
		50% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-100vw, 11vw);
		}
	}
</style>
