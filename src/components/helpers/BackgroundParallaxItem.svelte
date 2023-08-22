<script>
	import { onMount } from "svelte";
	import scrollY from "$stores/scrollY";

	export let fixBackground = false;
	export let loadItem = false;
	export let showItem = false;
	export let stepTop = 0;

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
	class="hidden flex-wrap basis-full min-h-screen -mb-[100vh] duration-500 opacity-0"
	class:!flex={loadItem}
	class:opacity-100={showItem}
	style="will-change: opacity"
	bind:this={outer}
>
	<div
		class="flex flex-wrap basis-full z-[-1000]"
		style="will-change: transform"
		style:transform
	>
		<slot />
	</div>
</div>
