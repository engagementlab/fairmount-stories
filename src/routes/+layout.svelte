<script>
	import { onMount } from "svelte";
	import { beforeNavigate, afterNavigate } from "$app/navigation";
	import "$styles/app.css";

	let root;

	onMount(() => {
		root = document.getElementsByTagName("html")[0];

		root?.classList.add("smooth-scroll");
	});

	beforeNavigate(() => {
		root?.classList.remove("smooth-scroll");
	});

	afterNavigate(() => {
		root?.classList.add("smooth-scroll");
	});
</script>

<main id="content">
	<slot />
</main>
