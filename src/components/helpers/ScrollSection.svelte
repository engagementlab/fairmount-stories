<script>
	import { onMount } from "svelte";

	import Scrolly from "$components/helpers/Scrolly.svelte";

	import BackgroundParallaxItem from "$components/helpers/BackgroundParallaxItem.svelte";
	import BackgroundImage from "$components/helpers/BackgroundImage.svelte";
	import BackgroundMap from "$components/helpers/BackgroundMap.svelte";
	import ForegroundItem from "$components/helpers/ForegroundItem.svelte";
	import ForegroundItemWrapper from "$components/helpers/ForegroundItemWrapper.svelte";

	export let steps;
	export let backgroundColor = "";

	let value = 0;

	let top;
	let outer;

	onMount(() => {
		top = outer.getBoundingClientRect().top;
	});

	let citationText;
	let citationLink;

	$: if (value !== undefined) {
		citationText = steps[value].citationText;
		citationLink = steps[value].citationLink;
	} else {
		citationText = undefined;
		citationLink = undefined;
	}

	let stickyBackgroundStarts = steps
		.map((step, i) => {
			if (step.backgroundSticky == "start") {
				return i;
			}
		})
		.filter((item) => item !== undefined);

	const getBackgroundStepTop = (i, sticky) => {
		if (sticky == "middle" || sticky == "end") {
			let checkIndex = i;
			while (!stickyBackgroundStarts.includes(checkIndex)) {
				checkIndex--;
			}
			return steps[checkIndex].stepTop;
		} else {
			return steps[i].stepTop;
		}
	};

	let stickyForegroundStarts = steps
		.map((step, i) => {
			if (step.sticky == "start") {
				return i;
			}
		})
		.filter((item) => item !== undefined);

	const getForegroundStepTop = (i, sticky) => {
		if (sticky == "middle" || sticky == "end") {
			let checkIndex = i;
			while (!stickyForegroundStarts.includes(checkIndex)) {
				checkIndex--;
			}
			return steps[checkIndex].stepTop;
		} else {
			return steps[i].stepTop;
		}
	};
</script>

<section class="flex flex-wrap w-screen pb-[20vh]" bind:this={outer}>
	<div
		class="flex-wrap flex-auto h-screen basis-full sticky top-0 -z-50 -mb-[100vh] {backgroundColor}"
	>
		{#each steps as step, i}
			{#if step.backgroundImages}
				{#each step.backgroundImages as backgroundImage, j}
					<BackgroundParallaxItem
						scrollRate={step.fixBackground
							? -0.1
							: step.backgroundImages.length > 1
							? (j + 1) * -0.01
							: -0.1}
						fixBackground={step.fixBackground}
						stepTop={getBackgroundStepTop(i, step.backgroundSticky)}
						loadItem={i >= (value || 0) - 1 && i <= (value || 0) + 1}
						showItem={i == (value || 0)}
					>
						<BackgroundImage src={backgroundImage} />
					</BackgroundParallaxItem>
				{/each}
			{/if}
		{/each}
		{#if steps[value || 0].backgroundMap}
			<BackgroundParallaxItem
				fixBackground={true}
				loadItem={true}
				showItem={steps[value || 0].backgroundMap &&
					!steps[value || 0].hideBackgroundMap}
			>
				<BackgroundMap
					{...steps[value || 0].backgroundMap || { visibleFeatures: [] }}
				/>
			</BackgroundParallaxItem>
		{/if}
	</div>
	<Scrolly bind:value>
		{#each steps as step, i}
			<ForegroundItemWrapper
				id={step.id}
				sticky={step.sticky}
				visible={i === value}
				textOnTop={step.textOnTop}
				alignBottom={step.alignBottom}
				stepTop={getForegroundStepTop(i, step.sticky)}
				bind:top={steps[i].stepTop}
			>
				{#if step.componentFullScreen}
					<svelte:component this={step.componentFullScreen} />
				{:else if step.year || step.title || step.body || step.narration}
					<ForegroundItem
						visible={i === value}
						year={step.year}
						title={step.title}
						imageLeft={step.imageLeft}
						imageRight={step.imageRight}
						body={step.body}
						narration={step.narration}
						narrationImage={step.narrationImage}
						citation={step.citation}
						alignBottom={step.alignBottom}
						textOnTop={step.textOnTop}
					>
						{#if step.componentInline}
							<svelte:component this={step.componentInline} />
						{/if}
					</ForegroundItem>
				{/if}
			</ForegroundItemWrapper>
		{/each}
	</Scrolly>
	<div
		class="fixed hidden bottom-0 w-full m-auto p-5 z-20"
		class:!flex={citationText}
	>
		<p
			class="m-auto bg-white/70 rounded-full backdrop-blur-sm group-hover:bg-white drop-shadow-xl px-4 py-2 tooltip text-center sm:text-right transition"
		>
			<a
				href={citationLink}
				target="_blank"
				class="m-auto w-full opacity-50 group hover:opacity-100 transition"
				>{citationText}</a
			>
		</p>
	</div>
</section>
