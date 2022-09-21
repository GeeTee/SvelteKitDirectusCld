<script>
    import { writable } from 'svelte/store'
    import {createEventDispatcher, onDestroy} from 'svelte'
    import EditVideo from '$lib/partials/videos/EditVideo.svelte'

    const dispatch = createEventDispatcher();

    export let gallery_videos = []
    
    let gallery_videosU = []

    // STORES
    let videos = writable([])
    if (gallery_videos.length > 0) {
        videos.set(gallery_videos)
        console.log('videos store', $videos)
    }

    const updatevideosStore = (e) => {
        const idToDelete = e.detail.id
        console.log('deleteVideoInGallery GalleryU 1', {idToDelete}, {gallery_videos})
        gallery_videosU = $videos.filter(item => item.id !== idToDelete)
        videos.set([])
        console.log('deleteVideoInGallery GalleryU 2', $videos)
        videos.set(gallery_videosU)
        console.log('deleteVideoInGallery GalleryU 3', $videos)
        dispatch('delete-one-video-in-gallery',{idToDelete})
    }

    onDestroy(
        () => {
            videos.set([])
            gallery_videos = []
            gallery_videosU = []
        }
    )
</script>
{#if $videos.length > 0}
    <p class="label">Gérer la gallerie images ({$videos.length})</p>
{:else}
    <p class="label">Alimenter la gallerie images</p>
{/if}
<ul>
    <li>$videos.length : {$videos.length}</li>
    <li>gallery_videosU.length: {gallery_videosU.length}</li>
</ul>
{#if $videos.length > 0 }
    <ol class="AA">
        {#each $videos as {video_url, video_title, id} (id)}
            <li> 
                <div>
                    <EditVideo 
                    {video_title} 
                    {video_url} 
                    {id}
                    needVideoPosition={false} 
                    on:save-video
                    on:delete-video={updatevideosStore}
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