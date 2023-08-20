<script>
	import ConsentInfo from "$components/helpers/ConsentInfo.svelte";

	import ButtonSet from "$components/helpers/ButtonSet.svelte";
	const options = [
		{ value: "10-15" },
		{ value: "15-30" },
		{ value: "30-45" },
		{ value: "45+" }
	];

	let value = "";

	let submitEntryMap = {
		"10-15": "Every+10-15+Minutes",
		"15-30": "Every+15-30+Minutes",
		"30-45": "Every+30-45+Minutes",
		"45+": "Every+45%2B+Minutes"
	};

	$: submitEntry = submitEntryMap[value];

	$: prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSdRRrU4HS4kQeJ4O7xuuwJlmMWMP1YyRwFSKrSwm2s9dRav-w/formResponse?usp=pp_url&entry.1862502599=${submitEntry}&submit=Submit`;

	let submitted = false;
	const handleSubmit = () => {
		submitted = true;
	};
</script>

<div class="flex flex-col w-full bg-fuchsia-900 p-5 rounded-md gap-7">
	<div>
		<h3 class="prompt text-white text-center">
			How often do you wish the train would come?
		</h3>
		<p class="text-gray-100 label text-sm text-center">(click one)</p>
	</div>
	<div class="flex w-full justify-center gap-4">
		<div class="w-full m-auto">
			<ButtonSet {options} bind:value disabled={submitted} />
		</div>
	</div>
	<div class="flex flex-col gap-2 mb-2">
		<div class:hidden={submitted}>
			<div class="flex w-full flex-wrap justify-center items-center gap-5">
				<a
					href={prefilledLink}
					target="_blank"
					class="bg-white px-4 py-2 rounded-full hover:bg-gray-200 drop-shadow-xl transition hover:scale-110 border-0"
					on:click={handleSubmit}
				>
					<h3 class="label text-gray-700">Submit</h3>
				</a>
				<a
					href="#after-often-prompt"
					class="bg-white px-4 py-2 rounded-full hover:bg-gray-200 drop-shadow-xl transition hover:scale-110 border-0"
				>
					<h3 class="label text-gray-700">{submitted ? "Next" : "Skip"}</h3>
				</a>
			</div>
		</div>
		<h3 class="label m-auto text-white" class:hidden={!submitted}>
			Thank you!
		</h3>
		<ConsentInfo />
	</div>
</div>
