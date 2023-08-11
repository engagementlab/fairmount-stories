<script>
	export let id = "";

	export let textOnTop = false;

	export let sticky;
	export let visible;
	export let alignBottom;
	export let top = 0;
	export let stepTop;

	export let scrollRate = -0.04;

	let bottom = 0;
	let stepHeight = 0;
	let minStepHeight = 0;
	let middle = Infinity;
	let outer;
	let innerHeight = 0;
	let scrollY = 0;

	$: if (outer) {
		top = outer.getBoundingClientRect().top + scrollY;
		bottom = outer.getBoundingClientRect().bottom + scrollY;
	}

	$: stepHeight = bottom - top;
	$: minStepHeight = Math.max(minStepHeight, Math.max(stepHeight, innerHeight));
	$: middle = top + minStepHeight / 2;
	$: atCenter = scrollY + innerHeight / 2 > middle;

	let show;
	let fixed;
	let transform;

	let innerWidth;
	$: mobileSize = innerWidth <= 640;

	$: if (!mobileSize) {
		if (sticky == "start") {
			fixed = atCenter;
			if (atCenter) {
				transform = `translate(0, ${(scrollY - stepTop) * scrollRate}px)`;
			}
			show = !atCenter || visible;
		} else if (sticky == "middle") {
			show = visible;
			transform = `translate(0, ${(scrollY - stepTop) * scrollRate}px)`;
			fixed = true;
		} else if (sticky == "end") {
			show = visible || atCenter;
			fixed = !atCenter;
			if (!atCenter) {
				transform = `translate(0, ${(scrollY - stepTop) * scrollRate}px)`;
			}
		} else {
			show = true;
			fixed = false;
			transform = "";
		}
	} else {
		show = true;
		fixed = false;
		transform = "";
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth bind:scrollY />

<div
	class="flex min-h-screen w-full"
	class:z-10={visible}
	bind:this={outer}
	{id}
>
	<div
		id="position-changer"
		class="flex transition-opacity duration-500 left-0 min-w-[100vw]"
		style="min-height: {minStepHeight}px; top: {(innerHeight - minStepHeight) /
			2}px; -will-change: transform, opacity"
		class:fixed
		class:h-full={fixed}
		class:z-20={visible}
		class:opacity-0={!show}
		style:transform
	>
		<div
			class="flex max-w-screen-xl h-full w-full mx-auto px-4 md:px-8 items-center justify-end"
			class:justify-center={textOnTop}
			class:!items-end={alignBottom}
		>
			<slot />
		</div>
	</div>
</div>
