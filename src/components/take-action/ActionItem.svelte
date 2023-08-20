<script>
	import { MoveRight } from "lucide-svelte";

	export let title;
	export let description;
	export let linkUrl;
</script>

<a
	class="flex flex-col gap-4 bg-white drop-shadow-xl rounded-xl px-4 py-6 sm:py-6 border-4 border-white transition"
	href={linkUrl}
	target="_blank"
	disabled={linkUrl == undefined}
	class:group={linkUrl}
	class:hover:border-lime-700={linkUrl}
	class:opacity-50={linkUrl == undefined}
>
	<div class="flex">
		<div class="flex gap-5 items-center">
			{#if title}
				<h2 class="text-white text-[2.3em] sm:text-[2.8em] my-1 sm:my-2">
					<span
						class="bg-lime-700 border-x-[9px] sm:border-x-[13px] rounded-md border-lime-700"
						style="box-decoration-break: clone;
				-webkit-box-decoration-break: clone;">{title}</span
					>
				</h2>
			{/if}
			<div
				class="rounded-full p-2 mr-2 group-hover:scale-110 group-hover:translate-x-1 group-hover:bg-lime-100 transition"
			>
				<MoveRight color="#4d7c0f" size="2.3em" />
			</div>
		</div>
	</div>
	<div class="flex justify-between items-center gap-5">
		{#if description}
			<p>{description}</p>
		{/if}
	</div>
</a>
