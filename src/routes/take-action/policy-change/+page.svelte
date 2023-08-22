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
					"Get up to speed on the language of the bill, and what changes could come to the Fairmount Line if it were passed.",
				linkUrl: "https://malegislature.gov/Bills/192/S2280/Senate/Bill/"
			},
			{
				title: "Write to your legislators",
				description:
					"It's quick and easy to ask your state legislators to co-sponsor this crucial bill for health and equity in our neighborhoods.",
				linkUrl:
					"https://actionnetwork.org/letters/ask-your-legislators-to-co-sponsor-environmental-justice-bill-for-the-fairmount-corridor-commuter-rail"
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
