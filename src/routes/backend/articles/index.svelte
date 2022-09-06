<script>
    import ar from '$lib/stores/articlesStore'
    import {goto} from '$app/navigation'
    import ManageI from '$lib/UI/actionsIcones/ManageIcone.svelte';
    import DeleteI from '$lib/UI/actionsIcones/DeleteIcone.svelte';
    import Button from '$lib/UI/Button.svelte'
</script>
<h1 class="title">Gérer les Advanced Articles</h1>
<div class="columns is-v-centered">
    <div class="column">
    <h2 class="title">Liste des Articles</h2>
        {#if $ar.length > 0}
            <ul>
                {#each $ar as {title, id, slug} (id)}
                    <li>
                        {title} <ManageI categ="backend/articles" {slug} /> 
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
