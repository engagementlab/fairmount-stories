<script>
	// export let imgSrc;
	export let icon;
	export let title;
	export let description;
	export let linkText;
	export let linkUrl;
</script>

<div class="basis-full lg:basis-1/3 p-5">
	<a class="group" href={linkUrl}>
		<div
			class="flex flex-col items-center justify-between w-full h-full bg-white drop-shadow-xl transition group-hover:drop-shadow-2xl rounded-lg px-5 py-10 border-4 border-white group-hover:border-lime-700"
		>
			<div
				class="rounded-full bg-lime-100 aspect-square w-28 h-28 p-5 group-hover:scale-110 transition"
			>
				<svelte:component this={icon} size="100%" class="text-lime-700" />
			</div>
			<!-- <img src={imgSrc} class="aspect-square max-h-[9em]" alt="" /> -->
			<h1 class="text-white text-center my-7">
				<span
					class="bg-lime-700 border-x-[13px] rounded-md -mx-3 border-lime-700"
					style="box-decoration-break: clone;
				-webkit-box-decoration-break: clone;">{title}</span
				>
			</h1>
			<p class="text-center grow">{description}</p>
			<button
				class="bg-lime-100 px-4 py-1 mt-7 rounded-md drop-shadow-md transition-transform group-hover:scale-110 group-hover:bg-lime-700"
			>
				<h3 class="label text-center text-lime-700 group-hover:text-white">
					{linkText}
				</h3>
			</button>
		</div>
	</a>
</div>
