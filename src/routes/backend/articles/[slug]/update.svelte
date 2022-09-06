<script>
 import ar from '$lib/stores/articlesStore'
 import {page} from '$app/stores'

 import EditArticle from '$lib/components/articles/EditArticle.svelte';

 const {slug} = $page.params  
 const action = $page.url.searchParams.get('action')
 console.log({action})
 // OPTIONS DE TITRE
 const h1Default = 'Gérer cet article'
 const h1Creating = 'Compléter (ou pas) l\'article nouvellement créé'
 $: h1Title = action === 'complete-article' ? h1Creating : h1Default
 $: newArticle = action === 'complete-article' ? true : false
 
 // OPTIONS DE NOTIFICATION
 const item = $ar.filter(item => item.slug === slug)[0]
</script>
<section>
    <header>
        <h1 class="title has-text-info">{h1Title}</h1>
    </header>
    <EditArticle itemToEdit={item} {newArticle} />
</section>