<div
	class="flex bg-slate-800 w-full py-28 px-5 text-slate-300 min-h-screen z-50"
>
	<div
		class="m-auto w-full max-w-screen-md flex flex-col justify-center items-center gap-16 z-50"
	>
		<div class="flex justify-center items-center">
			<a class="border-0" href="#welcome">
				<div class="flex flex-col justify-center items-center gap-5">
					<div
						class="bg-slate-600 rounded-full drop-shadow-md transition hover:scale-110 hover:bg-slate-500"
					>
						<p class="toolip text-center hover:text-white scroll-arrow">ꜛ</p>
					</div>
					<p class="tooltip text-center drop-shadow-md">back to top</p>
				</div>
			</a>
		</div>
		<div class="w-full">
			<h1 class="tracking-wide text-center">The Fairmount Line Community:</h1>
			<h2 class="tracking-wide text-center">
				Stories of its Past, Present, & Future
			</h2>
		</div>
		<div class="w-86 flex flex-wrap justify-between gap-6">
			<div class="w-36 m-auto flex flex-col items-center gap-2">
				<p class="font-normal tooltip transition hover:text-white">
					<a href="mailto:kbeaver@dbedc.org">Contact us</a>
				</p>
				<p class="font-normal tooltip transition hover:text-white">
					<a href="about">About this site</a>
				</p>
			</div>

			<div class="w-36 m-auto flex flex-col items-center gap-2">
				<p class=" font-normal tooltip">Got feedback?</p>
				<p class=" font-normal tooltip">
					<a
						class="hover:text-white transition"
						href="https://docs.google.com/forms/d/1UP20gDuXhdjoRH0WL2iLQeVWBkLHguHPjCCA16npwnM/viewform"
						target="_blank">Please tell us!</a
					>
				</p>
			</div>
		</div>
		<div class="flex flex-col items-center gap-4">
			<p class="font-normal text-center tooltip w-48 sm:w-full">
				Created in Boston in association with:
			</p>
			<div
				class="flex sm:gap-10 flex-wrap flex-col sm:flex-row justify-center bg-white p-4 rounded-[2em] sm:rounded-full divide-y divide-slate-300 sm:divide-none"
			>
				<a
					href="https://community.massenergize.org/fairmount-boston/"
					class="border-0 pb-4 sm:p-0"
					target="_blank"
				>
					<img
						src="assets/logos/ficc-logo.png"
						alt="FICC logo"
						class="h-[3em]"
					/>
				</a>
				<a
					href="https://elab.emerson.edu"
					class="border-0 py-4 sm:p-0"
					target="_blank"
				>
					<img
						src="assets/logos/elab-logo.png"
						alt="Engagement Lab logo"
						class="h-[3em]"
					/>
				</a>
				<a
					href="https://airpartners.org"
					class="border-0 pt-4 sm:p-0"
					target="_blank"
				>
					<img
						src="assets/logos/air-partners-logo.png"
						alt="Air Partners logo"
						class="h-[3em]"
					/>
				</a>
			</div>
		</div>
	</div>
</div>

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
