<script>
    import ar from '$lib/stores/articlesStore'
</script>

<h1 class="title mb-3">Tous les articles</h1>
{#if $ar.length > 0}
    <ul>
        {#each $ar as {id, title, slug} (id)}
            <li>
                <a sveltekit:prefetch href="articles/{slug}" {title}>{title} &raquo;</a>
            </li>
        {/each}
    </ul>
{/if}