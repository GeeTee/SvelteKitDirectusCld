<script>
    export let items = []
    console.log('essais expected', items)
</script>
<section>
    <header>
        <h1>Tous les items Test de Directus</h1>
    </header>
    {#if items.length > 0}
         <ul>
             {#each items as {id, title, slug} (id)}
                  <li><a sveltekit:prefetch href="essais/{slug}" {title}>{title} &raquo;</a></li>
             {/each}
         </ul>
    {:else}
        Pas de items Test chargé depuis Directus
    {/if}
</section>