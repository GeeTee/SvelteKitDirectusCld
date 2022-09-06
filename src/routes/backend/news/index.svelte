<script>
    import n from '$lib/stores/newsStore'
    import {goto} from '$app/navigation'
    import UpdateI from '$lib/UI/actionsIcones/UpdateIcone.svelte';
    import DeleteI from '$lib/UI/actionsIcones/DeleteIcone.svelte';
    import Button from '$lib/UI/Button.svelte'
</script>
<h1 class="title">Gérer les news</h1>
<div class="columns is-v-centered">
    <div class="column">
    <h2 class="title">Liste des news</h2>
        {#if $n.length > 0}
            <ul>
                {#each $n as {title, id, slug} (id)}
                    <li>{title} <UpdateI categ="backend/news" {slug} /> <DeleteI categ="backend/news" {slug} /></li>
                {/each}
            </ul>
        {/if}
    </div>
    <div class="column">
        <h2 class="title">Ajouter une news</h2>
        <Button
        is-info
        fct={() => goto('/backend/news/new')}
        enabled={true}
        >
            +
        </Button>
    </div>
</div>
