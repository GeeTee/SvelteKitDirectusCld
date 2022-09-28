<script>
    import {goto} from '$app/navigation'
    import Button from '$lib/UI/Button.svelte'
    export let articlesLinks = []
</script>
<h1 class="title">Gérer les Advanced Articles</h1>
<div class="columns is-v-centered">
    <div class="column">
    <h2 class="title">Liste des Articles</h2>
        {#if articlesLinks.length > 0}
            <ul>
                {#each articlesLinks as {title, id, slug} (id)}
                    <li>
                        <a href="articles/{slug}/update">{title} &raquo;</a>
                    </li>
                {/each}
            </ul>
        {/if}
    </div>
    <div class="column">
        <h2 class="title">Ajouter un article</h2>
        <Button
        is-info
        fct={() => goto('/backend/articles/new')}
        enabled={true}
        >
            +
        </Button>
    </div>
</div>
