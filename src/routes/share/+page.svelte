<script>
	import { base } from "$app/paths";
	import { onMount } from "svelte";
	import { MoveLeft, Link, Share2 } from "lucide-svelte";
	import {
		Email,
		WhatsApp,
		Facebook,
		Twitter
	} from "svelte-share-buttons-component";

	let canShare = false;
	onMount(() => {
		canShare = navigator.canShare;
	});

	const url = "http://fairmountstories.org";
	const title =
		"Fairmount Stories: Mobility, Advocacy, and Environmental Justice";
	const desc = "Check out this website about the Fairmount Line!";

	const handleShare = () => {
		navigator
			.share({
				title: "WebShare API Demo",
				url: url
			})
			.then(() => {
				console.log("Thanks for sharing!");
			})
			.catch(console.error);
	};

	let isCopied = false;
	const handleCopy = () => {
		navigator.clipboard.writeText("http://fairmountstories.org");
		isCopied = true;
	};
</script>

<div
	class="flex flex-col justify-center items-center w-screen h-screen p-2 gap-10"
>
	<div class="flex flex-col gap-5 bg-white rounded-xl drop-shadow-xl p-4">
		<h1 class="text-lime-800 text-center">Please share <br /> this website!</h1>
		{#if canShare}
			<button
				class="flex gap-2 justify-center items-center bg-lime-600 text-white uppercase tooltip rounded-full drop-shadow-md px-4 py-2 hover:bg-lime-800 transition"
				on:click={handleShare}>share with friends <Share2 /></button
			>
			<div class="relative flex items-center px-4">
				<div class="flex-grow border-t border-gray-400" />
				<span class="flex-shrink mx-4 text-gray-400">or</span>
				<div class="flex-grow border-t border-gray-400" />
			</div>
		{/if}
		<div class="flex justify-center gap-5 flex-wrap">
			<div class="flex justify-center gap-5 flex-wrap">
				<Facebook
					class="rounded-full drop-shadow-md text-[2em] leading-3"
					quote={title}
					{url}
				/>
				<Twitter
					class="rounded-full drop-shadow-md text-[2em] leading-3"
					text={title}
					{url}
					hashtags="github,svelte"
					via="username"
					related="other,users"
				/>
			</div>
			<div class="flex justify-center gap-5 flex-wrap">
				<WhatsApp
					class="rounded-full drop-shadow-md text-[2em] leading-3"
					text="{title} {url}"
				/>
				<Email
					class="rounded-full drop-shadow-md text-[2em] leading-3"
					subject={title}
					body="{desc} {url}"
				/>
			</div>
		</div>
		<div class="relative flex items-center px-4">
			<div class="flex-grow border-t border-gray-400" />
			<span class="flex-shrink mx-4 text-gray-400">or</span>
			<div class="flex-grow border-t border-gray-400" />
		</div>
		<button
			on:click={handleCopy}
			class="flex gap-3 p-1 justify-between items-center bg-gray-200 hover:bg-gray-300 rounded-lg transition group"
			class:bg-gray-300={isCopied}
		>
			<div class="pl-2 rounded-md">
				<Link />
			</div>
			<div class="shrink">
				<p class="tooltip">fairmountstories.org</p>
			</div>
			<div
				class="tooltip w-24 bg-lime-600 py-2 px-3 drop-shadow-md transition group-hover:bg-lime-800 text-white rounded-md"
				class:bg-lime-800={isCopied}
			>
				{isCopied ? "copied!" : "copy"}
			</div>
		</button>
	</div>
	<div class="flex justify-center">
		<a href="{base}/take-action/education" class="border-0 group m-auto">
			<div
				class="flex items-center gap-1 bg-lime-100 transition group-hover:-translate-x-1 rounded-full py-2 px-4 text-lime-600 group-hover:bg-white group-hover:text-lime-700"
			>
				<MoveLeft class="transition group-hover:-translate-x-1" />
				<p class="tooltip text-sm">BACK</p>
			</div>
		</a>
	</div>
</div>
