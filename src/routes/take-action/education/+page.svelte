<script>
	import { setContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import CategoryPage from "$components/take-action/CategoryPage.svelte";
	import copy from "$data/copy.json";
	import { BookOpen } from "lucide-svelte";

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
		icon: BookOpen,
		title: "Education",
		description:
			"Congrats on viewing this website! Learning about the work being done to improve the Fairmount Line is a great first step. <br><br><span>Check out resources from FICC below!</span>",
		actionItems: [
			{
				title: "Attend a workshop",
				description:
					"Curious about air quality? Want to learn about cleaner methods of transit? Attend a workshop to learn more!",
				linkUrl: "https://community.massenergize.org/fairmount-boston/events"
			},
			{
				title: "Share this website",
				description:
					"Did you learn anything valuable from this website? If you believe it was helpful, you can educate your network too!",
				linkUrl: "/share"
			},
			{
				title: "A Better Fairmount Line",
				description:
				"This report gives more details about the Fairmount Line and analyzes the advantages of potential infrastructure and service improvements for the line, proposing upgrades and changes along its corridor.",
				linkUrl: "https://files.elab.works/fairmountstories/transitmatters-fairmount-report-2020.pdf"
			},
			{
				title: "Learn about climate change & our health",
				description:
				"Watch this super helpful 12-minute video, created by the Massachusetts Medical Society, about climate change’s impact on our health in Massachusetts and beyond.",
				linkUrl: "https://community.massenergize.org/fairmount-boston/actions/3002"
			},
			{
				title: "Check back for more",
				description:
				"As time goes on, we will continue to add new and relevant resources!",
			}
		]
	};
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<CategoryPage {...info} />
