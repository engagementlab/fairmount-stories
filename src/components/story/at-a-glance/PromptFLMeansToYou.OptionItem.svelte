<script>
	export let icon;
	export let labelTop = "";
	export let labelBottom = "";
	export let disabled = false;
	export let selected = false;
	export let submitted = false;

	let mouseOver = false;

	const handleClick = () => {
		selected = !selected;
	};

	const handleMouseOver = () => {
		mouseOver = true;
	};

	const handleMouseLeave = () => {
		mouseOver = false;
	};
</script>

<button
	on:click={handleClick}
	on:focus={handleMouseOver}
	on:mouseover={handleMouseOver}
	on:mouseleave={handleMouseLeave}
	{disabled}
	class="bg-fuchsia-800 md:hover:!bg-yellow-500 rounded-full w-[25vw] sm:w-[6em] md:w-[7em] lg:w-[8em] aspect-square transition duration-[50ms] drop-shadow-xl group"
	class:rotate-0={selected}
	class:scale-125={selected}
	class:bg-yellow-500={selected}
	class:!opacity-100={selected && disabled}
	class:md:hover:scale-110={!selected && !disabled}
	class:!cursor-default={disabled}
	tabindex="0"
	aria-label={`${labelTop} ${labelBottom}`}
>
	<svg
		class="-mb-[25vw] sm:-mb-[6em] md:-mb-[7em] lg:-mb-[8em] transition"
		class:md:group-odd:group-hover:rotate-12={!disabled && !selected}
		class:md:group-even:group-hover:-rotate-12={!disabled && !selected}
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
			class="tooltip text-[1.6em] tracking-[-.02em] uppercase"
			fill={selected || mouseOver ? "black" : "white"}
		>
			<textPath xlink:href="#topCircle" startOffset="23%">{labelTop}</textPath>
		</text>
		<text
			dx="55"
			text-anchor="middle"
			class="tooltip text-[1.6em] tracking-[.14em] uppercase"
			fill={selected || mouseOver ? "black" : "white"}
		>
			<textPath xlink:href="#bottomCircle" startOffset="15%"
				>{labelBottom}</textPath
			>
		</text>
	</svg>
	<div class="w-full h-full p-[5vw] sm:p-[19px] md:p-[22px] lg:p-6">
		<div
			class="w-full h-full bg-white rounded-full flex transition"
			class:md:group-odd:group-hover:rotate-12={!disabled && !selected}
			class:md:group-even:group-hover:-rotate-12={!disabled && !selected}
		>
			<svelte:component this={icon} color="black" size="45%" class="m-auto" />
		</div>
	</div>
</button>
