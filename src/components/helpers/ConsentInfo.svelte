<script>
	import ConsentInfoModal from "$components/helpers/ConsentInfoModal.svelte";

	let showModal = false;
</script>

<div class="flex w-full">
	<button
		on:click={() => (showModal = true)}
		class="border-0 m-auto rounded-full p-1 flex group hover:scale-110 transition items-center justify-center bg-black/20 drop-shadow-lg hover:bg-black/50"
		aria-label='How will my response be used?'
	>
		<div
			class="rounded-full bg-white group-hover:bg-white aspect-square w-6 flex transition"
		>
			<p class="m-auto text-center font-bold quote text-sm text-black">?</p>
		</div>
		<p class="tooltip text-sm font-bold italic text-white px-3">
			How will my response be used?
		</p>
	</button>
</div>

<ConsentInfoModal bind:showModal />
