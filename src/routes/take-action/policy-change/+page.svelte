<script>
	import { setContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import CategoryPage from "$components/take-action/CategoryPage.svelte";
	import copy from "$data/copy.json";
	import { Landmark } from "lucide-svelte";

	export let data;

	const preloadFont = [
		"https://fonts.gstatic.com/s/vollkorn/v22/0yb9GDoxxrvAnPhYGxkpaE0Urhg0.woff2",
		"https://fonts.gstatic.com/s/staatliches/v11/HI_OiY8KO6hCsQSoAPmtMYebvpCfOMPT.woff2",
		"https://fonts.gstatic.com/s/robotoslab/v25/BngbUXZYTXPIvIBgJJSb6s3BzlRRfKOFbvjojISmYWRjV9Su1caiTVo.woff2"
	];

	const { title, description, url, keywords } = copy;
	setContext("copy", copy);
	setContext("data", data.data);

	let info = {
		icon: Landmark,
		title: "Policy Change",
		description:
			"The Fairmount Line Electrification Bill is currently being discussed in the Massachusetts State House. If passed, this bill would require the MBTA to make a plan to electrify the Fairmount Line, which would drastically reduce pollution caused by the train.<br><br><span>Click below to take action to support this bill!</span>",
		actionItems: [
			{
				title: "Read The Bill",
				description:
					"With the support of state legislators, advocates have filed a bill in the Massachusetts State House that, if passed, would require the MBTA to electrify the Fairmount Line, increase its frequency, and implement other affordability and accessibility measures.",
				linkUrl: "https://malegislature.gov/Bills/193/S2402"
			},
			{
				title: "Ask Governor Healey to electrify the Fairmount Line",
				description:
					"Use this email template as a quick and easy way to tell our Governor that we want her to use her powers to make an electric Fairmount Line a reality!",
				linkUrl:
					"https://actionnetwork.org/letters/tell-governor-healey-we-need-electrification-15-minute-headways-on-the-fairmount-line/"
			},
			{
				title: "More coming soon!",
				description:
					"In the coming weeks, we'll be adding more ways for you to take action. Check back soon!"
			}
		]
	};
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<CategoryPage {...info} />
