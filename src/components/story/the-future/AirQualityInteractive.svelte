<script>
	import AirQualityPopout from "$components/story/the-future/AirQualityPopout.svelte";
	import Chip from "$components/story/the-future/AirQuality.Chip.svelte";
	import {
		Bus,
		Car,
		Globe2,
		Train,
		TreeDeciduous,
		Truck,
		Wind
	} from "lucide-svelte";
</script>

<div class="w-full m-auto max-w-screen-lg relative h-screen">
	<div class="absolute w-full left-0 top-[6em] sm:botton-[5vh] flex px-10">
		<h4
			class="m-auto tooltip text-center drop-shadow-lg bg-white/40 rounded-full py-2 px-4"
		>
			Click on an icon to learn more about what's in the Air!
		</h4>
	</div>
	<div class="clean-air absolute left-[30%] top-[10%]">
		<AirQualityPopout
			title="clean<br>air"
			iconSrc={"assets/story/clean-air-icon.png"}
			color="#8ebb5c"
		>
			<p slot="description">
				Clean air is mostly Nitrogen, but also contains Oxygen (which plants
				produce and which keeps all life alive), Argon, and trace gases like
				Carbon dioxide.
			</p>
			<div slot="sources" class="flex flex-wrap gap-3">
				<Chip icon={Globe2}>Mother Earth</Chip>
			</div>
			<p slot="effects">
				Clean air - especially the oxygen that feeds your body - is essential
				for life to thrive. Breathing clean air keeps you healthy and happy!
			</p>
		</AirQualityPopout>
	</div>
	<div class="natural-particles absolute right-[15%] top-[27%]">
		<AirQualityPopout
			title="natural<br>particles"
			iconSrc={"assets/story/natural-particles-icon.png"}
			color="#f0ba53"
			><p slot="description">
				Clean air contains particles from natural sources, including pollen from
				plants, wind-blown dust, and sea spray particles.
			</p>
			<div slot="sources" class="flex flex-wrap gap-3">
				<Chip icon={TreeDeciduous}>Plants</Chip>
				<Chip icon={Wind}>Wind</Chip>
			</div>
			<p slot="effects">
				Many people have allergic reactions to pollen and dust, but these
				impacts are temporary and easily treated. Naturally occurring particles
				don't cause long-term health problems.
			</p></AirQualityPopout
		>
	</div>
	<div class="exhaust-gases absolute left-[10%] top-[43%]">
		<AirQualityPopout
			title="exhaust<br>gases"
			iconSrc={"assets/story/exhaust-gases-icon.png"}
			color="#5e9fad"
		>
			<p slot="description">
				When fossil fuels are burned, a complex mixture of particles and gases
				is generated. Gases from diesel vehicles include nitrogen oxides (NOx),
				carbon monoxide (CO), carbon dioxide (CO2), and hydrocarbons (HC)
				including semivolatile organic compounds (SVOC).
			</p>
			<div slot="sources" class="flex flex-wrap gap-3">
				<Chip icon={Train}>Diesel Trains</Chip>
				<Chip icon={Bus}>Buses</Chip>
				<Chip icon={Truck}>Trucks</Chip>
				<Chip icon={Car}>Cars</Chip>
			</div>
			<p slot="effects">
				Different gases impact the human body in different ways. CO can
				interfere with oxygen transport in the blood, NOx is associated with
				asthma and respiratory disease, and HC (especially SVOC) are associated
				with diseases including brain disease and cancer.
			</p>
		</AirQualityPopout>
	</div>
	<div class="exhaust-particles absolute right-[28%] top-[65%]">
		<AirQualityPopout
			title="exhaust<br>particles"
			iconSrc={"assets/story/exhaust-particles-icon.png"}
			color="#b53da8"
		>
			<p slot="description">
				When fossil fuels are burned, a complex mixture of particles and gases
				is generated. The particles include soot, black carbon, heavy metals,
				and ultrafine particles.
			</p>
			<div slot="sources" class="flex flex-wrap gap-3">
				<Chip icon={Train}>Diesel Trains</Chip>
				<Chip icon={Bus}>Buses</Chip>
				<Chip icon={Truck}>Trucks</Chip>
				<Chip icon={Car}>Cars</Chip>
			</div>
			<p slot="effects">
				Exhaust particles like soot and ultrafine particles are associated with
				cardiovascular disease, neurological disorders, and cancers.
			</p>
		</AirQualityPopout>
	</div>
</div>
