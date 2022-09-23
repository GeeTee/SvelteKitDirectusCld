<script>
    import {createEventDispatcher, onDestroy} from 'svelte'
    import EditVideo from '$lib/partials/videos/EditVideo.svelte'
    import Button from '$lib/UI/Button.svelte'

    export let gallery_videos = []

    const dispatch = createEventDispatcher();

    onDestroy(
        () => {
            gallery_videos = []
        }
    )

    const saveNewGalleryVideos = () => {
        console.log('saveNewGalleryVideos //TODO:')
    }

    const cancelModifGalleryVideos = () => {
        console.log('cancelModifGalleryVideos //TODO:')
    }
    // const updateVideo = (e) => {
    //     const {id, video_title, video_url} = e.detail
    //     console.log('updateVideo 0 //TODO:', {id}, {gallery_videos})
    //     const idx = gallery_videos.findIndex(item => item.id === id)
    //     const updatedItem = gallery_videos[idx]
    //     if (video_title !== updatedItem.video_title) {updatedItem.video_title = video_title}
    //     if (video_url !== updatedItem.video_url) {updatedItem.video_url = video_url}
    //     console.log('updateVideo //1', {updatedItem}, {gallery_videos})
    // }

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
                    on:delete-video
                    />
                </div>
            </li>
        {/each}
    </ol>
        <div class="buttons">
            <Button
            is-primary
            enabled={true}
            fct={saveNewGalleryVideos}
            >
                Enregistrer la modif
            </Button>
            <Button
            is-info
            enabled={true}
            fct={() => dispatch('cancel-modif')}
            >
                Abandonner la modif
            </Button>
        </div>
{/if}

<div>
    <EditVideo 
    onlyAddVideoToGallery={true}
    needVideoPosition={false} 
    on:save-video
    />
</div>