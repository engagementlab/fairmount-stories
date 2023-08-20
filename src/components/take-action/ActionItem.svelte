<script>
	export let title;
	export let description;
	export let linkUrl;
</script>

<div class="basis-full" disabled={linkUrl == undefined}>
	<a class="group" href={linkUrl}>
		<div
			class="flex justify-between items-center w-full h-full bg-white drop-shadow-xl transition group-hover:drop-shadow-2xl rounded-lg p-8"
		>
			<div class="">
				{#if title}
					<h2 class="text-white text-[2.8em] mt-3 mb-6">
						<span
							class="bg-lime-700 border-x-[13px] rounded-md border-lime-700"
							style="box-decoration-break: clone;
					-webkit-box-decoration-break: clone;">{title}</span
						>
					</h2>
				{/if}
				{#if description}
					<p>{description}</p>
				{/if}
			</div>
			<div class="basis-1/6 h-full w-full flex">
				<button
					class="m-auto bg-lime-100 px-4 py-1 rounded-md drop-shadow-md transition-transform outline outline-4 outline-lime-700 group-hover:scale-110 group-hover:bg-lime-700"
					disabled={linkUrl == undefined}
				>
					<h3 class="label text-center text-lime-700 group-hover:text-white">
						visit
					</h3>
				</button>
			</div>
		</div>
	</a>
</div>
