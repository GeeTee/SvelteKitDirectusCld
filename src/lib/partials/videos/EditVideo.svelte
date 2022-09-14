<script>
    import {createEventDispatcher} from 'svelte'
    import Modal from '$lib/UI/Modal.svelte'
    import Button from '$lib/UI/Button.svelte'
    import Youtube from "$lib/partials/videos/Youtube.svelte";

    export let video_title = null
    export let video_url = null

    const dispatch = createEventDispatcher();

    $: videoTitle = video_title ? video_title : ''
    $: videoUrl = video_url ? video_url : ''

    $: videoTitleValid = videoTitle !== '' ? true : false
    $: videoUrlValid = videoUrl !== '' ? true : false
    $:enabled = videoUrlValid

    let openModal = false
    $: modalTitle = video_url ? 'Modifier le titre ou le lien de vidéo' : 'Ajouter une vidéo'

    const closeModale = () => {
        openModal = false
        // dispatch('leaving')
    }

    const editVideo = () => {
        // console.log('editVideo //TODO:')
        openModal = true
    }
    
    const savingVideo = () => {
        console.log('savingVideo EditVideo', {videoTitle}, {videoUrl})
        if (videoTitleValid) {
            video_title = videoTitle
        }
        if (!videoTitleValid) {
            video_title = null
        }
        if (videoUrlValid) {
            video_url = videoUrl
        }
        if (!videoUrlValid) {
            video_url = null
        }
        dispatch('save-video', {video_title, video_url})
        openModal = false
    }
</script>
component Edit vidéo
{#if video_url}
    {#if video_title}
        <span class="label">{video_title}</span>
    {/if}
    <Youtube {video_url} />
{/if}

{#if !video_url}
    Ajouter une vidéo
{/if}
<div class="buttons my-3">
    {#if video_url}
        <Button
        is-info
        is-outlined
        enabled={true}
        fct={editVideo}
        >
            <span class="icon is-small"><i class="fas fa-film"></i></span>
            <span>Modifications</span>
        </Button>
    {/if}
    {#if !video_url}
        <Button
        is-primary
        is-outlined
        enabled={true}
        fct={editVideo}
        >
            <span class="icon is-small"><i class="fas fa-film"></i></span>
            <span>Ajouter une vidéo</span>
        </Button>
    {/if}
</div>
{#if openModal}
    <Modal 
    title={modalTitle}
    on:cancelMod={closeModale}
    >
    <div class="notification is-info">
        <div class="field">
            <label for="video-title" class="label">titre de la vidéo (optionnel)</label>
            <div class="control">
                <input 
                id="video-title" 
                class="input" 
                class:is-danger={!videoTitleValid}
                class:is-success={videoTitleValid}
                type="text" 
                placeholder="Recopier ici" 
                bind:value={videoTitle}
                >
            </div>
        </div> 
        <div class="field">
            <label for="video-url" class="label">Url de la vidéo</label>
            <div class="control">
                <input 
                id="video-url" 
                class="input" 
                class:is-danger={!videoUrlValid}
                class:is-success={videoUrlValid}
                type="text" 
                placeholder="Recopier ici" 
                bind:value={videoUrl}
                >
            </div>
        </div>     
    </div>
    <div class="buttons">
        <Button
        is-info
        is-outlined
        {enabled}
        fct={savingVideo}
        >
            <span class="icon is-small"><i class="fas fa-film"></i></span>
            <span>Enregistrer</span>
        </Button>
    </div>
    </Modal>
{/if}
