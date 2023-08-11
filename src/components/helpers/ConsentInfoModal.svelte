<script>
	export let showModal;

	let dialog;

	$: if (dialog && showModal) {
		dialog.showModal();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	class="p-10 bg-white rounded-lg drop-shadow-xl max-w-[25em]"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="flex flex-col gap-20">
		<p>
			Your responses will help the Fairmount Indigo CDC Collaborative better
			understand how people use and feel about the Fairmount Line. Your response
			is anonymous.
		</p>
		<!-- svelte-ignore a11y-autofocus -->
		<button
			autofocus
			class="m-auto py-2 px-4 rounded-full bg-gray-300 transition hover:scale-110"
			on:click={() => dialog.close()}
		>
			<p class="tooltip">close</p></button
		>
	</div>
</dialog>

<style>
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
