<script>
    import {onDestroy} from 'svelte'
    import EditVideo from '$lib/partials/videos/EditVideo.svelte'
    export let gallery_videos = []

    onDestroy(
        () => {
            gallery_videos = []
        }
    )
</script>
{#if gallery_videos.length > 0}
    <p class="label">Gérer la galerie Vidéos ({gallery_videos.length})</p>
{:else}
    <p class="label">Alimenter la galerie vidéos</p>
{/if}
{#if gallery_videos.length > 0 }
    <ol class="AA">
        {#each gallery_videos as {video_url, video_title, id} (id)}
            <li> 
                <div>
                    <EditVideo 
                    {video_title} 
                    {video_url} 
                    {id}
                    needVideoPosition={false} 
                    on:save-video
                    on:delete-video
                    />
                </div>
            </li>
        {/each}
    </ol>
{/if}

<div>
    <EditVideo 
    onlyAddVideoToGallery={true}
    needVideoPosition={false} 
    on:save-video
    />
</div>