<script>
	export let visible;
	export let textOnTop = false;
	export let year;
	export let title;
	export let imageLeft;
	export let imageRight;
	export let body;
	export let narration;
	export let narrationImage;
	export let alignBottom;

	let innerWidth;
	$: mobileSize = innerWidth <= 640;
</script>

<svelte:window bind:innerWidth />

<div
	class="bg-white w-full rounded-2xl px-4 py-8 sm:px-8 shadow-xl max-w-screen-md flex flex-col my-[35vh]"
	class:z-30={visible}
	class:mb-10={alignBottom && !mobileSize}
	class:my-[0vh]={mobileSize}
>
	<div
		class="flex flex-col gap-4 wrap w-full duration-300"
		class:items-center={textOnTop}
		class:opacity-50={!visible}
	>
		{#if year}
			<h1
				class="text-[6em] sm:text-[9em] text-center sm:text-left text-fuchsia-900/30"
			>
				{@html year}
			</h1>
		{/if}
		{#if title}
			<h1 class="text-white mb-4 text-center sm:text-left">
				<span
					class="bg-fuchsia-900 border-x-[13px] rounded-md border-fuchsia-900"
					style="box-decoration-break: clone;
					-webkit-box-decoration-break: clone;">{@html title}</span
				>
			</h1>
		{/if}
		{#if body}
			<p
				class="text-bod px-[5px] text-center sm:text-left"
				class:!text-center={textOnTop}
			>
				{@html body}
			</p>
		{/if}
		{#if imageLeft && imageRight}
			<div class="flex w-full flex-wrap items-center gap-4 sm:gap-0">
				<div class="sm:basis-1/2 sm:pr-2 transition hover:scale-[1.02]">
					<img
						class="rounded-md drop-shadow-md object-cover h-[16em] w-full"
						alt="The Fairmount Line from the past"
						src={imageLeft}
					/>
				</div>
				<div class="sm:basis-1/2 sm:pl-2 transition hover:scale-[1.02]">
					<img
						class="rounded-md drop-shadow-md object-cover h-[16em] w-full"
						alt="The Fairmount Line from the past"
						src={imageRight}
					/>
				</div>
			</div>
		{/if}
		{#if (year || title || body) && narration}
			<div />
		{/if}
		{#if narrationImage}
			<div
				class="rounded-md p-2 flex flex-wrap-reverse sm:flex-nowrap justify-end items-center gap-6 w-full self-center"
				class:bg-gray-100={year || title || body}
			>
				<p class="m-auto quote text-center">{@html narration}</p>
				<div
					class=" m-auto sm:m-0 basis-1/3 sm:basis-1/4 shrink-0 grow-0 border-8 border-gray-200 rounded-full bg-gray-200 narration-image"
				>
					<img src={narrationImage} alt="The narrator's face" />
				</div>
			</div>
		{:else if narration}
			<p class="quote text-center">{@html narration}</p>
		{/if}
		<slot />
	</div>
</div>

<style lang="postcss">
	p :global(span) {
		font-weight: bold;
		border-radius: 5px;
		background-color: #f1def1;
		border-inline: 5px solid #f1def1;
		margin-inline: -5px;
		box-decoration-break: clone;
		-webkit-box-decoration-break: clone;
	}

	.narration-image {
		/* animation: narration-image-scale 3s ease-in-out alternate infinite;
		animation: narration-image-rotate 5s ease-out alternate infinite; */
	}

	@keyframes narration-image-scale {
		from {
			transform: scale(1.02);
		}
		to {
			transform: scale(0.95);
		}
	}

	@keyframes narration-image-rotate {
		from {
			transform: rotate(2deg);
		}
		to {
			transform: rotate(-2deg);
		}
	}
</style>
