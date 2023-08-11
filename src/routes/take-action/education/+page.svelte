<script>
	import { setContext } from "svelte";
	import { browser } from "$app/environment";
	import Meta from "$components/Meta.svelte";
	import CategoryPage from "$components/take-action/CategoryPage.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";

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
		imgSrc: "../../assets/take-action/education-icon.png",
		title: "Education",
		description:
			"Congrats on viewing this website! Learning about the work being done to improve the Fairmount Line is a great first step. We’ve put together resources to help you learn more.",
		actionItems: [
			{
				title: "Action Item Title",
				description: "Brief Description of action item",
				linkUrl: "#"
			},
			{
				title: "Action Item Title",
				description: "Brief Description of action item",
				linkUrl: "#"
			},
			{
				title: "Action Item Title",
				description: "Brief Description of action item",
				linkUrl: "#"
			}
		]
	};
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<CategoryPage {...info} />
