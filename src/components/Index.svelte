<script>
	import { fade } from "svelte/transition";

	import Story from "$components/story/Story.svelte";
	import Footer from "$components/Footer.svelte";

	let loading = true;
	let showLoader = true;
	let introAnimationStart = false;
	let introAnimationDone = false;
	let outroAnimationStart = false;

	const handleLoadStart = () => {
		introAnimationStart = true;
		setInterval(() => {
			introAnimationDone = true;
		}, 600);
	};

	const handleMount = () => {
		loading = false;
	};

	const handleLoadFinished = () => {
		outroAnimationStart = true;
		setInterval(() => {
			showLoader = false;
		}, 500);
	};

	$: introAnimationDone && !loading && handleLoadFinished();
</script>

<svelte:window on:loadstart={handleLoadStart()} />

{#if showLoader}
	<div
		class="fixed justify-center items-center flex z-[20000] bg-[#B5D334] min-h-full min-w-full"
		out:fade
	>
		<div
			class="shrink-0 -translate-y-[2vw] absolute delay-500"
			class:opacity-0={outroAnimationStart}
		>
			<img
				src="assets/full-train-loader.png"
				class="w-[150vw]"
				class:train-right-in={introAnimationStart}
				class:train-right-out={outroAnimationStart}
				style="transform: translate(100vw, -11vw)"
			/>
		</div>
		<div
			class="shrink-0 absolute delay-500"
			class:opacity-0={outroAnimationStart}
		>
			<img
				src="assets/full-train-loader.png"
				class="w-[150vw]"
				class:train-left-in={introAnimationStart}
				class:train-left-out={outroAnimationStart}
				style="transform: translate(-100vw, 11vw)"
			/>
		</div>
	</div>
{/if}
<Story on:mounted={handleMount()} />
<Footer />

<style>
	.train-left-in {
		animation: train-left-in 0.5s ease-out;
	}
	@keyframes train-left-in {
		0% {
			transform: translate(-100vw, 11vw);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	.train-left-out {
		animation: train-left-out 0.5s ease-in;
	}
	@keyframes train-left-out {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(100vw, -11vw);
		}
	}

	.train-right-in {
		animation: train-right-in 0.5s ease-out;
	}
	@keyframes train-right-in {
		0% {
			transform: translate(100vw, -11vw);
		}
		100% {
			transform: translate(0, 0);
		}
	}

	.train-right-out {
		animation: train-right-out 0.5s ease-in;
	}
	@keyframes train-right-out {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(-100vw, 11vw);
		}
	}
</style>
