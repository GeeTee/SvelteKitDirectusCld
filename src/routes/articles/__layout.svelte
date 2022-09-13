<script context="module">
    import r from '$lib/helpers/req'
    export const load = async () => {
        const items = await r.getAllArticles()
        return {
            props: {
                items
            }
        }
    }
</script>
<script>
    import ar from '$lib/stores/articlesStore'
    export let items = []
    // console.log('expected articles : ', {items})
    ar.setArticles(items)
</script>
<div class="container">
    <slot />
</div>