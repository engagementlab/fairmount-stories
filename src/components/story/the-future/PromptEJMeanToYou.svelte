<script>
import ConsentInfo from "$components/helpers/ConsentInfo.svelte";

let ejResponse = "";
let attributionResponse = "";

let submitted = false;
let error = false;
let status = 0

const handleSubmit = async () => {
    const prefilledLink = `https://docs.google.com/forms/d/e/1FAIpQLSdHEuhy24vRrBcMBsBQiEhl335hFHbe9NaL0hKbj-ElRbDuig/formResponse?usp=pp_url&entry.309548713=${ejResponse}&entry.790043533=${attributionResponse}&submit=Submit`;

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

<div
    class="m-auto flex flex-col gap-10 max-w-screen-sm z-[200] bg-white/40 p-5 rounded-lg"
    >
    <h2 class="label text-center">
        <span>What does Environmental Justice mean to you?</span>
    </h2>
    <div class="flex flex-col gap-10">
        <div class="bg-white rounded-lg drop-shadow-2xl p-5">
            <textarea
                class="w-full outline-0 p-2 text-2xl min-h-[10em] align-top mb-5 rounded-md !cursor-default"
                placeholder="To me, Environmental Justice is..."
                type="text"
                name="ejResponse"
                required
                bind:value={ejResponse}
                disabled={submitted}
                class:bg-white={submitted}
                class:!opacity-100={submitted}
                />
                <div class="h-[2em] -mb-[2em] w-full">
                    <p class="italic text-right text-[1.3em] text-green-900">
                        — <span
                            class="text-transparent px-1 bg-gray-100"
                            class:bg-white={submitted}
                            >
                            {attributionResponse || "Resident from ..."}
                        </span>
                    </p>
                </div>
                <div class="h-[2em] w-full">
                    <input
                        class="w-full px-1 italic text-[1.3em] outline-0 text-right text-green-900 rounded-md bg-transparent !cursor-default"
                        name="attributionResponse"
                        type="text"
                        placeholder="Resident from ..."
                        bind:value={attributionResponse}
                        disabled={submitted}
                        class:!opacity-100={submitted}
                        />
                </div>
                </div>
                <div class='text-center'>

                    <div class="flex justify-center my-3">

                        <p class="text-base">(Please fill in both fields.)</p>
                    </div>
                    <div
                        class="flex w-full justify-center items-center gap-5"
                        class:hidden={submitted}
                        >
                        <button
                            class="bg-white px-4 py-2 rounded-full hover:bg-gray-200 drop-shadow-xl transition hover:scale-110 border-0"
                            disabled={ejResponse === '' ||attributionResponse === ''}
                            on:click={handleSubmit}
                            >
                            <h3 class="label text-gray-700">Submit</h3>
                        </button>
                        <a
                            href="#after-ej-prompt"
                            class="bg-white px-4 py-2 rounded-full hover:bg-gray-200 drop-shadow-xl transition hover:scale-110 border-0"
                            >
                            <h3 class="label text-gray-700">Skip</h3>
                        </a>
                    </div>
                    <h3 class="label m-auto mt-5" class:hidden={! submitted}>Thank you!</h3>
                                    <h3 class="label m-auto my-5 text-red-500 text-sm" class:hidden={!error}>Sorry, something went wrong. Please try again.</h3>

                </div>
                </div>
                <ConsentInfo />
                </div>

<style>
span {
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
}
</style>
