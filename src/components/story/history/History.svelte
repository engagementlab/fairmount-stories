<script>
	import SectionHeader from "$components/story/SectionHeader.svelte";
	import ScrollSection from "$components/helpers/ScrollSection.svelte";
	import PromptHowOften from "$components/story/history/PromptHowOften.svelte";

	const HeaderText = "Building for the Community";

	const steps = [
		{
			sticky: "start",
			backgroundSticky: "start",
			narration:
				"Growing up in the 70’s, I remember how the line passed right next to my back yard, but it didn’t actually stop anywhere near my house.",
			backgroundImages: ["assets/story/fl-train-old.jpg"],
			narrationImage: "assets/story/narrator-head.png",
			backgroundMap: {
				hide: true,
				lng: -71.12,
				lat: 42.295,
				zoom: 10.5,
				visibleFeatures: [],
				offsetMapPos: true
			}
		},
		{
			backgroundSticky: "middle",
			sticky: "end",
			narration:
				"To actually serve the communities it runs through, we needed more stations to be built along the Line.",
			backgroundImages: ["assets/story/fl-train-old.jpg"],
			narrationImage: "assets/story/narrator-head.png",
			backgroundMap: {
				hide: true,
				lng: -71.12,
				lat: 42.295,
				zoom: 10.5,
				visibleFeatures: [
					"tracks",
					"uphams-corner",
					"four-corners-gray",
					"talbot-avenue-gray",
					"morton-street",
					"fairmount",
					"readville",
					"blue-hill-avenue-gray",
					"newmarket-gray",
					"south-station"
				],
				offsetMapPos: true
			}
		},
		{
			fixBackground: true,
			year: "2005",
			title: "Action to Increase Stops",
			body: "Due to pressure from community activists and the EPA, the MBTA agreed to make improvements to the existing Fairmount Line and begin efforts to add more stops. <br> <span>Thanks to these efforts, access and connectivity for the Fairmount Corridor improved considerably.</span> <br/> <br/>Curious about transit accessibility in your area? <br/> <a href='https://alltransit.cnt.org/metrics/' target='_blank'>Check out the AllTransit tool!</a>",
			backgroundMap: {
				lng: -71.12,
				lat: 42.295,
				zoom: 10.5,
				visibleFeatures: [
					"tracks",
					"uphams-corner",
					"four-corners-gray",
					"talbot-avenue-gray",
					"morton-street",
					"fairmount",
					"readville",
					"blue-hill-avenue-gray",
					"newmarket-gray",
					"south-station"
				],
				offsetMapPos: true
			},
			imageLeft: "assets/story/history-activism-3.jpg",
			imageRight: "assets/story/history-construction-2.jpg"
		},
		{
			fixBackground: true,
			narration:
				"Before 2012, we only had three stops plus the terminals at South Station and Readville. I’ve lived here for 52 years, but until 2013 we didn’t even have my station, Four Corners.",
			backgroundMap: {
				lng: -71.12,
				lat: 42.295,
				zoom: 10.5,
				visibleFeatures: [
					"tracks",
					"uphams-corner",
					"four-corners-gray",
					"talbot-avenue-gray",
					"morton-street",
					"fairmount",
					"readville",
					"blue-hill-avenue-gray",
					"newmarket-gray",
					"south-station"
				],
				offsetMapPos: true
			},
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			fixBackground: true,
			year: "2012-2019",
			title: "5 More Stops Added",
			backgroundMap: {
				lng: -71.12,
				lat: 42.295,
				zoom: 10.5,
				visibleFeatures: [
					"tracks",
					"uphams-corner",
					"four-corners-new",
					"talbot-avenue-new",
					"morton-street",
					"fairmount",
					"readville",
					"blue-hill-avenue-new",
					"newmarket-new",
					"south-station"
				],
				offsetMapPos: true
			},
			narration:
				"As part of the Fairmount Indigo Transit Coalition, me and others along the line pushed for five more stops to be built.",
			narrationImage: "assets/story/narrator-head.png",
			imageLeft: "assets/story/history-activism-2.jpg",
			imageRight: "assets/story/history-construction-1.jpg",
			citation:
				"Source: <a href='https://www.bostonplans.org/planning/planning-initiatives/fairmount-indigo-planning-initiative' target='_blank'>FICC, Boston Planning & Development Agency</a>"
		},
		{
			narration:
				"The mayor, city officials, and local health leaders came together with community advocates to help get these stops built. Seeing the end result made me feel really good to be a part of making it happen!",
			narrationImage: "assets/story/narrator-head.png",
			backgroundImages: ["assets/story/blue-hill-stop-open.jpg"],
			citationText: "Image: Fairmount Indigo Planning Initiative",
			citationLink:
				"https://www.bostonplans.org/planning/planning-initiatives/fairmount-indigo-planning-initiative"
		},
		{
			fixBackground: true,
			year: "2020",
			title: "More Frequent Trains",
			body: "In an effort to increase <span>transit equity</span>, the MBTA piloted a program to run trains every 45 minutes on weekdays. This schedule was made permanent in 2022.",
			narration:
				"Every 45 minutes is pretty frequent, and you can plan around that. But you know, they could bring it down to 30 minutes or less. Two times an hour would really make it easier to get in and out of Boston.",
			narrationImage: "assets/story/narrator-head.png",
			backgroundImages: ["assets/story/four-corners-station-people-1.jpg"],
			componentInline: PromptHowOften
		},
		{
			fixBackground: true,
			sticky: "start",
			year: "2022",
			title: "Ridership Increases",
			body: "Today, there are significantly more riders on the line than before Covid. <span>Ridership is now at 130% of 2019 levels.</span>",
			citation:
				"Source: <a href='https://www.mbta.com/news/2023-06-02/fairmount-line-ridership-reaches-new-all-time-high-fairmount-ridership-130-pre?utm_campaign=curated-content&utm_content=Fairmount+Line+Ridership+Reaches+New+All-Time+High%2C+Fairmount+Ridership+at+130%25+of+pre-COVID+levels+in+May+2023&utm_medium=sidebar&utm_source=hub&utm_term=commuter-rail' target='_blank'>MBTA</a>",
			backgroundImages: ["assets/story/four-corners-station-people-2.jpg"],
			id: "after-often-prompt"
		},
		{
			sticky: "end",
			fixBackground: true,
			year: "2022",
			title: "Ridership Increases",
			body: "Today, there are significantly more riders on the line than before Covid. <span>Ridership is now at 130% of 2019 levels.</span>",
			citation:
				"Source: <a href='https://www.mbta.com/news/2023-06-02/fairmount-line-ridership-reaches-new-all-time-high-fairmount-ridership-130-pre?utm_campaign=curated-content&utm_content=Fairmount+Line+Ridership+Reaches+New+All-Time+High%2C+Fairmount+Ridership+at+130%25+of+pre-COVID+levels+in+May+2023&utm_medium=sidebar&utm_source=hub&utm_term=commuter-rail' target='_blank'>MBTA</a>",
			backgroundImages: ["assets/story/four-corners-station-people-3.jpg"]
		},
		{
			fixBackground: true,
			year: "Today",
			title: "A Staple of the Community",
			body: "Thanks to years of local and state efforts, the train has become an important source of transit access that is efficient and simple for the communities it serves.",
			backgroundImages: ["assets/story/four-corners-station-people-all.jpg"],
			narration:
				"But our fight doesn’t end there. This long legacy of community-led action continues today!",
			narrationImage: "assets/story/narrator-head.png"
		},
		{
			fixBackground: true,
			year: "The Future",
			title: "Equity beyond Access",
			body: "“The term “equity” means the consistent and systematic fair, just, and impartial treatment of all individuals, including individuals who belong to underserved communities that have been denied such treatment.”",
			citation:
				"Source: <a href='https://www.planning.dot.gov/planning/topic_transportationequity.aspx' target='_blank'>U.S.  Department of Transportation</a>",
			backgroundImages: ["assets/story/four-corners-station-people-all.jpg"],
			narration:
				"Access, as important as it is, is not equity. Our community is still working towards broader transit equity.",
			narrationImage: "assets/story/narrator-head.png"
		}
	];
</script>

<section id="history">
	<SectionHeader {HeaderText} />
	<ScrollSection {steps} />
</section>
