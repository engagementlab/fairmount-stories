<script>
	export let icon;
</script>

<div>
	<div
		class="flex bg-fuchsia-800 rounded-full p-[.3em] items-center drop-shadow-md"
	>
		{#if icon}
			<div class="rounded-full bg-white w-8 p-1">
				<svelte:component this={icon} size="100%" />
			</div>
		{/if}
		<p class="label px-2 text-white text-[1em]">
			<slot />
		</p>
	</div>
</div>
