<script>
	import AirQualityInfoModal from "$components/story/the-future/AirQualityInfoModal.svelte";

	export let title;
	export let iconSrc = "";
	export let color = "black";

	let showModal = false;
</script>

<button
	on:click={() => (showModal = true)}
	class="aspect-square w-[10em] sm:w-[15em] bg-center bg-contain bg-no-repeat hover:bg-center hover:bg-contain hover:bg-no-repeat hover:bg-transparent transition hover:scale-125"
	style="background-image: url({iconSrc})"
	aria-label={title}
>
	<h3
		class="substance-label !text-[1.5em] sm:!text-[2em]"
		style="color: {color}"
	>
		{@html title}
	</h3>
</button>

<AirQualityInfoModal bind:showModal {title} {iconSrc} {color}>
	<slot name="description" slot="description" />
	<slot name="sources" slot="sources" />
	<slot name="effects" slot="effects" />
</AirQualityInfoModal>

<style lang="postcss">
	.substance-label {
		font-size: 2.5rem;
		letter-spacing: 3px;
		text-shadow: -0.08em -0.08em 0 white, 0.08em -0.08em 0 white,
			-0.08em 0.08em 0 white, 0.08em 0.08em 0 white;
	}
</style>
