<script>
	import { onMount } from "svelte";
	import scrollY from "$stores/scrollY";

	export let fixBackground = false;
	export let loadItem = false;
	export let showItem = false;
	export let stepTop = 0;
	export let backgroundSticky;

	export let scrollRate = -0.1; //defaults to a slight parallax

	let outer;
	let top;
	let innerWidth;

	onMount(() => {
		top = outer.getBoundingClientRect().top;
	});

	$: mobileSize = innerWidth < 640;

	let transform = "";

	$: if (fixBackground || mobileSize) {
		transform = "";
	} else {
		transform = `translateY(${
			($scrollY - stepTop) * scrollRate - scrollRate * 400
		}px)`;
	}
</script>

<svelte:window bind:innerWidth />

<div
	class="hidden flex-wrap basis-full min-h-screen -mb-[100vh] transition-opacity duration-500 opacity-0"
	class:duration-0={backgroundSticky == "start" ||
		backgroundSticky == "middle" ||
		backgroundSticky == "end"}
	class:!flex={loadItem}
	class:opacity-100={showItem}
	bind:this={outer}
>
	<div
		class="flex flex-wrap basis-full z-[-1000]"
		style="will-change: transform, opacity"
		style:transform
	>
		<slot />
	</div>
</div>
