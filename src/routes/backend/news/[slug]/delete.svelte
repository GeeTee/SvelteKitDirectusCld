<script>
    import n from '$lib/stores/newsStore'
    import { getContext } from 'svelte';
    import {page} from '$app/stores'
    import {goto} from '$app/navigation'
    import Delete from '$lib/UI/actionsIcones/ConfirmDeleteIcone.svelte'
    import Confirmation from '$lib/UI/ConfirmationAction.svelte'

    const directus = getContext('directus')
    const news = directus.items('test')


    const {slug} = $page.params  
    const item = $n.filter(item => item.slug === slug)[0]

    let openModal = false
    const openingModal = () => {
    openModal = true
    }
    const text = `
    Pour détruir cette news, il vous faut recopier : <br /><span class="tag is-warning">${item?.slug}</span> <br />dans la champ ci dessous puis cliquer le bouton rouge : Confirmer
    `
    const canDelete = async () => {
        console.log('canDelete', item?.id)
        n.deletePost(item?.id)
        const res = await news.deleteOne(item?.id)
        goto('/backend/news')
    }
</script>
<section>
    <header>
        <h1 class="title has-text-danger">Delete Une news</h1>
    </header>
    <article>
        <header>
            <h2>{item?.title} <Delete on:want-to-confirm={openingModal}  /></h2>
        </header>
        <div class="content">
            {@html item?.redaction}
        </div>
    </article>
</section>
<Confirmation
{openModal}
title={`Détruire la news : ${item?.title}`}
slug={item?.slug}
{text}
on:confirmation={canDelete}
 />