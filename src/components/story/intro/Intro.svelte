<script>
	import ScrollSection from "$components/helpers/ScrollSection.svelte";
	import Landing from "$components/Landing.svelte";

	const steps = [
		{
			id: "welcome",
			componentFullScreen: Landing,
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-in-bg.png",
				"assets/story/full-train-zoom-in.png",
				"assets/story/arial-zoom-in-fg.png"
			],
			backgroundSticky: "start"
		},
		{
			id: "intro",
			sticky: "start",
			backgroundSticky: "middle",
			textOnTop: true,
			narration:
				"Hi there! My name is Maria. <br> Welcome to Dorchester, Massachusetts!",
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-in-bg.png",
				"assets/story/full-train-zoom-in.png",
				"assets/story/arial-zoom-in-fg.png"
			],
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			sticky: "middle",
			backgroundSticky: "middle",
			textOnTop: true,
			narration:
				"I've lived here my whole life. I am an educator and recently bought a townhouse close to the MBTA Fairmount commuter rail line. The Fairmount Line has become a big part of how I view my community now.",
			backgroundImages: [
				"assets/story/arial-texture-bg-lg.jpg",
				"assets/story/arial-zoom-in-bg.png",
				"assets/story/full-train-zoom-in.png",
				"assets/story/arial-zoom-in-fg.png"
			],
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			sticky: "end",
			backgroundSticky: "end",
			textOnTop: true,
			narration:
				"When I think of my community, things like access, unity, history, and action come to mind...",
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
			textOnTop: true,
			narration:
				"I live near the Four Corners / Geneva station on the Fairmount Line. For me, the Fairmount Line is connected to a lot of good memories.",
			backgroundImages: [
				"assets/story/four-corners-station.jpg",
				"assets/blank.png",
				"assets/story/four-corners-station-narrator-fg.png"
			]
		},
		{
			sticky: "middle",
			backgroundSticky: "start",
			textOnTop: true,
			narration:
				"I love taking my grandkids to the Boston Children's Museum — we get off at South Station in Downtown Boston.",
			backgroundImages: [
				"assets/story/train-ride-bg.png",
				"assets/blank.png",
				"assets/blank.png",
				"assets/story/train-ride.png"
			]
		},
		{
			sticky: "end",
			backgroundSticky: "middle",
			textOnTop: true,
			narration:
				"And it's just a 15-minute ride on the Fairmount Line! It saves me from having to take a bus and a train. I enjoy riding through my community as well!",
			backgroundImages: [
				"assets/story/train-ride-bg.png",
				"assets/story/train-ride.png"
			]
		},
		{
			sticky: "start",
			backgroundSticky: "start",
			textOnTop: true,
			narration:
				"The Fairmount Line has become a big part of my community, one I am really appreciative of.",
			backgroundImages: [
				"assets/story/four-corners-station.jpg",
				"assets/blank.png",
				"assets/story/four-corners-station-narrator-fg.png"
			]
		},
		{
			sticky: "end",
			backgroundSticky: "end",
			textOnTop: true,
			narration:
				"The line is a part of other communities nearby, too. <br><br> <span>Let me show you!</span>",
			backgroundImages: [
				"assets/story/four-corners-station.jpg",
				"assets/blank.png",
				"assets/story/four-corners-station-narrator-fg.png"
			]
		}
	];
</script>

<section id="welcome">
	<ScrollSection {steps} backgroundColor="bg-[#B5D334]" />
</section>
