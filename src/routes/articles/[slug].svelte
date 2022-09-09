<script>
    import ar from '$lib/stores/articlesStore'
    import {page} from '$app/stores'

    import Content from '$lib/components/articles/BlockContent.svelte'

    const {slug} = $page.params 
    const item = $ar.filter(item => item.slug === slug)[0]
</script>
<article>
    <header>
        <h1 class="subtitle">{item?.title}</h1>
    </header>
    <div>
        <p>banner public_id : {item?.cld_public_id}</p>
    </div>
    <div class="content">
        <div>
            {@html item?.main_text}
        </div>
        {#if  item?.blocks?.length > 0}
            {#each item?.blocks as block}
                <Content {block} />
            {/each}
        {/if}
    </div>
    <hr>
    <div class="gallery">
        {#if item?.gallery_photos !== null && item?.gallery_photos?.length > 0}
             {#each item?.gallery_photos as {public_id, width, height}}
                 <ul>
                    <li>public_id: {public_id}</li>
                    <li> width: {width}</li>
                    <li>height: {height}</li>
                 </ul>
             {/each}
        {/if}
    </div>
</article>