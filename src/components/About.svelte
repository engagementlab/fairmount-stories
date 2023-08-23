<script>
	import Footer from "$components/Footer.svelte";
	import { MoveLeft } from "lucide-svelte";
	import { fade, fly } from "svelte/transition";
</script>

<div class="flex w-screen bg-slate-800 p-10 pt-40">
	<div class="m-auto w-full max-w-screen-md flex flex-col gap-5">
		<div class="flex">
			<a
				href="../"
				class="border-0 group"
				in:fade={{ duration: 500, delay: 400 }}
			>
				<div
					class="flex items-center gap-1 bg-white/5 transition group-hover:-translate-x-1 rounded-full py-2 px-4 text-slate-400 group-hover:bg-white/30 group-hover:text-white"
				>
					<MoveLeft class="transition group-hover:-translate-x-1" />
					<p class="tooltip text-sm">BACK</p>
				</div>
			</a>
		</div>
		<div class="m-auto w-full flex flex-col gap-24">
			<div
				class="flex flex-col gap-4"
				in:fly={{ y: 20, duration: 500, delay: 100 }}
			>
				<h1 class="sm:text-[6em] text-white">About</h1>
				<p class="text-white">
					Informed by values of trust, care, inclusion, and justice, this
					project aims to create community and support Environmental Justice
					advocacy efforts through multimedia storytelling and education. The
					purpose of this website and our project at large is to support the
					<a
						href="https://community.massenergize.org/fairmount-boston/"
						target="_blank"
						class="hover:text-yellow-500 transition underline border-0 underline-offset-4 decoration-2"
						>Fairmount Indigo CDC Collaborative's</a
					> advocacy in educating their community about climate justice and transit
					equity by visualizing relationships between people, their communities,
					transit, and air quality.
				</p>
			</div>
			<div
				class="flex gap-10 flex-wrap items-baseline"
				in:fly={{ y: 20, duration: 500, delay: 200 }}
			>
				<h2 class="text-white basis-1/4 min-w-[5.5em]">Our Process</h2>
				<p class="text-white">
					The Fairmount Line has many stories attached to it and in our work we
					have tried to represent some of those stories. By speaking with
					members of the community, our team has been able to create a rich,
					nuanced and unfiltered image of the line. Our project took 8 months in
					the making - including field research, community connections, and
					resident interviews - and involved people from different streams with
					varied skills. We hope our work is successful in being a resource for
					the community - a tool for education and engagement.
				</p>
			</div>
			<div
				class="flex gap-10 flex-wrap items-baseline"
				in:fly={{ y: 20, duration: 500, delay: 150 }}
			>
				<h2 class="text-white basis-1/4 min-w-[5.5em]">Contributors</h2>
				<div class="flex flex-col gap-10">
					<div class="flex flex-col gap-3">
						<p class="text-white">
							<a
								href="https://jasperkatzban.com"
								target="_blank"
								class="hover:text-yellow-500 transition underline border-0 underline-offset-4 decoration-2"
								>Jasper Katzban</a
							> - Site Design & Development
						</p>
						<p class="text-white">
							Riddhima Dave - Design & Communications Management
						</p>
						<p class="text-white">Emerson Holloway - Design & Administration</p>
						<p class="text-white">Jennifer J. Lee - Website Illustrations</p>
					</div>
					<p class="text-white">
						The <a
							href="https://community.massenergize.org/fairmount-boston/"
							target="_blank"
							class="hover:text-yellow-500 transition underline border-0 underline-offset-4 decoration-2"
							>Fairmount Indigo CDC Collaborative</a
						>
						and the
						<a
							href="https://www.dbedc.org"
							target="_blank"
							class="hover:text-yellow-500 transition underline border-0 underline-offset-4 decoration-2"
							>Dorchester Bay Economic Development Corporation</a
						>, including Andrealis Martinez and Kendra Beaver.
					</p>
					<p class="text-white">
						The <a
							href="https://airpartners.org"
							target="_blank"
							class="hover:text-yellow-500 transition underline border-0 underline-offset-4 decoration-2"
						>
							Air Partners</a
						>
						team at
						<a
							href="https://olin.edu"
							target="_blank"
							class="hover:text-yellow-500 transition underline border-0 underline-offset-4 decoration-2"
							>Olin College</a
						>, including Scott Hersey and Francesca Majluf.
					</p>
					<p class="text-white">
						The <a
							href="https://elab.emerson.edu"
							target="_blank"
							class="hover:text-yellow-500 transition underline border-0 underline-offset-4 decoration-2"
							>Engagement Lab</a
						>
						at
						<a
							href="https://emerson.edu"
							target="_blank"
							class="hover:text-yellow-500 transition underline border-0 underline-offset-4 decoration-2"
							>Emerson College</a
						>, including Eric Gordon and Rachele Gardner.
					</p>
					<p class="text-white">
						Additional funding provided by the <a
							href="https://www.barrfoundation.org"
							target="_blank"
							class="hover:text-yellow-500 transition underline border-0 underline-offset-4 decoration-2"
							>Barr Foundation</a
						>.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
<Footer />
