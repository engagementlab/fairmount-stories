<script>
	import ActionItem from "$components/take-action/ActionItem.svelte";
	import Footer from "$components/Footer.svelte";
	import { MoveLeft } from "lucide-svelte";

	export let icon;
	export let title;
	export let description;
	export let actionItems = [];
</script>

<section class="flex flex-col w-screen min-h-screen bg-lime-200 p-4 pb-20">
	<div
		class="mx-auto flex flex-col justify-center items-center w-full h-full max-w-screen-lg gap-14 py-6"
	>
		<div class="flex justify-center sm:justify-start w-full max-w-screen-md">
			<a href="../../#take-action" class="border-0 group">
				<div
					class="flex items-center gap-1 bg-lime-100 transition group-hover:-translate-x-1 rounded-full py-2 px-4 text-lime-600 group-hover:bg-white group-hover:text-lime-700"
				>
					<MoveLeft />
					<p class="tooltip text-sm">BACK</p>
				</div>
			</a>
		</div>
		<div class="flex flex-col gap-5">
			<div class="flex flex-wrap-reverse justify-center items-center gap-10">
				<h1
					class="text-lime-700 text-[5em] sm:text-[8em] align-middle text-center"
				>
					{title}
				</h1>
				<div
					class="rounded-full bg-lime-100 aspect-square max-h-[9em] h-[9em] w-[9em] p-7 group-hover:scale-110 transition"
				>
					<svelte:component this={icon} size="100%" class="text-lime-700" />
				</div>
			</div>
			<p class="description text-center px-10">{description}</p>
		</div>
		<div class="w-full flex flex-col gap-10 pt-10 max-w-screen-md m-auto">
			{#each actionItems as item}
				<ActionItem {...item} />
			{/each}
		</div>
	</div>
</section>
<Footer />
