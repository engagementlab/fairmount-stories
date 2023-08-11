<script>
	import { onMount } from "svelte";

	export let fixBackground = false;
	export let loadItem = false;
	export let showItem = false;
	export let stepTop = 0;

	export let scrollRate = -0.1; //defaults to a slight parallax

	let outer;
	let top;
	let scrollY;
	let innerWidth;

	onMount(() => {
		top = outer.getBoundingClientRect().top;
	});

	let mobileSize = innerWidth < 640;

	let transform = "";

	$: if (fixBackground || mobileSize) {
		transform = "";
	} else {
		transform = `translateY(${(scrollY - stepTop) * scrollRate}px)`;
	}
</script>

<svelte:window bind:scrollY bind:innerWidth />

<div
	class="hidden flex-wrap basis-full min-h-screen -mb-[100vh] transition-opacity duration-500 opacity-0"
	style="will-change: transform, opacity"
	class:!flex={loadItem}
	class:opacity-100={showItem}
	bind:this={outer}
>
	<div class="flex flex-wrap basis-full" style:transform>
		<slot />
	</div>
</div>
