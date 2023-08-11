<script>
	import ActionItem from "$components/take-action/ActionItem.svelte";

	export let imgSrc;
	export let title;
	export let description;
	export let actionItems = [];
</script>

<section class="flex flex-col w-screen min-h-screen bg-lime-200 p-10">
	<div class="w-full mb-20">
		<p class="label text-center">
			<a href="../../">Back</a>
		</p>
	</div>
	<div
		class="mx-auto flex flex-col justify-center w-full h-full max-w-screen-lg gap-5"
	>
		<div class="flex flex-wrap-reverse items-center gap-10">
			<h1 class="text-lime-700 text-[8em] align-middle">
				{title}
			</h1>
			<img src={imgSrc} class="aspect-square max-h-[9em]" alt="" />
		</div>
		<p class="description">{description}</p>
		<div class="p-10 w-full flex flex-col gap-10">
			{#each actionItems as item}
				<ActionItem
					title={item.title}
					description={item.description}
					linkUrl={item.linkUrl}
				/>
			{/each}
		</div>
	</div>
</section>
