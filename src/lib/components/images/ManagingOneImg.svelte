<script>
    import {createEventDispatcher} from 'svelte'
    import ImagUpload from '$lib/partials/images/cld/ImageUploadCld.svelte'

    const dispatch = createEventDispatcher()

    export let cld_public_id = ''
    export let croppingAspectRatio = 1
    export let uploadPreset = 'Actibenne_banners'

    const getNewImgId = (e) => {
        console.log('getNewImgId', e.detail)
        const {public_id} = e.detail
        cld_public_id = public_id
        dispatch('get-img',{cld_public_id})
    }
    const deletingImg = (e) => {
        console.log('deletingImg', e.detail)
    }
</script>
<svelte:head>
<script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript">  
</script>
</svelte:head>
{#if cld_public_id}
    <ImagUpload 
    {cld_public_id}
    {croppingAspectRatio} 
    isOutlined={true}
    showDeleteImg={true}
    buttonTextDelete={`Enlever l'image`}
    imageInstalled={true}
    {uploadPreset }
    dispatchTitle='renew-img-id'
    on:renew-img-id={getNewImgId}
    on:delete-img={deletingImg}
    />
{/if}
{#if !cld_public_id}
    <ImagUpload 
    buttonText='Choisir' 
    {croppingAspectRatio} 
    isOutlined={true}
    {uploadPreset }
    dispatchTitle='get-new-img-id'
    on:get-new-img-id={getNewImgId}
    />
{/if}