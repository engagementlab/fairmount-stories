<script>
	import { currentLocale, locales } from "$stores/locales";
	import { fade, fly, slide } from "svelte/transition";
	import { Menu } from "lucide-svelte";

	let menuOpen = false;

	const handleMenuOpen = () => {
		menuOpen = true;
	};
	const handleMenuClose = () => {
		menuOpen = false;
	};
</script>

<section
	class="w-full h-full flex flex-col justify-between gap-8 pt-5 pb-[15vh] sm:pb-10"
>
	<div
		class="flex sm:hidden w-full sm:max-w-screen-xl justify-between items-center bg-white drop-shadow-xl rounded-full p-2"
	>
		<div class="flex justify-start items-center shrink-0 w-[37vw]">
			<a
				href="https://community.massenergize.org/fairmount-boston/"
				target="_blank"
				class="border-0"
			>
				<img
					href="#"
					src="assets/logos/ficc-logo.png"
					alt="Fairmount Indigo CDC Collaborative logo"
					class="max-h-[9vw] sm:max-h-[4em]"
				/>
			</a>
		</div>
		<div class="flex justify-center items-center shrink-0">
			<button
				on:click={handleMenuOpen}
				class="border-0 transition bg-gray-200 rounded-full p-2 shrink-0 group hover:bg-yellow-500"
			>
				<Menu class="text-gray-500 transition group-hover:text-black" />
			</button>
		</div>
		<div class="flex justify-end items-center shrink-0 w-[37vw]">
			<a
				href="#take-action"
				class="border-0 transition hover:bg-yellow-500 group bg-fuchsia-700 rounded-full px-4 py-3"
			>
				<p
					class="text-white transition group-hover:text-black tooltip text-center text-[4vw] sm:text-xl"
				>
					TAKE ACTION!
				</p>
			</a>
		</div>
	</div>
	<div
		class="hidden sm:flex w-full sm:max-w-screen-xl justify-between items-center drop-shadow-xl p-2 text-white"
	>
		<div class="flex justify-start items-center">
			<a
				href="https://community.massenergize.org/fairmount-boston/"
				target="_blank"
				class="border-0 shrink-0"
			>
				<img
					href="#"
					src="assets/logos/ficc-logo.png"
					alt="Fairmount Indigo CDC Collaborative logo"
					class="max-h-[9vw] sm:max-h-[4em] transition hover:scale-110"
				/>
			</a>
		</div>
		<div class="flex justify-start items-center gap-3">
			<div class="flex flex-col items-center gap-2">
				<div
					class="py-2 rounded-full transition hover:scale-110 hover:bg-black/20 px-4"
				>
					<select
						bind:value={$currentLocale}
						class="tooltip text-[4vw] sm:text-xl w-28 bg-transparent"
					>
						{#each $locales as locale}
							<option value={locale}>
								{locale.toUpperCase()}
							</option>
						{/each}
					</select>
				</div>
			</div>
			<a href="about" class="border-0 transition hover:scale-110 shrink-0">
				<p class="tooltip text-center text-[4vw] sm:text-xl">ABOUT</p>
			</a>
			<a
				href="#take-action"
				class="border-0 transition hover:scale-110 bg-fuchsia-700 rounded-full px-4 py-2 shrink-0"
			>
				<p class="text-white tooltip text-center text-[4vw] sm:text-xl">
					TAKE ACTION!
				</p>
			</a>
		</div>
	</div>
	<div
		class="flex flex-col max-w-screen-xl gap-5 justify-center items-center drop-shadow-xl"
	>
		<h1
			class="title sm:text-[6em] text-center text-white drop-shadow-xl"
			in:fly={{ y: 20, duration: 500, delay: 100 }}
		>
			Fairmount Stories:
		</h1>
		<h2
			class="subtitle sm:text-[4em] text-center text-white drop-shadow-xl"
			in:fly={{ y: 20, duration: 500, delay: 150 }}
		>
			Mobility, Advocacy, and Environmental Justice
		</h2>
	</div>
	<div
		class="flex justify-center items-center"
		in:fade={{ y: 20, duration: 500, delay: 500 }}
	>
		<a class="border-0" href="#intro">
			<div class="flex flex-col justify-center items-center gap-5">
				<p class="tooltip text-white drop-shadow-md">Scroll to begin</p>
				<div
					class="bg-white/20 rounded-full drop-shadow-md transition hover:scale-110 hover:bg-white/50"
				>
					<p class="toolip text-white scroll-arrow">ꜜ</p>
				</div>
			</div>
		</a>
	</div>
	{#if menuOpen}
		<div
			class="fixed top-0 left-0 bg-slate-800 w-screen h-screen flex flex-col justify-center items-center p-10 gap-10 text-slate-400 text-lg z-[9999]"
			in:slide
			out:slide
		>
			<h1 in:fade={{ duration: 500, delay: 50 }}>MENU</h1>
			<div
				class="flex flex-col items-center gap-2"
				in:fade={{ duration: 500, delay: 75 }}
			>
				<p class="font-medium tooltip">Change Language</p>
				<p>
					<select
						bind:value={$currentLocale}
						class="tooltip font-medium text-lg p-2 bg-slate-600"
					>
						{#each $locales as locale}
							<option value={locale}>
								{locale}
							</option>
						{/each}
					</select>
				</p>
			</div>

			<p
				class="font-medium tooltip transition hover:text-white"
				in:fade={{ duration: 500, delay: 100 }}
			>
				<a href="about">About this site</a>
			</p>
			<p
				class="font-medium tooltip transition hover:text-white"
				in:fade={{ duration: 500, delay: 125 }}
			>
				<a href="mailto:kbeaver@dbedc.org">Contact us</a>
			</p>
			<div
				class="flex flex-col items-center gap-2"
				in:fade={{ duration: 500, delay: 150 }}
			>
				<p class="font-medium tooltip">Got feedback?</p>
				<p class="font-medium tooltip">
					<a
						class="hover:text-white transition"
						href="https://docs.google.com/forms/d/1UP20gDuXhdjoRH0WL2iLQeVWBkLHguHPjCCA16npwnM/viewform"
						target="_blank">Please tell us!</a
					>
				</p>
			</div>
			<div class="flex mt-10" in:fade={{ duration: 500, delay: 175 }}>
				<button
					on:click={handleMenuClose}
					class="flex items-center gap-1 bg-white/5 transition rounded-full py-2 px-4 text-slate-400 hover:bg-white/30 hover:text-white"
					in:fade={{ duration: 500, delay: 200 }}
				>
					<div>
						<p class="tooltip text-sm">Close</p>
					</div>
				</button>
			</div>
		</div>
	{/if}
</section>

<style>
	.scroll-arrow {
		font-size: 4em;
		animation: scroll-arrow 1.2s ease-in-out alternate infinite;
	}

	@keyframes scroll-arrow {
		from {
			transform: translateY(10px);
		}
		to {
			transform: translateY(25px);
		}
	}
</style>
