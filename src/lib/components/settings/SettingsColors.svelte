<script>
     import {createEventDispatcher} from 'svelte'
    import f from '$lib/helpers/scripts'
    import TextInput from "$lib/UI/TextInput.svelte"
    import HtmlO from "$lib/UI/EditableHtml-0.svelte"
    import ColorPicker from '$lib/UI/elements/ColorPicker.svelte'
    import ShowColor from '$lib/UI/ShowColor.svelte'
    import Buttons from '$lib/UI/ButtonsCancelConfirm.svelte'

    const dispatch = createEventDispatcher()

    export let itemToEdit = null   

    // let full_name = ''
    // let avatar = ''
    // let job = ''
    // let speech_about = ''

    let itemBup = {}

    let keys = []

    if (itemToEdit) {
        itemBup = {...itemToEdit}
        keys = Object.keys(itemToEdit)
        console.log('kyes', {keys})
        // full_name = itemToEdit.full_name
        // avatar = itemToEdit.avatar
        // job = itemToEdit.job
        // speech_about = itemToEdit.speech_about
    }

    let isEdited = false
    let disableConfirm = true; 
    let disableCancel = true; 

    const editingSettings = () => isEdited = true

    const cancelUpdates = () => {
        console.log('cancelUpdates')
        isEdited = false
    }
    const saveUpdates = () => {
        const itemUpdated = {...itemBup}
        console.log('saveUpdates')
        // if (itemBup.full_name !== full_name) {
        //     console.log('saveUpdates', {full_name})
        //     itemUpdated.full_name = full_name
        // }
        console.log('saveUpdates Manager',{itemUpdated})  
        dispatch('save-item-updated', itemUpdated)
        isEdited = false
    }
</script>

{#if isEdited}
    <!-- <TextInput
    id="full-name"
    label="Nom complet"
    type="text"
    valid={full_nameValid}
    validityMessage="Entrez votre prénom et votre nom de famille"
    controlType="input"
    value={full_name}
    on:input={event => (full_name = event.target.value)} 
    /> -->
    Colors edit
    <ColorPicker />
    <Buttons 
    cancelText='Abandonner'
    saveText='Enregistrer'
    {disableConfirm}
    {disableCancel}
    on:button-canceling={cancelUpdates}
    on:button-saving={saveUpdates}
    />
{/if}
{#if !isEdited}
    <HtmlO 
    label={`Charte graphique`}
    fct={editingSettings}
    >
        {#if keys?.length > 0}
            <div>
             {#each keys as key}
                <ShowColor name={key} value={itemToEdit[key]} /> 
             {/each}
            </div>
        {/if}
    </HtmlO>
{/if}