<script>
	import { onMount } from "svelte";
	import { createEventDispatcher } from "svelte";
	import { fly } from "svelte/transition";
	import { MoveLeft, MoveRight } from "lucide-svelte";
	import scrollY from "$stores/scrollY";

	import Scrolly from "$components/helpers/Scrolly.svelte";

	import Intro from "$components/story/intro/Intro.svelte";
	import AtAGlance from "$components/story/at-a-glance/AtAGlance.svelte";
	import History from "$components/story/history/History.svelte";
	import TheFuture from "$components/story/the-future/TheFuture.svelte";
	import TakeAction from "$components/take-action/TakeAction.svelte";

	const dispatch = createEventDispatcher();
	onMount(() => {
		dispatch("mounted");
	});

	let value;
	const sections = [
		{ title: "Intro", anchor: "#intro" },
		{ title: "At A Glance", anchor: "#at-a-glance" },
		{ title: "History", anchor: "#history" },
		{ title: "The Future", anchor: "#the-future" },
		{ title: "Take Action", anchor: "#take-action" }
	];

	let innerHeight;
</script>

<svelte:window bind:innerHeight />

<div in:fly={{ y: 20, duration: 500 }}>
	<div class="h-screen" />
	<div
		class="navigation-wrapper sticky w-full flex top-0 z-[1000] p-4 group hover:translate-y-2 hover:scale-105 transition h-[5em]"
	>
		<div
			class="hidden sm:flex m-auto items-center p-2 rounded-full gap-2 bg-white/70 transition duration-700 group-hover:bg-white backdrop-blur-sm drop-shadow-xl"
			class:opacity-0={$scrollY < innerHeight}
		>
			{#each sections as section, i}
				<a
					href={section.anchor}
					class="py-1 rounded-full border-0 transition opacity-30 group-hover:opacity-100"
					class:bg-fuchsia-800={i === value}
					class:hover:bg-gray-200={i !== value}
				>
					<h5
						class="text-center px-4 no-underline"
						class:text-white={i === value}
					>
						{section.title}
					</h5>
				</a>
			{/each}
		</div>
		<div
			class="sm:hidden m-auto flex items-center p-2 rounded-full gap-2 bg-white/70 transition duration-700 group-hover:bg-white backdrop-blur-sm drop-shadow-xl"
			class:opacity-0={$scrollY < innerHeight}
		>
			{#if value !== undefined}
				<a
					class="py-1 px-2 rounded-full border-0 transition bg-gray-200 hover:bg-fuchsia-700 hover:text-white"
					href={sections[Math.max(value - 1, 0)].anchor}
				>
					<MoveLeft />
				</a>
				<a
					href={sections[value].anchor}
					class="py-1 px-2 rounded-full border-0 transition bg-fuchsia-700"
				>
					<h5 class="text-center px-4 no-underline text-white">
						{sections[value].title}
					</h5>
				</a>
				<a
					class="py-1 px-2 rounded-full border-0 transition bg-gray-200 hover:bg-fuchsia-700 hover:text-white"
					href={sections[Math.min(value + 1, sections.length - 1)].anchor}
				>
					<MoveRight />
				</a>
			{/if}
		</div>
	</div>
	<Scrolly bind:value>
		<Intro />
		<AtAGlance />
		<History />
		<TheFuture />
		<TakeAction />
	</Scrolly>
</div>

<style>
	.navigation-wrapper {
		margin-bottom: calc(-100vh - 5em);
	}
</style>
