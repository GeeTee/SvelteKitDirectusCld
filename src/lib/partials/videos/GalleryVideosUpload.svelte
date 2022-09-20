<script>
    import EditVideo from '$lib/partials/videos/EditVideo.svelte'
    import Button from '$lib/UI/Button.svelte'
    import Confirmation from '$lib/UI/ConfirmationAction.svelte'

    export let gallery_videos = [] 

    const saveVideo = (e) => {
        console.log('saveVideo', e.detail)
    }
</script>
{#if gallery_videos.length > 0}
    <p class="label">Gérer la gallerie images</p>
{:else}
    <p class="label">Alimenter la gallerie images</p>
{/if}
{#if gallery_videos.length > 0}
    <ol>
        {#each gallery_videos as {video_url, video_title}}
            <li>
                <div>
                    <EditVideo 
                    {video_title} 
                    {video_url} 
                    needVideoPosition={false} 
                    on:save-video={saveVideo}
                    />
                </div>
            </li>
        {/each}
    </ol>
{/if}