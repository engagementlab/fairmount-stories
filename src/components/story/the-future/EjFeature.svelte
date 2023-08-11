<script>
	import scrollY from "$stores/scrollY";
	import EjFeatureQuote from "$components/story/the-future/EJFeatureQuote.svelte";
	import PromptEjMeanToYou from "./PromptEJMeanToYou.svelte";

	let outer;
	let top = 0;

	$: if (outer) {
		top = outer.getBoundingClientRect().top + $scrollY;
	}

	let innerWidth;
	$: mobileSize = innerWidth <= 640;
</script>

<svelte:window bind:innerWidth />

<section class="bg-gradient-to-b from-white to-lime-200 z-[200] px-5">
	<div class="flex h-screen sm:-mb-[10vh] z-[200]">
		<div class="m-auto flex flex-col gap-3 z-[200] max-w-[50] max-w-screen-md">
			<h2 class="label text-center">In these communities,</h2>
			<h2 class="label text-center">
				<span> Environmental Justice is a personal issue. </span>
			</h2>
			<p class="text-center mt-10">
				Below are quotes from Fairmount Line residents about what Environmental
				Justice means to them.
			</p>
		</div>
	</div>
	<div
		class="m-auto flex flex-row flex-wrap max-w-screen-lg z-[200] gap-12 sm:gap-0 mb-10"
		bind:this={outer}
	>
		<div
			class="sm:basis-1/2 w-full z-[200]"
			style:transform={mobileSize
				? ""
				: `translate(0, calc(${($scrollY - top) * -0.4}px - 20vh)`}
		>
			<div class="flex-col flex gap-12">
				<EjFeatureQuote
					quote="Having healthy lungs, and a clean body."
					attribution="— Dorchester Resident"
				/>
				<EjFeatureQuote
					quote="I think it means equal access to not only public transit but other modes of transit as well, and I think one of the big things that is important are bike lanes; I ride my scooter to the train station, and there are bike lanes throughout Boston, and I know they're adding more, but safety is also important!"
					attribution="— Fairmount Resident"
				/>

				<EjFeatureQuote
					quote="There's such a huge difference in what I found or what my family found, living in a very rural area that had lots of vegetation, lots of trees, compared to living in concrete forest, if you may call it that. You can feel it."
					attribution="— Upham's Corner Resident"
				/>
			</div>
		</div>
		<div
			class="sm:basis-1/2 z-[200]"
			style:transform={mobileSize
				? ""
				: `translate(0, calc(${($scrollY - top) * -0.2}px + 10vh)`}
		>
			<div class="flex-col flex gap-12">
				<EjFeatureQuote
					quote="I think it means ensuring that different places are either equally impacted by climate change-type events or that, if they are disproportionately impacted, steps are taken to mitigate what's going on."
					attribution="— Hyde Park Resident"
				/>
				<EjFeatureQuote
					quote="I clean my windowsill in my home for over 20 years... my windows sills that should be white, and it's always black."
					attribution="— Dorchester Resident"
				/>
			</div>
		</div>
	</div>
	<div class="flex h-screen z-[200]">
		<PromptEjMeanToYou />
	</div>
</section>

<style>
	h2 span {
		font-weight: bold;
		border-radius: 5px;
		background-color: #a8db71;
		border-inline: 5px solid #a8db71;
		margin-inline: -5px;
		box-decoration-break: clone;
		-webkit-box-decoration-break: clone;
	}
</style>
