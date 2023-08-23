<script>
	import SectionHeader from "$components/story/SectionHeader.svelte";
	import ScrollSection from "$components/helpers/ScrollSection.svelte";
	import PromptMeansToYou from "$components/story/at-a-glance/PromptFLMeansToYou.svelte";

	const HeaderText = "At A Glance";

	const steps1 = [
		{
			fixBackground: true,
			body: "The Fairmount Line consists of 9 stops throughout Boston.",
			backgroundMap: {
				lng: -71.12,
				lat: 42.295,
				zoom: 10.5,
				visibleFeatures: [
					"tracks",
					"tracks",
					"uphams-corner",
					"four-corners",
					"talbot-avenue",
					"morton-street",
					"fairmount",
					"readville",
					"blue-hill-avenue",
					"newmarket",
					"south-station"
				],
				offsetMapPos: true
			}
		},
		{
			fixBackground: true,
			body: "The Fairmount Line services four major neighborhoods, and has the highest <span>percentage of ridership comprised of people of color in low to middle income households</span> in the MBTA commuter system.",
			backgroundMap: {
				lng: -71.12,
				lat: 42.295,
				zoom: 10.5,
				visibleFeatures: ["tracks", "neighborhoods"],
				offsetMapPos: true
			}
		},
		{
			fixBackground: true,
			body: "The line is within the limits of the City of Boston, similar to the city's subways and light rail. <span>Despite this, it's still classified as a commuter rail line.</span>",
			backgroundMap: {
				lng: -71.12,
				lat: 42.295,
				zoom: 10.5,
				visibleFeatures: ["tracks", "city-limits"],
				offsetMapPos: true
			}
		},
		{
			fixBackground: true,
			body: "It takes only 30 minutes for a train to complete its 9 mile course one-way, <span>making it a faster option for residents than driving or taking the bus.</span> ",
			narration:
				"If I'm going to South Station, we're gonna take the commuter rail as opposed to taking the bus and then another train.",
			narrationImage: "assets/story/narrator-head.png",
			backgroundMap: {
				lng: -71.12,
				lat: 42.295,
				zoom: 10.5,
				visibleFeatures: [
					"tracks",
					"transit-options",
					"readville",
					"south-station"
				],
				offsetMapPos: true
			}
		}
	];

	const steps2 = [
		{
			sticky: "start",
			textOnTop: true,
			narration:
				"As you and others have shared, the Fairmount Line means many things to many people.",
			narrationImage: "assets/story/narrator-head.png",
			id: "after-share-prompt"
		},
		{
			sticky: "end",
			textOnTop: true,
			narration:
				"But it didn't always look the way it does today. Did you know there's a long history of community action on the Fairmount Line? <br><br><strong>Let me tell you about it!</strong>",
			narrationImage: "assets/story/narrator-head.png"
		}
	];
</script>

<section id="at-a-glance">
	<SectionHeader {HeaderText} />
	<ScrollSection steps={steps1} />
	<PromptMeansToYou />
	<ScrollSection steps={steps2} backgroundColor="bg-yellow-100" />
</section>
