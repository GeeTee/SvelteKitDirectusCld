<script>
 import n from '$lib/stores/newsStore'
 import {page} from '$app/stores'
 import f from '$lib/helpers/scripts'

 import Banner from '$lib/partials/images/cld/BannerCld.svelte'

 const {slug} = $page.params
 const item = $n.filter(item => item.slug === slug)[0]

 export let srcJpg = []
 export let srcWebP = []

//  export let srcTest = ''

</script>
<section>
    <header>
        <h1>Une news</h1>
    </header>
    <article>
        <header>
            <h2>{item?.title}</h2>
        </header>
        <div class="gt-banner">
            <Banner {srcJpg} {srcWebP} />
        </div> 
        <div class="content">
            {@html item?.redaction}
        </div>
        {#if item?.gallery_photos !== null && item?.gallery_photos.length > 0}
             <ol>
                {#each item?.gallery_photos as {public_id}}
                     <li><img src={f.thumbImg(public_id)} alt="//TODO:"></li>
                {/each}
             </ol>
        {/if}
    </article>
</section>