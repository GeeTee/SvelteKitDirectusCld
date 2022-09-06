<script>
    import MainHeader from '$lib/layouts/MainHeader.svelte'

    const cldPath = 'Actibenne/banners/'
    const sizes = [200, 400, 600, 800, 1000, 1200, 1400, 1600]
    const l = sizes.length

    const public_id = 'Actibenne/banners/actibenn-terrassement-assainissement-47'

    const srcJpg = []
    const srcWebP = []
    let srcJ = ''
    let srcW = ''

    for (let i = 0; i < l; i++) {
        srcJ = `https://res.cloudinary.com/geeteeimages/image/upload/c_scale,w_${sizes[i]},q_auto,f_jpg/${public_id}`
        srcJpg.push(srcJ)
    }

    console.log({srcJpg})

    for (let i = 0; i < l; i++) {
        srcW = `https://res.cloudinary.com/geeteeimages/image/upload/c_scale,w_${sizes[i]},q_auto,f_webp/${public_id}`
        srcWebP.push(srcW)
    }

    console.log({srcWebP})
</script>
<article>
    <!-- <header><h1>SveltKit - Directus - Backend</h1></header> -->

    <MainHeader 
    heading='SveltKit - Directus - Backend' 
    {srcJpg}
    {srcWebP}
    />
    <div class="container content">
        <ul>
            <li>Sass preprocess ok</li>
        </ul>
    </div>
</article>

