<script>
import {
    onMount
} from 'svelte';
import ImageUrl from './ImageURL';
export let src;

let url = ''

onMount(() => {
	// We are going to size BG image based on the device orientation;
	// If portrait, height takes precedence
    let sizingParams = `w_${window.innerWidth}`
    if (window.matchMedia('(orientation: portrait)').matches)
        sizingParams = `h_${window.innerHeight}`

    url = ImageUrl({
        imgId: `fairmount-stories/${src}`,
        transforms: `f_auto,dpr_auto,c_thumb,ar_4:3,${sizingParams}`
    })
})
</script>
<div
    class="-my-[20vh] w-full bg-cover bg-center z-10"
    style={`background-image: url(${url})`}
    >
</div>
