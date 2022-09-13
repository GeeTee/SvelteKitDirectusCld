<script>
import f from '$lib/helpers/scripts'
    export let video_url = null
    const src = f.getEmbedUrlYoutube(video_url)
    console.log('Youtube component', f.getEmbedUrlYoutube(video_url))
</script>

<div>
    {#if video_url}
    <iframe width="560" height="315" {src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    {/if}
</div>