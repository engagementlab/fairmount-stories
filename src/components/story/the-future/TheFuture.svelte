<script>
	import SectionHeader from "$components/story/SectionHeader.svelte";
	import ScrollSection from "$components/helpers/ScrollSection.svelte";
	import EjFeature from "$components/story/the-future/EjFeature.svelte";
	import AirQualityInteractive from "$components/story/the-future/AirQualityInteractive.svelte";

	const HeaderText = "Moving into the future";

	const AQSteps = [
		{
			backgroundSticky: "start",
			textOnTop: true,
			sticky: "start",
			narration:
				"The big effort right now is reducing the negative health impacts of the Fairmount Line.",
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-in-bg.png",
				"assets/story/full-train-zoom-in.png",
				"assets/story/arial-zoom-in-fg.png"
			],
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			backgroundSticky: "middle",
			textOnTop: true,
			sticky: "middle",
			narration:
				"Currently, the engines that move the trains are powered by diesel fuel.",
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-in-bg.png",
				"assets/story/full-train-zoom-in.png",
				"assets/story/arial-zoom-in-fg.png"
			],
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			backgroundSticky: "middle",
			textOnTop: true,
			sticky: "middle",
			narration:
				"These engines release <span>diesel exhaust</span> into the air.",
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-in-bg.png",
				"assets/story/full-train-zoom-in.png",
				"assets/story/arial-zoom-in-fg.png"
			],
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			backgroundSticky: "middle",
			textOnTop: true,
			sticky: "end",
			narration:
				"Let's take a look at what's in the air around the Fairmount Line.",
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-in-bg.png",
				"assets/story/full-train-zoom-in.png",
				"assets/story/arial-zoom-in-fg.png"
			],
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			sticky: "start",
			backgroundSticky: "end",
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-in-bg.png",
				"assets/story/full-train-zoom-in.png",
				"assets/story/arial-zoom-in-fg.png"
			]
		},
		{
			sticky: "middle",
			fixBackground: true,
			componentFullScreen: AirQualityInteractive,
			backgroundImages: ["assets/story/arial-focus.jpg"]
		},
		{
			textOnTop: true,
			sticky: "start",
			body: "One train passing by isn't that bad...",
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-in-bg.png",
				"assets/story/full-train-zoom-in.png",
				"assets/story/arial-zoom-in-fg.png"
			]
		},
		{
			textOnTop: true,
			sticky: "middle",
			body: "...but many trains per day...",
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-mid-bg.png",
				"assets/story/full-train-zoom-mid.png",
				"assets/story/arial-zoom-mid-fg.png"
			]
		},
		{
			textOnTop: true,
			sticky: "middle",
			body: "...even more trains per week...",
			backgroundImages: [
				"assets/story/arial-texture-bg-sm.jpg",
				"assets/story/arial-zoom-out-bg.png",
				"assets/story/full-train-zoom-out.png",
				"assets/story/arial-zoom-out-fg.png"
			]
		},
		{
			textOnTop: true,
			sticky: "middle",
			backgroundSticky: "start",
			body: "...starts to add up, meaning that there's a <span>higher concentration of particulate matter in the air.</span>",
			backgroundImages: [
				"assets/story/arial-texture-bg-sm.jpg",
				"assets/story/arial-zoom-out-more-bg.png",
				"assets/story/full-train-zoom-out-more.png",
				"assets/story/arial-zoom-out-more-fg.png"
			]
		},
		{
			textOnTop: true,
			sticky: "end",
			backgroundSticky: "end",
			body: "This means that the air quality is less healthy. <br> Curious about the impacts on the surrounding community? <span><a href='https://docs.google.com/document/d/165glMsKTi2KzDevNZabPY921dweCCRC2VsjuTxRbvHI/edit?usp=sharing' target='_blank'>Learn more at Air Partners!</a></span>",
			backgroundImages: [
				"assets/story/arial-texture-bg-sm.jpg",
				"assets/story/arial-zoom-out-more-bg.png",
				"assets/story/full-train-zoom-out-more.png",
				"assets/story/arial-zoom-out-more-fg.png"
			],
			backgroundMap: {
				lng: -71.09,
				lat: 42.3232,
				zoom: 11,
				visibleFeatures: ["asthma"]
			},
			hideBackgroundMap: true
		},
		{
			fixBackground: true,
			textOnTop: true,
			body: "Air quality is especially important because these communities already have higher rates of asthma, specifically among children. <span>About 20% of the population under 18 suffers from asthma.</span>",
			backgroundMap: {
				lng: -71.09,
				lat: 42.3232,
				zoom: 11,
				visibleFeatures: ["asthma", "tracks"]
			},
			citationText:
				"Map data: Community Voices from the Fairmount Corridor Project",
			citationLink:
				"https://sites.tufts.edu/jamesjennings/files/2020/01/reportsCommunityVoicesFairmoun2019.pdf"
		},
		{
			fixBackground: true,
			textOnTop: true,
			body: "Air pollution is a direct cause of asthma and other respiratory problems. <span>In older adults, poor air quality can also result in Chronic Obstructive Pulmonary Disease</span>, commonly known as COPD.",
			backgroundMap: {
				lng: -71.09,
				lat: 42.3232,
				zoom: 11,
				visibleFeatures: ["asthma", "tracks"]
			},
			citationText:
				"Map data: Community Voices from the Fairmount Corridor Project",
			citationLink:
				"https://sites.tufts.edu/jamesjennings/files/2020/01/reportsCommunityVoicesFairmoun2019.pdf"
		},
		{
			fixBackground: true,
			textOnTop: true,
			body: "These factors are in part why many of the areas along Fairmount Line are considered <span>Environmental Justice communities</span>. In essence, they bear the burden of local environmental problems.",
			backgroundMap: {
				lng: -71.09,
				lat: 42.3232,
				zoom: 11,
				visibleFeatures: ["ej", "tracks"]
			},
			citationText: "Map data: mass.gov",
			citationLink:
				"https://mass-eoeea.maps.arcgis.com/apps/webappviewer/index.html?id=1d6f63e7762a48e5930de84ed4849212"
		},
		{
			fixBackground: true,
			textOnTop: true,

			body: 'In Massachusetts, an area is considered an Environmental Justice community if any of the following are true: <br><br><div class="text-left"><li>the median household income is less than 65% of the statewide median</li><li>at least a 40% minority population</li><li>less than 25% of households identify as speaking English "very well"</li></div>',
			citation:
				"Source: <a href='https://www.mass.gov/environmental-justice' target='_blank'>mass.gov</a>",
			backgroundMap: {
				lng: -71.09,
				lat: 42.3232,
				zoom: 11,
				visibleFeatures: ["ej", "tracks"]
			},
			citationText: "Map data: mass.gov",
			citationLink:
				"https://mass-eoeea.maps.arcgis.com/apps/webappviewer/index.html?id=1d6f63e7762a48e5930de84ed4849212"
		}
	];

	const outroSteps = [
		{
			textOnTop: true,
			sticky: "start",
			narration:
				"When our community works together — as a whole and in a collective — we can get things done properly, with ethics and transparency.",
			narrationImage: "assets/story/narrator-head.png",
			id: "after-ej-prompt"
		},
		{
			textOnTop: true,
			sticky: "end",
			narration:
				"The work to come is challenging, but we can do it. <br> <br> <span>So let's live in the solution!</span>",
			narrationImage: "assets/story/narrator-head.png"
		}
	];
</script>

<section id="the-future">
	<SectionHeader {HeaderText} />
	<ScrollSection steps={AQSteps} />
	<EjFeature />
	<ScrollSection steps={outroSteps} backgroundColor="bg-lime-200" />
</section>
