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
import PromptFlResponses from "$components/helpers/PromptFLResponses.svelte";

import responses from "$data/responses.json";

let narratorOptions = [{
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

let userOptions = [{
        entry: "Easy+transit",
        labelTop: "easy",
        labelBottom: "transit",
        icon: ArrowLeftRight,
        selected: false
    },
    {
        entry: "Sustainable+travel",
        labelTop: "sustainable",
        labelBottom: "travel",
        icon: RefreshCw,
        selected: false
    },
    {
        entry: "Reliable+trips",
        labelTop: "reliable",
        labelBottom: "trips",
        icon: Clock4,
        selected: false
    },
    {
        entry: "Good+AC",
        labelTop: "good",
        labelBottom: "AC",
        icon: AirVent,
        selected: false
    },
    {
        entry: "Too+slow",
        labelTop: "too",
        labelBottom: "slow",
        icon: Watch,
        selected: false
    },
    {
        entry: "Comfy+seating",
        labelTop: "comfy",
        labelBottom: "seating",
        icon: Sofa,
        selected: false
    },
    {
        entry: "Access+to+my+job",
        labelTop: "access to",
        labelBottom: "my job",
        icon: CircleDollarSign,
        selected: false
    },
    {
        entry: "Access+to+community",
        labelTop: "access to",
        labelBottom: "community",
        icon: Users2,
        selected: false
    },
    {
        entry: "Not+often+enough",
        labelTop: "not often",
        labelBottom: "enough",
        icon: CalendarClock,
        selected: false
    },
    {
        entry: "Too+noisy",
        labelTop: "too",
        labelBottom: "noisy",
        icon: Ear,
        selected: false
    },
    {
        entry: "Not+fully+accessible",
        labelTop: "not fully",
        labelBottom: "accessible",
        icon: Accessibility,
        selected: false
    },
    {
        entry: "Clean+ride",
        labelTop: "clean",
        labelBottom: "ride",
        icon: Sparkles,
        selected: false
    },
    {
        entry: "Something+else?",
        labelTop: "something",
        labelBottom: "else?",
        icon: HelpCircle,
        selected: false
    }
];

let submitted = false;
let error = false;
let status = 0;
let submittedResponses = [];
const allResponsesSum = Object.values(responses).reduce((acc, currVal) => acc + currVal, 0)

const handleSubmit = async () => {
    const selectedOptions = userOptions
        .filter((option) => {
            return option.selected;
        });
    const optionsEntries = selectedOptions
        .map((option) => {
            return `&entry.498716893=${option.entry}`;
        })
        .join("");
    submittedResponses = selectedOptions;
    submitted = true;
    return
    const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSfTEAiFJGhld3FCTAW5CeHH0gjj5NUAoDWKACYWFzrqhpPPBA/formResponse?usp=pp_url${optionsEntries}&submit=Submit`;
    try {
        // Send as an opaque request, so google accepts;
        // A successful response will be code 0, not 200 as is expected
        await fetch(
                prefilledLink, {
                    mode: 'no-cors'
                })
            .then((response) => {
                status = response.status;
                return response;
            })
            .then((res) => {
                if (status === 500 || status === 404) {
                    error = true;
                    return;
                }
                submittedResponses = selectedOptions;
                submitted = true;
            })
            .catch(() => {
                error = true;

            });
    } catch {
        error = true;

    }
};
</script>

<section class="z-50 bg-gradient-to-b from-white to-yellow-100">
    <div class="flex min-h-[90vh] w-full flex-col gap-12 justify-center items-center justify-items-center p-10 z-50">
        <div class="flex flex-col items-center max-w-lg gap-5 z-50">
            <div class="max-w-[10em] border-8 border-gray-200 rounded-full bg-gray-200">
                <img src="assets/story/narrator-head.png" alt="The narrator's face" />
            </div>
            <p class="quote text-center">To me, the Fairmount Line is...</p>
        </div>
        <div
            class="flex gap-12 flex-wrap max-w-[20em] md:max-w-screen-xl items-start justify-center justify-items-center z-50">
            {#each narratorOptions as option}
            <NarratorItem {...option} />
            {/each}
        </div>
    </div>
    <!-- TABLET+ -->
    <div
        class="flex min-h-[100vh] w-full flex-col gap-4 lg:px-4 py-10 justify-center items-center justify-items-center z-50"
        >
        <div class="flex flex-col items-center gap-2 mb-5 px-5">
            <h2 class="m-auto prompt text-center z-50">
                If you live near the Fairmount Line,<br /> how do you feel about it?
            </h2>
            <p class="tooltip" class:hidden={submitted}>
                (click the circles below!)</p>
            <p class="tooltip" class:hidden={!submitted}>Thank you for your vote!
            </p>
        </div>

        <div
            class="flex w-full gap-x-3 gap-y-2 px-[2vw] sm:p-0
            basis-full flex-wrap flex-row items-start justify-center justify-items-center z-50 sm:gap-x-9 sm:gap-y-3"
            class:hidden={submitted}
            >
            {#each userOptions as option, i}
            <!-- Mobile breaks -->
            {#if [2, 5, 7, 10, 12].includes(i)} <div class="block basis-full h-0 sm:hidden"></div>{/if}
            <!-- Tab+ breaks -->
            {#if i === 4 || i === 9} <div class="hidden basis-full h-0 sm:block"></div>{/if}
            <OptionItem
                labelTop={option.labelTop}
                labelBottom={option.labelBottom}
                icon={option.icon}
                disabled={submitted}
                bind:selected={option.selected}
                />
                {/each}
                </div>
                <div class="flex flex-col gap-4 mb-2 z-50 mt-3">
                    <div class:hidden={submitted}>
                        <div class="flex w-full flex-wrap justify-center items-center gap-5">
                            <button
                                class="bg-white px-4 py-2 rounded-full hover:bg-gray-200 drop-shadow-xl transition hover:scale-110 border-0"
                                disabled={!userOptions.some((o) => o.selected)}
                                on:click={handleSubmit}
                                >
                                <h3 class="label text-gray-700">Submit</h3>
                            </button>
                            <a
                                href="#after-share-prompt"
                                class="bg-white px-4 py-2 rounded-full hover:bg-gray-200 drop-shadow-xl transition hover:scale-110 border-0"
                                >
                                <h3 class="label text-gray-700">{submitted ? "Next" : "Skip"}</h3>
                            </a>
                        </div>
                    </div>
                    <!-- class:hidden={!submitted} -->
                    <div >
                        <div
                            class="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 row-auto z-50 gap-8 gap-y-9 md:gap-y-12 xl:gap-y-16 my-10"
                            >
                            <!-- {#each {length: 10} as _, i}
                            <div class={`flex flex-col items-center opacity-0 ${i%2 === 0 ? ' animate-enter-bottom': 'animate-enter-top'}`} style={`--delay: ${i*(.1*Math.random())}s`}>
                                <OptionItem
                                    labelTop={userOptions[0].labelTop}
                                    labelBottom={userOptions[0].labelBottom}
                                    icon={userOptions[0].icon}
                                    disabled={submitted}
                                    submitted={true}
                                    selected={true}
                                    result={true}
                                    />

                                    <div class="flex flex-col items-center justify-center w-[30vw] sm:w-[6em] md:w-[7em] lg:w-[8em] mt-5 bg-fuchsia-800 text-white rounded-full aspect-square tooltip">
                                        <h5 class='text-sm md:text-lg lg:text-2xl'>
                                            400 votes
                                            </h5
                                            >
                                            <svg role="status" class="w-16 md:w-20 lg:w-24 h-3 mt-1">
                                                <rect x="1" y="1" class='w-full h-3 stroke-fuchsia-800 fill-white' />
                                                <rect x="1" y="1" class='h-3 fill-yellow-500 animate-fill' style={`--percentage: ${(100*Math.random())}%; --delay: ${i*.2}s`} />
                                            </svg>
                                            <h5 class='text-sm lg:text-xl font-light mt-2'>
                                                51% voters
                                            </h5>

                                            </div>
                                            </div>
                            {/each} -->
                            {#each submittedResponses as option, i}
                            {@const percent = `${Math.round((responses[option.entry] / allResponsesSum) * 100)}%`}
                            <div class={`flex flex-col items-center opacity-0 ${i%2 === 0 ? ' animate-enter-bottom': 'animate-enter-top'}`} style={`--delay: ${i*(.1*Math.random())}s`}>
                                <OptionItem
                                    labelTop={option.labelTop}
                                    labelBottom={option.labelBottom}
                                    icon={option.icon}
                                    disabled={submitted}
                                    submitted={true}
                                    selected={true}
                                    result={true}
                                    />

                                    <div class="flex flex-col items-center justify-center w-[30vw] sm:w-[6em] md:w-[7em] lg:w-[8em] mt-5 bg-fuchsia-800 text-white rounded-full aspect-square tooltip">
                                        <h5 class='text-sm md:text-lg lg:text-2xl'>
                                            {responses[option.entry]} votes
                                            </h5
                                            >
                                            <svg role="status" class="w-16 lg:w-24 h-3 mt-1">
                                                <rect x="1" y="1" class='w-24 h-3 stroke-fuchsia-800 fill-white' />
                                                <rect x="1" y="1" class='h-3 fill-yellow-500 animate-fill' style={`--percentage: ${percent}; --delay: ${i*.2}s`} />
                                            </svg>
                                            <h5 class='text-sm lg:text-xl font-light mt-2'>
                                                {percent} voters
                                            </h5>

                                            </div>
                                            </div>
                                            {/each}
                                            </div>
                                            </div>

                                            <h3 class="label m-auto my-2 text-red-600" class:hidden={!error}>Sorry, something went wrong. Please try again.</h3>
                                            <!-- <PromptFlResponses /> -->

                                            <ConsentInfo />
                                            </div>
                                            </div>
                                            </section>
