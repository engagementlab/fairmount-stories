<script>
	import { setContext } from "svelte";
	import Meta from "$components/Meta.svelte";
	import CategoryPage from "$components/take-action/CategoryPage.svelte";
	import copy from "$data/copy.json";
	import { Megaphone } from "lucide-svelte";

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
		icon: Megaphone,
		title: "Self Advocacy",
		description:
			"By speaking up about issues that matter to you, you can contribute to the positive changes you wish to see — just like the residents who shared their stories on this website!<br><br><span>Learn how to advocate for a better Fairmount Line below!</span>",
		actionItems: [ 
			{
				title: "Tell Governor Healey to electrify the line!",
				description:
					"Use this email template as a quick and easy way to tell our Governor that we want her to use her powers to make an electric Fairmount Line a reality!",
				linkUrl: "https://actionnetwork.org/letters/tell-governor-healey-we-need-electrification-15-minute-headways-on-the-fairmount-line"
			},
			{
				title: "Share your story",
				description:
					"Sharing your voice makes your experience heard. It's also a great first step in building solidarity and solutions for your family and your community.",
				linkUrl: "https://forms.gle/64zTMdFqUi3NrQVUA"
			},
			{
				title: "Get involved",
				description:
					"Click here to get in touch with the Fairmount Indigo CDC Collaborative (FICC)!",
				linkUrl: "https://linktr.ee/fairmountcollab"
			},
			{
				title: "Check back for more",
				description:
					"As time goes on, we will continue to add more ways for you to take action!"
			}
		]
	};
</script>

<Meta {title} {description} {url} {preloadFont} {keywords} />
<CategoryPage {...info} />
