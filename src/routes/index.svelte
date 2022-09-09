<script>
    import MainHeader from '$lib/layouts/MainHeader.svelte'

    const sizes = [200, 400, 600, 800, 1000, 1200, 1400, 1600]
    const l = sizes.length

    const public_id = 'Actibenne/banners/actibenn-terrassement-assainissement-47'

</script>
<article>
    <!-- <header><h1>SveltKit - Directus - Backend</h1></header> -->

    <MainHeader 
    heading='SveltKit - Directus - Backend' 
    bannerId={public_id}
    />
    <div class="container content">
        <ul>
            <li>Sass preprocess ok</li>
        </ul>
    </div>
</article>

