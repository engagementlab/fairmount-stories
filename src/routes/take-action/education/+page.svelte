<script>
	import { setContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import CategoryPage from "$components/take-action/CategoryPage.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import { BookOpen } from "lucide-svelte";

	export let data;

	version();

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
				title: "More coming soon!",
				description:
					"In the coming weeks, we'll be adding more ways for you to take action. Check back soon!"
			}
		]
	};
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<CategoryPage {...info} />
