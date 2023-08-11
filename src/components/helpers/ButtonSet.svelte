<script>
	export let options = [];
	export let legend = "";
	export let legendPosition = "top";
	export let disabled = false;
	export let value = options.length ? options[0].value : "";

	const id = `legend-${Math.floor(Math.random() * 1000000)}`;
	const makeSlug = (str = "") => `${str}`.toLowerCase().replace(/\W/g, "");

	$: optionsWithSlug = options.map((d) => ({
		...d,
		val: d.value,
		slug: makeSlug(d.value)
	}));
	$: isTop = legendPosition === "top";
</script>

<div
	id={`group-${id}`}
	class="w-full flex"
	class:is-top={isTop}
	role="radiogroup"
	aria-labelledby={`label-${id}`}
>
	{#if legend}<div class="legend" id="legend-{id}">{legend}</div>{/if}
	<div class="m-auto w-full flex flex-wrap justify-center gap-5">
		{#each optionsWithSlug as option}
			<div
				class="flex basis-2/5 sm:basis-1/5 aspect-square w-[8em] text-center"
			>
				<input
					class="m-auto sr-only"
					type="radio"
					id={`${id}-${option.slug}`}
					name="name-{id}"
					value={option.value}
					{disabled}
					bind:group={value}
				/>
				<label
					class="flex bg-white rounded-full p-3 h-full w-full shadow-xl group transition"
					class:hover:scale-110={!disabled}
					class:opacity-50={disabled && value !== option.value}
					class:bg-yellow-500={value === option.value}
					class:scale-110={value === option.value}
					for={`${id}-${option.slug}`}
				>
					<div class="m-auto" class:text-black={value === option.value}>
						<p class="tooltip">every</p>
						<p class="tooltip text-2xl">
							{option.label || option.value}
						</p>
						<p class="tooltip">minutes</p>
					</div>
				</label>
			</div>
		{/each}
	</div>
</div>
