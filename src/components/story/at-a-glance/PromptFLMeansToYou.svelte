<script>
	import OptionItem from "$components/story/at-a-glance/PromptFLMeansToYou.OptionItem.svelte";
	import NarratorItem from "$components/story/at-a-glance/PromptFLMeansToYou.NarratorItem.svelte";
	import ConsentInfo from "$components/helpers/ConsentInfo.svelte";
	import {
		RefreshCw,
		Clock4,
		AirVent,
		Watch,
		Sofa,
		Accessibility,
		ArrowLeftRight,
		CalendarClock,
		CircleDollarSign,
		Ear,
		HelpCircle,
		Sparkles,
		Users2
	} from "lucide-svelte";

	let submitted = false;

	const handleSubmit = () => {
		submitted = true;
	};

	let narratorOptions = [
		{
			labelTop: "easy",
			labelBottom: "transit",
			icon: ArrowLeftRight
		},
		{
			labelTop: "sustainable",
			labelBottom: "travel",
			icon: RefreshCw
		},
		{
			labelTop: "reliable",
			labelBottom: "trips",
			icon: Clock4
		}
	];

	let userOptions = [
		{
			labelTop: "easy",
			labelBottom: "transit",
			icon: ArrowLeftRight
		},
		{
			labelTop: "sustainable",
			labelBottom: "travel",
			icon: RefreshCw
		},
		{
			labelTop: "reliable",
			labelBottom: "trips",
			icon: Clock4
		},
		{
			labelTop: "good",
			labelBottom: "AC",
			icon: AirVent
		},
		{
			labelTop: "too",
			labelBottom: "slow",
			icon: Watch
		},
		{
			labelTop: "comfy",
			labelBottom: "seating",
			icon: Sofa
		},
		{
			labelTop: "access to",
			labelBottom: "my job",
			icon: CircleDollarSign
		},
		{
			labelTop: "access to",
			labelBottom: "community",
			icon: Users2
		},
		{
			labelTop: "not often",
			labelBottom: "enough",
			icon: CalendarClock
		},
		{
			labelTop: "too",
			labelBottom: "noisy",
			icon: Ear
		},
		{
			labelTop: "not fully",
			labelBottom: "accessible",
			icon: Accessibility
		},
		{
			labelTop: "clean",
			labelBottom: "ride",
			icon: Sparkles
		},
		{
			labelTop: "something",
			labelBottom: "else?",
			icon: HelpCircle
		}
	];
</script>

<section class="z-50 bg-white">
	<div
		class="flex min-h-[80vh] w-full flex-col gap-12 justify-center items-center justify-items-center p-10 z-50"
	>
		<div class="flex flex-col items-center max-w-lg gap-5 z-50">
			<div
				class="max-w-[10em] border-8 border-gray-200 rounded-full bg-gray-200"
			>
				<img src="assets/story/narrator-head.png" alt="The narrator's face" />
			</div>
			<p class="quote text-center">To me, the fairmount line is...</p>
		</div>
		<div
			class="flex gap-12 flex-wrap max-w-[20em] md:max-w-screen-xl items-start justify-center justify-items-center z-50"
		>
			{#each narratorOptions as option}
				<NarratorItem {...option} />
			{/each}
		</div>
	</div>
	<div
		class="hidden sm:flex min-h-[100vh] w-full flex-col gap-4 lg:px-4 py-10 justify-center items-center justify-items-center z-50"
	>
		<div class="flex flex-col items-center gap-2 mb-5">
			<h2 class="m-auto prompt text-center z-50">
				If you live near the Fairmount Line,<br /> what does it mean to you?
			</h2>
			<p class="tooltip">(click!)</p>
		</div>
		<div
			class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-9"
		>
			{#each userOptions.slice(0, 4) as option}
				<OptionItem {...option} disabled={submitted} />
			{/each}
		</div>
		<div
			class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-9"
		>
			{#each userOptions.slice(4, 9) as option}
				<OptionItem {...option} disabled={submitted} />
			{/each}
		</div>
		<div
			class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-9"
		>
			{#each userOptions.slice(9, 13) as option}
				<OptionItem {...option} disabled={submitted} />
			{/each}
		</div>
		<div class="flex flex-col gap-4 mb-2 z-50">
			<div class:hidden={submitted}>
				<div class="flex w-full flex-wrap justify-center items-center gap-5">
					<button
						class="bg-white px-4 py-2 rounded-full hover:bg-gray-200 drop-shadow-xl transition hover:scale-110"
						on:click={handleSubmit}
					>
						<h3 class="label text-gray-700">Submit</h3>
					</button>
					<a
						href="#after-share-prompt"
						class="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 drop-shadow-xl transition hover:scale-110 border-0"
					>
						<h3 class="label text-gray-700">{submitted ? "Next" : "Skip"}</h3>
					</a>
				</div>
			</div>
			<h3 class="label m-auto my-2" class:hidden={!submitted}>Thank you!</h3>
			<ConsentInfo />
		</div>
	</div>

	<div
		class="flex sm:hidden min-h-[100vh] w-full flex-col gap-3 px-[2vw] py-10 justify-center items-center justify-items-center z-50"
	>
		<div class="flex flex-col items-center mb-5 gap-2">
			<p />
			<h2 class="m-auto prompt text-center z-50">
				If you live near the Fairmount Line,<br /> how do you feel about it?
				<!-- If you live near the Fairmount Line,<br /> what comes to mind when you think of it?? -->
			</h2>
			<p class="tooltip">(click!)</p>
		</div>
		<div
			class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
		>
			{#each userOptions.slice(0, 2) as option}
				<OptionItem {...option} disabled={submitted} />
			{/each}
		</div>
		<div
			class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
		>
			{#each userOptions.slice(2, 5) as option}
				<OptionItem {...option} disabled={submitted} />
			{/each}
		</div>
		<div
			class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
		>
			{#each userOptions.slice(5, 7) as option}
				<OptionItem {...option} disabled={submitted} />
			{/each}
		</div>
		<div
			class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
		>
			{#each userOptions.slice(7, 10) as option}
				<OptionItem {...option} disabled={submitted} />
			{/each}
		</div>
		<div
			class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
		>
			{#each userOptions.slice(10, 12) as option}
				<OptionItem {...option} disabled={submitted} />
			{/each}
		</div>
		<div
			class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
		>
			{#each userOptions.slice(12, 13) as option}
				<OptionItem {...option} disabled={submitted} />
			{/each}
		</div>
		<div class="flex flex-col gap-2 mb-2 z-50">
			<div class:hidden={submitted}>
				<div class="flex w-full flex-wrap justify-center items-center gap-5">
					<button
						class="bg-white px-4 py-2 rounded-full hover:bg-gray-200 drop-shadow-xl transition hover:scale-110"
						on:click={handleSubmit}
					>
						<h3 class="label text-gray-700">Submit</h3>
					</button>
					<a
						href="#after-share-prompt"
						class="bg-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 drop-shadow-xl transition hover:scale-110 border-0"
					>
						<h3 class="label text-gray-700">{submitted ? "Next" : "Skip"}</h3>
					</a>
				</div>
			</div>
			<h3 class="label m-auto my-2" class:hidden={!submitted}>Thank you!</h3>
			<ConsentInfo />
		</div>
	</div>
</section>
