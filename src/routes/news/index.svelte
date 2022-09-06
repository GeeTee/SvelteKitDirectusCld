
<script>
    import n from '$lib/stores/newsStore'
    import f from '$lib/helpers/scripts'
    import Banner from '$lib/partials/images/cld/BannerSquare300Cld.svelte'
</script>
<h1 class="title mb-3">Liste de news ({$n.length})</h1>
{#if $n.length > 0}
    <div>
        {#each $n as {title, id, slug, cld_public_id} (id)}
            <div class="block">
                <div>
                    <Banner idBanner={cld_public_id} />
                </div>
                <a sveltekit:prefetch href="news/{slug}?img={f.slashToUnderscore(cld_public_id)}" {title}>{title} &raquo;</a>
            </div>
        {/each}
    </div>
{/if}