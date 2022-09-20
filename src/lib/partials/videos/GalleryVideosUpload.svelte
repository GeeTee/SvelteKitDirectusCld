<script>
    import EditVideo from '$lib/partials/videos/EditVideo.svelte'
    import Button from '$lib/UI/Button.svelte'
    import Confirmation from '$lib/UI/ConfirmationAction.svelte'

    export let gallery_videos = [] 


</script>
{#if gallery_videos.length > 0}
    <p class="label">Gérer la gallerie images</p>
{:else}
    <p class="label">Alimenter la gallerie images</p>
{/if}
{#if gallery_videos.length > 0}
    <ol>
        {#each gallery_videos as {video_url, video_title, id}}
            <li>
                <div>
                    <EditVideo 
                    {video_title} 
                    {video_url} 
                    {id}
                    needVideoPosition={false} 
                    on:save-video
                    />
                </div>
            </li>
        {/each}
    </ol>
{/if}