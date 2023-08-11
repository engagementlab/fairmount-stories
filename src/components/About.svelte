<script>
	import { MoveLeft } from "lucide-svelte";
	import { fade, fly } from "svelte/transition";
</script>

<div class="flex w-screen bg-slate-800 p-10 py-40">
	<div class="m-auto w-full max-w-screen-md flex flex-col gap-5">
		<div class="flex">
			<a
				href="../"
				class="border-0 sm:group"
				in:fade={{ duration: 500, delay: 400 }}
			>
				<div
					class="flex items-center gap-1 bg-white/5 transition group-hover:-translate-x-1 rounded-full py-2 px-4 text-slate-400 group-hover:bg-white/30 group-hover:text-white"
				>
					<MoveLeft />
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
					project aims to create community and support environmental justice
					advocacy efforts through multimedia storytelling and education. The
					purpose of this website and our project at large is to support the
					Fairmount Indigo CDC Collaborative's advocacy in educating their
					community about climate justice and transit equity by visualizing
					relationships between people, their communities, transit, and air
					quality.
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
					<p class="text-white">
						The Fairmount Indigo CDC Collaborative and the Dorchester Bay
						Economic Development Corporation, including Andrealis Martinez and
						Kendra Beaver.
					</p>
					<p class="text-white">
						The Air Partners team at Olin College, including Scott Hersey and
						Francesca Majluf.
					</p>
					<p class="text-white">
						The Engagement Lab at Emerson College, including Eric Gordon and
						Rachele Gardner.
					</p>
				</div>
			</div>
			<div
				class="flex gap-10 flex-wrap items-baseline"
				in:fly={{ y: 20, duration: 500, delay: 250 }}
			>
				<h2 class="text-white basis-1/4 min-w-[5.5em]">What's Next?</h2>
				<p class="text-white">text</p>
			</div>
		</div>
	</div>
</div>
