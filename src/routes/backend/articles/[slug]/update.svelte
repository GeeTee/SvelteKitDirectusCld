<script>
 import {page} from '$app/stores'

 import EditArticle from '$lib/components/articles/EditArticle.svelte';
 
 const action = $page.url.searchParams.get('action')
 console.log('ACTION',{action})

 export let item = {}
 export let gVBup = []
 console.log('EXPECTED ITEM', {item})
 console.log('EXPECTED gVBup', {gVBup})
 // OPTIONS DE TITRE
 const h1Default = 'Gérer cet article'
 const h1Creating = 'Compléter (ou pas) l\'article nouvellement créé'
 $: h1Title = action === 'complete-article' ? h1Creating : h1Default
 $: newArticle = action === 'complete-article' ? true : false
 
 // OPTIONS DE NOTIFICATION

</script>
<section>
    <header>
        <h1 class="title has-text-info">{h1Title}</h1>
    </header>
    <EditArticle itemToEdit={item} {gVBup} {newArticle} />
</section>