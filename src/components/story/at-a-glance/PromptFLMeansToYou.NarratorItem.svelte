<script>
	export let icon;
	export let labelTop = "";
	export let labelBottom = "";
</script>

<div
	class="bg-yellow-500 rounded-full w-[25vw] sm:w-[6em] md:w-[7em] lg:w-[8em] aspect-square transition group rounded-full drop-shadow-xl"
>
	<svg
		class="-mb-[25vw] sm:-mb-[6em] md:-mb-[7em] lg:-mb-[8em]"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		viewBox="8 8 184 184"
	>
		<defs>
			<path
				d="M15,100a85,85 0 1,0 170,0a85,85 0 1,0 -170,0"
				id="bottomCircle"
			/>

			<path
				d="M100,37c34.8,0,63,28.2,63,63s-28.2,63-63,63s-63-28.2-63-63S65.2,37,100,37z"
				id="topCircle"
				transform="rotate(-85 100 100)"
			/>
		</defs>
		<text
			text-anchor="middle"
			class="tooltip text-[1.6em] tracking-[.04em] uppercase"
			fill="black"
		>
			<textPath xlink:href="#topCircle" startOffset="23%">{labelTop}</textPath>
		</text>
		<text
			dx="55"
			text-anchor="middle"
			class="tooltip text-[1.6em] tracking-[.16em] uppercase"
			fill="black"
		>
			<textPath xlink:href="#bottomCircle" startOffset="15%"
				>{labelBottom}</textPath
			>
		</text>
	</svg>
	<div class="w-full h-full p-[5vw] sm:p-[19px] md:p-[22px] lg:p-6">
		<div class="w-full h-full bg-white rounded-full flex">
			<svelte:component this={icon} color="black" size="45%" class="m-auto" />
		</div>
	</div>
</div>
