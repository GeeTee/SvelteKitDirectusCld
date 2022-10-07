<script>
    import { getContext } from 'svelte';
    import SettingsProjects from '$lib/components/settings/SettingsProjects.svelte';
    import SettingsManager from '$lib/components/settings/SettingsManager.svelte';
    import SettingsColors from '$lib/components/settings/SettingsColors.svelte';

    // export let id = null
    export let settings = {}
    // export let projectSettings = {}
    // export let manager = {}
    // export let legal = {}
    // export let colors = {}
    // export let metas = {}

    const directus = getContext('directus')
    const settingsT = directus.items('website_settings')

    const {id} = settings
    const projectSettings = {
        site_name: settings.site_name,
        domain_name: settings.domain_name,
        logo: settings.logo
    }
    const manager = {
        full_name: settings.full_name,
        avatar: settings.avatar,
        job: settings.job,
        speech_about: settings.speech_about
    }
    const legal = {
        companyName: settings.company_name,
        commercialName: settings.commercial_name,
        telMobile: settings.tel_mobile,
        email: settings.email,
        telFixe: settings.tel_fixe,
        telFax: settings.tel_fax,
        address1: settings.address_1,
        address2: settings.address_2,
        town: settings.town,
        codePostal: settings.code_postal,
        country: settings.country,
        speechCompany: settings.speech_company,
        coordinates: settings.map_company.coordinates,
        zoomGlobal: settings.zoom_global,
        zoomZoom: settings.zoom_zoom
    }
    const colors = {
        main_color_1: settings.main_color_1,
        main_color_2: settings.main_color_2,
        main_color_3: settings.main_color_3,
        hove_link_color: settings.hove_link_color,
        hover_bg_link_color: settings.hover_bg_link_color,
        bg_color: settings.bg_color,
        bg_banner: settings.bg_banner
    }
    const metas = {
        metaDescription: settings.meta_description,
        keyWords: settings.mots_cles
    }

    const {metaDescription, keyWords} = metas
    const {mainColor1, mainColor2, mainColor3, hoveLinkColor, hoverBgLinkcolor, bgColor, bgBanner} = colors
    const {companyName, commercialName, telMobile, email, telFixe, telFax, address1, address2, town, codePostal, country, speechCompany, coordinates, zoomGlobal, zoomZoom} = legal
    const {fullName, avatar, job, speech} = manager

    console.log('expected', {settings})

    const savingItemUpdated = (e) => {
        console.log('savingItemUpdated', e.detail)
        saveSettings(e.detail)
    }

    const saveSettings = async (obj) => {
        settings = {...settings,...obj}
        console.log('saveSettings', {id}, {settings})
        const res = await settingsT.updateOne(id, settings)
        if (res) {
            console.log('settings updates', res)
            settings = {...res}
        }
    }

</script>
<h1 class="title">Settings #{id}</h1>
<hr>
<SettingsProjects 
itemToEdit={projectSettings} 
on:save-item-updated={savingItemUpdated}
/>

<SettingsManager 
itemToEdit={manager} 
on:save-item-updated={savingItemUpdated}
/>

<SettingsColors 
itemToEdit={colors} 
on:save-item-updated={savingItemUpdated}
/>

<!-- <hr>
<h2 class="subtitle">Manager</h2>
<ul>
    <li>{fullName}</li>
    {#if avatar}
        <li>{avatar}</li>
    {/if}
    <li>{job}</li>
    {#if speech}
        <li><div>{@html speech}</div></li>
    {/if}
</ul> -->
<hr>
<h2 class="subtitle">Legal</h2>
<ul>
    <li>{companyName}</li>
    {#if commercialName}
        <li>{commercialName}</li>
    {/if}
    {#if telMobile}
        <li>{telMobile}</li>
    {/if}
    <li>{email}</li>
    {#if telFixe}
        <li>{telFixe}</li>
    {/if}
    {#if telFax}
        <li>{telFax}</li>
    {/if}
    {#if address1}
         <li>{address1}</li>
    {/if}
    {#if address2}
         <li>{address2}</li>
    {/if}
    {#if town}
         <li>{town}</li>
    {/if}
    {#if codePostal}
         <li>{codePostal}</li>
    {/if}
    {#if country}
         <li>{country}</li>
    {/if}
    {#if speechCompany}
         <li><div>{@html speechCompany}</div></li>
    {/if}
    {#if coordinates?.length > 0}
         <li>
            <ul>
                <li>lat : {coordinates[1]}</li>
                <li>long : {coordinates[0]}</li>
                <li>zoom global: {zoomGlobal}</li>
                <li>zoom insertion: {zoomZoom}</li>
            </ul>
         </li>
    {/if}
</ul>
<hr>
<h2 class="subtitle">Colors</h2>
<ol>
    <li>{mainColor1}</li>
    <li>{mainColor2}</li>
    <li>{mainColor3}</li>
    <li>{hoveLinkColor}</li>
    <li>{hoverBgLinkcolor}</li>
    <li>{bgColor}</li>
    <li>{bgBanner}</li>
</ol>
<hr>
<h2 class="subtitle">Metas</h2>
<ul>
    <li>{metaDescription}</li>
    <li>{keyWords}</li>
</ul>