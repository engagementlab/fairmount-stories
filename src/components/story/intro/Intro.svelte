<script>
	import ScrollSection from "$components/helpers/ScrollSection.svelte";
	import Landing from "$components/Landing.svelte";

	const steps = [
		{
			componentFullScreen: Landing,
			// backgroundImages: ["assets/story/landingScene.png"]
			backgroundImages: ["assets/story/Four-Corners-train.png"],
			backgroundSticky: "start"
		},
		{
			id: "intro",
			sticky: "start",
			backgroundSticky: "follow",
			textOnTop: true,
			narration:
				"Hi there! My name is Maria. <br> Welcome to Dorchester, Massachusetts!",
			// fixBackground: true,
			// backgroundImages: ["assets/story/landingScene.png"],
			backgroundImages: ["assets/story/Four-Corners-train.png"],
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			sticky: "middle",
			backgroundSticky: "follow",
			textOnTop: true,
			narration:
				"I’ve lived here my whole life. I am an educator and recently bought a townhouse close to the MBTA Fairmount commuter rail line. The Fairmount Line has become a big part of how I view my community now.",
			// fixBackground: true,
			// backgroundImages: ["assets/story/landingScene.png"],
			backgroundImages: ["assets/story/Four-Corners-train.png"],
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			sticky: "end",
			backgroundSticky: "follow",
			textOnTop: true,
			narration:
				"When I think of my community, things like access, unity, history, and action come to mind...",
			// fixBackground: true,
			// backgroundImages: ["assets/story/landingScene.png"],
			backgroundImages: ["assets/story/Four-Corners-train.png"],
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			sticky: "start",
			textOnTop: true,
			alignBottom: true,
			narration:
				"I live near the Four Corners / Geneva station on the Fairmount Line. For me, the Fairmount Line is connected to a lot of good memories",
			backgroundImages: ["assets/story/Four-Corners-train.png"]
		},
		{
			sticky: "middle",
			backgroundSticky: "start",
			textOnTop: true,
			alignBottom: true,
			narration:
				"I love taking my grandkids to the Boston Children’s Museum – we get off at South Station in Downtown Boston.",
			backgroundImages: ["assets/story/train-ride.png"]
		},
		{
			sticky: "end",
			backgroundSticky: "follow",
			textOnTop: true,
			alignBottom: true,
			narration:
				"And it’s just a 15-minute ride on the Fairmount Line! It saves me from having to take a bus and a train. I enjoy riding through my community as well!",
			backgroundImages: ["assets/story/train-ride.png"]
		},
		{
			sticky: "start",
			backgroundSticky: "start",
			textOnTop: true,
			narration:
				"The Fairmount Line has become a big part of my community, one I am really appreciative of.",
			backgroundImages: ["assets/story/Four-Corners-train.png"]
		},
		{
			sticky: "end",
			backgroundSticky: "follow",
			textOnTop: true,
			narration:
				"The line is a part of other communities nearby, too. <br><br> <span>Let me show you!</span>",
			backgroundImages: ["assets/story/Four-Corners-train.png"]
		}
	];
</script>

<section id="welcome">
	<ScrollSection {steps} />
</section>
