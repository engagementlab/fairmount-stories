<script>
	export let showModal;
	export let title;
	export let iconSrc = "";
	export let color = "black";

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
	class="p-10 max-w-screen-md bg-white rounded-2xl"
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation class="flex flex-col gap-10">
		<div class="w-full flex">
			<div
				class="m-auto flex aspect-square w-[10em] sm:w-[15em] bg-center bg-contain bg-no-repeat"
				style="background-image: url({iconSrc})"
			>
				<h3
					class="m-auto substance-label !text-[1.7em] sm:!text-[2.2em] text-center"
					style="color: {color}"
				>
					{@html title}
				</h3>
			</div>
		</div>
		<div class="flex gap-10">
			<h2 class="basis-1/3 shrink-0 text-right">What is it?</h2>

			<slot name="description" />
		</div>
		<div class="flex gap-10">
			<h2 class="basis-1/3 shrink-0 text-right">Where does it come from?</h2>
			<slot name="sources" />
		</div>
		<div class="flex gap-10">
			<h2 class="basis-1/3 shrink-0 text-right">How could it affect me?</h2>
			<slot name="effects" />
		</div>
		<slot name="extra" />
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

	.substance-label {
		font-size: 2.5rem;
		letter-spacing: 3px;
		text-shadow: -0.4vw -0.4vw 0 white, 0.4vw -0.4vw 0 white,
			-0.4vw 0.4vw 0 white, 0.4vw 0.4vw 0 white;
	}
</style>
