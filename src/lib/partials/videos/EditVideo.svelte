<script>
    import {createEventDispatcher} from 'svelte'
    import Button from '$lib/UI/Button.svelte'
    import Youtube from "$lib/partials/videos/Youtube.svelte"
    import Modal from '$lib/partials/videos/ModalVideo.svelte';

    export let video_title = null
    export let video_url = null
    export let video_position = null

    const dispatch = createEventDispatcher();

    // $: videoTitle = video_title ? video_title : ''
    // $: videoUrl = video_url ? video_url : ''
    // $: videoPosition = video_position ? video_position : ''

    // $: video_titleValid = true
    // $: video_urlValid = true
    // $: video_positionValid = true
    // $:enabled = video_urlValid

    let openModal = false
    $: modalTitle = video_url ? 'Modifier le titre ou le lien de vidéo' : 'Ajouter une vidéo'

    // const getSelectedVideoPosition = (e) => {
    //     const {selected} = e.detail
    //     console.log('getSelectedVideoPosition ds block', {selected})
    //     videoPosition = selected       
    // }

    const closeModale = () => {
        openModal = false
        // dispatch('leaving')
    }

    const editVideo = () => {
        openModal = true
    }

    $: console.log('console.log in EditVideo', {video_url})
    let videoInfos = {}
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
component Edit vidéo : {video_url}
{#if video_url}
    {#if video_title}
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
{video_title}
{video_url}
{video_position}
on:save-video={getVideoInfos}
on:cancelMod={closeModale}
/>
{/if}
