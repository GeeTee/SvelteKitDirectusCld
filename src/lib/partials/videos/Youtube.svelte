<script>
import f from '$lib/helpers/scripts'
    export let video_url = null
	export let title = 'YouTube video player'
    const src = f.getEmbedUrlYoutube(video_url)
    console.log('Youtube component', f.getEmbedUrlYoutube(video_url))
</script>

<div class="mediacontainer">
    {#if video_url}
    <iframe width="560" height="315" {src} {title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    {/if}
</div>

<style lang="scss">
.mediacontainer {
	height: 0;
	overflow: hidden;
	padding-bottom: 56.25%; //format 16/9 pour youtube
	position: relative;
	width: 100%;
	iframe {
		height: 100% !important;
		left: 0;
		position: absolute;
		top: 0;
		width: 100% !important;
	}
	// &.r1 {
	// 	padding-bottom: 100%; // format carré
	// 	}
}
</style>