<script>
    import {createEventDispatcher, onDestroy} from 'svelte'
    import Button from '$lib/UI/Button.svelte'
    import Youtube from "$lib/partials/videos/Youtube.svelte"
    import Modal from '$lib/partials/videos/ModalVideo.svelte';

    export let video_title = null
    export let video_url = null
    export let video_position = null

    const dispatch = createEventDispatcher();

    let openModal = false
    let videoInfos = {} // UPDATING DELETING VIDEO
    $: modalTitle = video_url ? 'Modifier le titre ou le lien de vidéo' : 'Ajouter une vidéo'

    onDestroy(
        () => {
            video_title = null
            video_url = null
            video_position = ''
        }
    )

    // FUNCTIONS

    const closeModale = () => {
        openModal = false
        // dispatch('leaving')
    }

    const editVideo = () => {
        openModal = true
    }

    const deleteVideo = () => { // out of edit mode for vidéo
        console.log('deleteVideo 1', {video_title}, {video_url}, {video_position})
        if (video_title) {
            video_title = null
        }
        if (video_position) {
            video_position = null
        }
        video_url = null
        console.log('deleteVideo 2', {video_title}, {video_url}, {video_position})
        dispatch('delete-video')
    }

    $: console.log('console.log in EditVideo', {video_url})
    
    const getVideoInfos = async (e) => {
        console.log('getVideoInfos EditVidéo 1', e.detail)
        videoInfos = await e.detail 
        console.log('getVideoInfos EditVidéo 2', {videoInfos})
        if (videoInfos.video_title !== video_title) {
            video_title = videoInfos.video_title
        }
        if (videoInfos.video_url !== video_url) {
            video_url = videoInfos.video_url
        }
        if (videoInfos.video_position !== video_position) {
            video_position = videoInfos.video_position
        }
        console.log('getVideoInfos EditVidéo 3', {video_title}, {video_url}, {video_position})
        dispatch('save-video', {
            video_title,
            video_url,
            video_position
        })
    }
</script>
<span class="label">Gérer la vidéo</span>
{#if video_url}
    {#if videoInfos.video_title}
        <span class="label">{videoInfos.video_title}</span>
    {/if}

   {#if !videoInfos.video_title && video_title}
        <span class="label">{video_title}</span>
    {/if}

    {#if videoInfos.video_url}
        <Youtube video_url={videoInfos.video_url} title={video_title} />
    {/if}

    {#if !videoInfos.video_url}
        <Youtube {video_url} title={video_title} />
    {/if}
    
{/if}

{#if !video_url}
    <span class="has-text-info">Actuellement pas / plus de vidéo installée</span>
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
        <Button
        is-danger
        is-outlined
        enabled={true}
        fct={deleteVideo}
        >
            <span class="icon is-small"><i class="fas fa-film"></i></span>
            <span>Détruire</span>
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
closeButtonTitle='Abandonner'
{video_title}
{video_url}
{video_position}
on:save-video={getVideoInfos}
on:cancelMod={closeModale}
/>
{/if}
