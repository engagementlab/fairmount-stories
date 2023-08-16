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
				"One big effort right now is getting the Fairmount Line to be better for the health of our community and planet.",
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
				"Right now, the engines that move the trains get their energy from diesel fuel.",
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
				"When the engine revs up, it releases <span>diesel exhaust</span> into the air.",
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-in-bg.png",
				"assets/story/full-train-zoom-in.png",
				"assets/story/arial-zoom-in-fg.png"
			],
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			backgroundSticky: "end",
			textOnTop: true,
			sticky: "middle",
			narration: "Let’s take a look at what's in that exhaust.",
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
			fixBackground: true,
			componentFullScreen: AirQualityInteractive,
			backgroundImages: ["assets/story/arial-focus.jpg"]
		},
		{
			textOnTop: true,
			sticky: "start",
			body: "One train passing by isn’t that bad...",
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
			body: "...starts to add up, meaning that there’s a <span>higher concentration of particulate matter in the air.</span>",
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
			body: "This means that the air quality is less healthy. <br> <br> Curious about the impacts on the surrounding community? <span><a href='https://docs.google.com/document/d/165glMsKTi2KzDevNZabPY921dweCCRC2VsjuTxRbvHI/edit?usp=sharing' target='_blank'>Click Here!</a></span>",
			backgroundImages: [
				"assets/story/arial-texture-bg-sm.jpg",
				"assets/story/arial-zoom-out-more-bg.png",
				"assets/story/full-train-zoom-out-more.png",
				"assets/story/arial-zoom-out-more-fg.png"
			]
		}
	];

	const EJSteps = [
		{
			fixBackground: true,
			textOnTop: true,
			body: "Air quality is especially important because these communities already have higher rates of Asthma, specifically among children. About 20% population under 18 suffers from Asthma.",
			backgroundMap: {
				lng: -71.09,
				lat: 42.3232,
				zoom: 11,
				visibleFeatures: ["asthma"]
			},
			citationText:
				"Map data: Community Voices from the Fairmount Corridor Project",
			citationLink:
				"https://sites.tufts.edu/jamesjennings/files/2020/01/reportsCommunityVoicesFairmoun2019.pdf"
		},
		{
			fixBackground: true,
			textOnTop: true,
			body: "Air pollution is a direct cause of and other respiratory problems. In older adults, poor air quality can also result in Chronic Obstructive Pulmonary Disease, commonly known as COPD.",
			backgroundMap: {
				lng: -71.09,
				lat: 42.3232,
				zoom: 11,
				visibleFeatures: ["asthma"]
			},
			citationText:
				"Map data: Community Voices from the Fairmount Corridor Project",
			citationLink:
				"https://sites.tufts.edu/jamesjennings/files/2020/01/reportsCommunityVoicesFairmoun2019.pdf"
		},
		{
			fixBackground: true,
			textOnTop: true,
			body: "These factors are in part why many of the areas along Fairmount Line are considered <span>Environmental Justice communities</span>.",
			backgroundMap: {
				lng: -71.09,
				lat: 42.3232,
				zoom: 11,
				visibleFeatures: ["ej"]
			},
			citationText: "Map data: mass.gov",
			citationLink:
				"https://mass-eoeea.maps.arcgis.com/apps/webappviewer/index.html?id=1d6f63e7762a48e5930de84ed4849212"
		},
		{
			fixBackground: true,
			textOnTop: true,

			body: 'In Massachusetts, an area is considered an Environmental Justice Community if any of the following are true: <br><br><div class="text-left"><li>the median household income is less than 65% the statewide median</li><li>at least a 40% minority population</li><li>less than 25% households identify as speaking English "very well"</li></div><br>– mass.gov',
			backgroundMap: {
				lng: -71.09,
				lat: 42.3232,
				zoom: 11,
				visibleFeatures: ["ej"]
			},
			citationText: "Map data: mass.gov",
			citationLink:
				"https://mass-eoeea.maps.arcgis.com/apps/webappviewer/index.html?id=1d6f63e7762a48e5930de84ed4849212"
		},
		{
			fixBackground: true,
			textOnTop: true,
			body: "There are other neighborhoods in Boston that experience similar issues. The communities that bear the burden of environmental problems are known as <span>Environmental Justice communities</span>.",
			backgroundMap: {
				lng: -71.09,
				lat: 42.3232,
				zoom: 11,
				visibleFeatures: ["ej"]
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
				"I like that, when our community really needs to get things done – as a whole, in a collective – we can get things done. When we work together, it's evident that things can and do get done properly. And with ethics and transparency when we work together.",
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
	<ScrollSection steps={EJSteps} />
	<EjFeature />
	<ScrollSection steps={outroSteps} backgroundColor="bg-lime-200" />
</section>
