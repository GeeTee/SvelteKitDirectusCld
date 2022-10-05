<script>
    export let projectSettings = {}
    export let manager = {}
    export let legal = {}
    export let colors = {}
    export let metas = {}
    const {metaDescription, keyWords} = metas
    const {mainColor1, mainColor2, mainColor3, hoveLinkColor, hoverBgLinkcolor, bgColor, bgBanner} = colors
    const {companyName, commercialName, telMobile, email, telFixe, telFax, address1, address2, town, codePostal, country, speechCompany, coordinates, zoomGlobal, zoomZoom} = legal
    const {fullName, avatar, job, speech} = manager
    const {siteName, domain, logoId} = projectSettings
    console.log('expected projectSettings', {projectSettings})
</script>
<h1 class="title">Settings</h1>
<hr>
<h2 class="subtitle">Project</h2>
<ul>
    <li>{siteName}</li>
    <li>{domain}</li>
    {#if logoId}
        <li>{logoId}</li>
    {/if}
</ul>
<hr>
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
</ul>
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
    {#if coordinates.length > 0}
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