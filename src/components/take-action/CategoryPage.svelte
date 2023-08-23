<script>
	import { base } from "$app/paths";
	import ActionItem from "$components/take-action/ActionItem.svelte";
	import Footer from "$components/Footer.svelte";
	import { fly, scale } from "svelte/transition";
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
		<div class="flex flex-col gap-6 pt-[15vh]">
			<div
				class="flex flex-wrap-reverse justify-center items-center gap-10"
				in:fly={{ y: 20, duration: 500, delay: 0 }}
			>
				<h1
					class="text-lime-700 text-[5em] sm:text-[8em] align-middle text-center"
				>
					{title}
				</h1>
				<div
					class="rounded-full bg-white aspect-square max-h-[9em] h-[9em] w-[9em] p-7 group-hover:scale-110 transition"
					in:scale={{
						duration: 250,
						delay: 0,
						opacity: 0.5,
						start: 0.8
					}}
				>
					<svelte:component this={icon} size="100%" class="text-lime-700" />
				</div>
			</div>
			<p
				class="text-center max-w-screen-md m-auto"
				in:fly={{ y: 20, duration: 500, delay: 50 }}
			>
				{@html description}
			</p>
		</div>
		<div
			class="w-full flex flex-col gap-10 pt-10 max-w-screen-md m-auto"
			in:fly={{ y: 20, duration: 500, delay: 100 }}
		>
			{#each actionItems as item}
				<ActionItem {...item} />
			{/each}
		</div>
		<div class="flex w-full">
			<a href="{base}/#take-action" class="border-0 group m-auto">
				<div
					class="flex items-center gap-1 bg-lime-100 transition group-hover:-translate-x-1 rounded-full py-2 px-4 text-lime-600 group-hover:bg-white group-hover:text-lime-700"
				>
					<MoveLeft class="transition group-hover:-translate-x-1" />
					<p class="tooltip text-sm">BACK</p>
				</div>
			</a>
		</div>
	</div>
</section>
<Footer />

<style lang="postcss">
	p :global(span) {
		font-weight: 500;
		border-radius: 10px;
		background-color: #4d7c0f;
		border-inline: 15px solid #4d7c0f;
		border-block: 5px solid #4d7c0f;
		margin-inline: -5px;
		box-decoration-break: clone;
		-webkit-box-decoration-break: clone;
		color: white;
		font-family: var(--font-tooltip, sans-serif);
	}
</style>
