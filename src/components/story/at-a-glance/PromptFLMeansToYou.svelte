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
let status = 0

const handleSubmit = async () => {
    const optionsEntries = userOptions
        .filter((option) => {
            return option.selected;
        })
        .map((option) => {
            return `&entry.498716893=${option.entry}`;
        })
        .join("");
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
                submitted = true
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
    <div
        class="flex min-h-[90vh] w-full flex-col gap-12 justify-center items-center justify-items-center p-10 z-50"
        >
        <div class="flex flex-col items-center max-w-lg gap-5 z-50">
            <div
                class="max-w-[10em] border-8 border-gray-200 rounded-full bg-gray-200"
                >
                <img src="assets/story/narrator-head.png" alt="The narrator's face" />
            </div>
            <p class="quote text-center">To me, the Fairmount Line is...</p>
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
                If you live near the Fairmount Line,<br /> how do you feel about it?
            </h2>
            <p class="tooltip">(click the circles below!)</p>
        </div>
        <div
            class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-9"
            >
            {#each userOptions.slice(0, 4) as option}
            <OptionItem
                labelTop={option.labelTop}
                labelBottom={option.labelBottom}
                icon={option.icon}
                disabled={submitted}
                bind:selected={option.selected}
                />
                {/each}
                </div>
                <div
                    class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-9"
                    >
                    {#each userOptions.slice(4, 9) as option}
                    <OptionItem
                        labelTop={option.labelTop}
                        labelBottom={option.labelBottom}
                        icon={option.icon}
                        disabled={submitted}
                        bind:selected={option.selected}
                        />
                        {/each}
                        </div>
                        <div
                            class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-9"
                            >
                            {#each userOptions.slice(9, 13) as option}
                            <OptionItem
                                labelTop={option.labelTop}
                                labelBottom={option.labelBottom}
                                icon={option.icon}
                                disabled={submitted}
                                bind:selected={option.selected}
                                />
                                {/each}
                                </div>
                                <div class="flex flex-col gap-4 mb-2 z-50">
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
                                    <h3 class="label m-auto my-2" class:hidden={!submitted}>Thank you!</h3>
                                    <h3 class="label m-auto my-2 text-red-600" class:hidden={!error}>Sorry, something went wrong. Please try again.</h3>
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
                                        </h2>
                                        <p class="tooltip">(click the circles below!)</p>
                                    </div>
                                    <div
                                        class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
                                        >
                                        {#each userOptions.slice(0, 2) as option}
                                        <OptionItem
                                            labelTop={option.labelTop}
                                            labelBottom={option.labelBottom}
                                            icon={option.icon}
                                            disabled={submitted}
                                            bind:selected={option.selected}
                                            />
                                            {/each}
                                            </div>
                                            <div
                                                class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
                                                >
                                                {#each userOptions.slice(2, 5) as option}
                                                <OptionItem
                                                    labelTop={option.labelTop}
                                                    labelBottom={option.labelBottom}
                                                    icon={option.icon}
                                                    disabled={submitted}
                                                    bind:selected={option.selected}
                                                    />
                                                    {/each}
                                                    </div>
                                                    <div
                                                        class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
                                                        >
                                                        {#each userOptions.slice(5, 7) as option}
                                                        <OptionItem
                                                            labelTop={option.labelTop}
                                                            labelBottom={option.labelBottom}
                                                            icon={option.icon}
                                                            disabled={submitted}
                                                            bind:selected={option.selected}
                                                            />
                                                            {/each}
                                                            </div>
                                                            <div
                                                                class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
                                                                >
                                                                {#each userOptions.slice(7, 10) as option}
                                                                <OptionItem
                                                                    labelTop={option.labelTop}
                                                                    labelBottom={option.labelBottom}
                                                                    icon={option.icon}
                                                                    disabled={submitted}
                                                                    bind:selected={option.selected}
                                                                    />
                                                                    {/each}
                                                                    </div>
                                                                    <div
                                                                        class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
                                                                        >
                                                                        {#each userOptions.slice(10, 12) as option}
                                                                        <OptionItem
                                                                            labelTop={option.labelTop}
                                                                            labelBottom={option.labelBottom}
                                                                            icon={option.icon}
                                                                            disabled={submitted}
                                                                            bind:selected={option.selected}
                                                                            />
                                                                            {/each}
                                                                            </div>
                                                                            <div
                                                                                class="flex basis-full flex-wrap items-start justify-center justify-items-center z-50 gap-[6vw]"
                                                                                >
                                                                                {#each userOptions.slice(12, 13) as option}
                                                                                <OptionItem
                                                                                    labelTop={option.labelTop}
                                                                                    labelBottom={option.labelBottom}
                                                                                    icon={option.icon}
                                                                                    disabled={submitted}
                                                                                    bind:selected={option.selected}
                                                                                    />
                                                                                    {/each}
                                                                                    </div>
                                                                                    <div class="flex flex-col gap-2 mb-2 z-50">
                                                                                        <div class:hidden={submitted}>
                                                                                            <div class="flex w-full flex-wrap justify-center items-center gap-5">
                                                                                                <button
                                                                                                    class="bg-white px-4 py-2 rounded-full hover:bg-gray-200 drop-shadow-xl transition hover:scale-110 border-0"
                                                                                                    disabled={!userOptions.some((o) => o.selected)}
                                                                                                    on:click={handleSubmit}
                                                                                                    aria-label='submit'
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
                                                                                        <h3 class="label m-auto my-2 text-red-600 text-sm" class:hidden={!error}>Sorry, something went wrong. Please try again.</h3>

                                                                                        <ConsentInfo />
                                                                                    </div>
                                                                                    </div>
                                                                                    </section>
