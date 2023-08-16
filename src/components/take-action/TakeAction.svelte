<script>
	import CategoryItem from "$components/take-action/CategoryItem.svelte";
	import { BookOpen, Landmark, Megaphone } from "lucide-svelte";

	let educationInfo = {
		icon: BookOpen,
		title: "Education",
		description:
			"Learn more about environmental justice, and climate change in your community!",
		linkUrl: "take-action/education",
		linkText: "Get Resources"
	};
	let selfAdvocacyInfo = {
		icon: Megaphone,
		title: "Self Advocacy",
		description:
			"Positive change begins with speaking up! If you wish to see a change in your neighborhood, share it here!",
		linkUrl: "take-action/self-advocacy",
		linkText: "Try it out"
	};
	let policyChangeInfo = {
		icon: Landmark,
		title: "Policy Change",
		description:
			" Discover more about how legislative bodies are working to improve the Fairmount Line and what you can do!",
		linkUrl: "take-action/policy-change",
		linkText: "Get Involved"
	};
</script>

<section id="take-action" class="py-28 bg-lime-200 flex flex-col gap-10">
	<h1 class="text-lime-700 sm:text-[7em] text-center max-w-screen-lg m-auto">
		Here's what you can do:
	</h1>
	<div class="flex flex-col w-screen">
		<div
			class="m-auto flex flex-col justify-center w-full h-full max-w-screen-xl gap-5"
		>
			<div class="w-full flex justify-stretch flex-wrap items-stretch">
				<CategoryItem {...educationInfo} />
				<CategoryItem {...selfAdvocacyInfo} />
				<CategoryItem {...policyChangeInfo} />
			</div>
		</div>
	</div>
</section>
