<script>
    import ar from '$lib/stores/articlesStore'
    import {page} from '$app/stores'
    import f from '$lib/helpers/scripts'

    import Content from '$lib/components/articles/BlockContent.svelte' 
    import Banner from '$lib/partials/images/cld/BannerCld.svelte';
    import Youtube from '$lib/partials/videos/Youtube.svelte';

    const {slug} = $page.params 
    const item = $ar.filter(item => item.slug === slug)[0]
    console.log('expected item in slug adv art', {item})
    const {title, cld_public_id, main_text, blocks, gallery_photos, gallery_videos} = item
</script>
{#if item}
<article>
    <header>
        <h1 class="subtitle">{title}</h1>
    </header>
    <div>
        <Banner {cld_public_id} />
    </div>
    <div class="content">
        <div>
            {@html main_text}
        </div>
        {#if  blocks?.length > 0}
            {#each blocks as block}
                <Content {block} />
            {/each}
        {/if}
    </div>
    <hr>
    
    {#if gallery_photos !== null && gallery_photos?.length > 0}
    <div class="gallery block">
        <h2 class="subtitle">Galerie Photos</h2>
        {#each gallery_photos as {public_id, width, height}}
            <ul>
            <li>public_id: {public_id}</li>
            <li> width: {width}</li>
            <li>height: {height}</li>
            </ul>
        {/each}
    </div>
    {/if}

    {#if gallery_videos !== null && gallery_videos?.length > 0}
        <div class="gallery block">
            <h2 class="subtitle">Galerie Vidéos</h2>
            <ul>
            {#each gallery_videos as {video_url, video_title}}
                <li class="block">
                    <h3 class="subtitle">{video_title}</h3>
                    <Youtube {video_url} />
                </li>
            {/each}
            </ul>
        </div>
    {/if}
    
</article>
{:else}
    Erreur pas de adv articles
{/if}
