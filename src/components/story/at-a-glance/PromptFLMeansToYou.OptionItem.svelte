<script>
import OptionContent from "$components/story/at-a-glance/PromptFLMeansToYou.OptionContent.svelte";
export let icon;
export let labelTop = "";
export let labelBottom = "";
export let disabled = false;
export let selected = false;
export let submitted = false;
export let result = false;

let mouseOver = false;

const handleClick = () => {
    selected = !selected;
};

const handleMouseOver = () => {
    mouseOver = true;
};

const handleMouseLeave = () => {
    mouseOver = false;
};
</script>

{#if result}
<div
    class="bg-yellow-500 md:hover:!bg-yellow-500 rounded-full w-[25vw] sm:w-[6em] md:w-[7em] lg:w-[8em] aspect-square max-h-32"
    aria-label={`${labelTop} ${labelBottom}`}
    class:md:scale-125={submitted}
    >
    <OptionContent icon={icon} labelTop={labelTop} labelBottom={labelBottom} disabled={false} selected={true} mouseOver={false} />
</div>
{:else}
<button
    on:click={handleClick}
    on:focus={handleMouseOver}
    on:mouseover={handleMouseOver}
    on:mouseleave={handleMouseLeave}
    {disabled}
    class="bg-fuchsia-800 md:hover:!bg-yellow-500 rounded-full w-[25vw] sm:w-[6em] md:w-[7em] lg:w-[8em] aspect-square transition duration-[50ms] ease-[cubic-bezier(0.07, 1.2, 1, 1.24)] drop-shadow-xl group max-h-32"
    class:rotate-0={selected}
    class:scale-125={selected}
    class:bg-yellow-500={selected}
    class:!opacity-100={selected && disabled}
    class:md:hover:scale-110={!selected && !disabled}
    class:!cursor-default={disabled}
    tabindex="0"
    aria-label={`${labelTop} ${labelBottom}`}
    >
    <OptionContent icon={icon} labelTop={labelTop} labelBottom={labelBottom} disabled={disabled} selected={selected} mouseOver={mouseOver} />
</button>
{/if}
