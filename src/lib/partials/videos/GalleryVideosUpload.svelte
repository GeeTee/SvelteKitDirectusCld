<script>
    // import { writable } from 'svelte/store'
    import {onDestroy} from 'svelte'
    import EditVideo from '$lib/partials/videos/EditVideo.svelte'

    // const dispatch = createEventDispatcher();

    export let gallery_videos = []
    
    // let gallery_videosU = []

    // STORES
    // let videos = writable([])
    // if (gallery_videos.length > 0) {
    //     videos.set(gallery_videos)
    //     console.log('videos store', $videos)
    // }



    onDestroy(
        () => {
            // videos.set([])
            gallery_videos = []
            // gallery_videosU = []
        }
    )
</script>
{#if gallery_videos.length > 0}
    <p class="label">Gérer la gallerie images ({gallery_videos.length})</p>
{:else}
    <p class="label">Alimenter la gallerie images</p>
{/if}
<ul>
    <li>gallery_videos.length : {gallery_videos.length}</li>
</ul>
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
    onlyAddVideo={true}
    needVideoPosition={false} 
    on:save-video
    />
</div>