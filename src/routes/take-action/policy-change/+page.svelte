<script>
	import { setContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import CategoryPage from "$components/take-action/CategoryPage.svelte";
	import copy from "$data/copy.json";
	import version from "$utils/version.js";
	import { Landmark } from "lucide-svelte";

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
		icon: Landmark,
		title: "Policy Change",
		description:
			"Did you know that there’s a Bill that would support electrifying  the Fairmount Line? Learn how you can contribute to the passing of this policy by attending public bill hearings and supporting policy advocacy work.",
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
