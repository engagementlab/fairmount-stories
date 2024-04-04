<script>
import scrollY from "$stores/scrollY";
import EjFeatureQuote from "$components/story/the-future/EJFeatureQuote.svelte";
import PromptEjMeanToYou from "./PromptEJMeanToYou.svelte";
import responses from "$data/responses/PromptEJMeanToYou.json";

let outer;
let top = 0;

$: if (outer) {
	top = outer.getBoundingClientRect().top + $scrollY;
}

let innerWidth;

let preMadeQuotes = [
	{
		quote: "Having healthy lungs, and a clean body.",
		attribution: "— Dorchester Resident"
	},
	{
		quote: "I think it means equal access to not only public transit but other modes of transit as well, and I think one of the big things that is important are bike lanes; I ride my scooter to the train station, and there are bike lanes throughout Boston, and I know they're adding more, but safety is also important!",
		attribution: "— Fairmount Resident"
	},
	{
		quote: "There's such a huge difference in what I found or what my family found, living in a very rural area that had lots of vegetation, lots of trees, compared to living in concrete forest, if you may call it that. You can feel it.",
		attribution: "— Upham's Corner Resident"
	},
	{
		quote: "I think it means ensuring that different places are either equally impacted by climate change-type events or that, if they are disproportionately impacted, steps are taken to mitigate what's going on.",
		attribution: "— Hyde Park Resident"
	},
	{
		quote: "I've cleaned soot off the windowsills in my home for over 20 years... they should be white, and they're always black.",
		attribution: "— Dorchester Resident"
	}
]; 
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
				Below are quotes from Fairmount Corridor residents about what
				Environmental Justice means to them.
			</p>
		</div>
	</div>
	<div
		class="m-auto flex flex-row flex-wrap max-w-screen-lg z-[200] gap-12 sm:gap-0 mb-10"
		bind:this={outer}
	>
		<div
			class="grid gap-8 lg:grid-cols-2 z-[200]"
		>
			{#each preMadeQuotes as quote, i}
				<EjFeatureQuote
				quote={quote.quote}
				attribution={quote.attribution}
				/>
			{/each}
			{#each responses as quote, i}
				<EjFeatureQuote
				quote={quote[0]}
				attribution={`— ${quote[1]} Resident`}
				/>
			{/each}
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
