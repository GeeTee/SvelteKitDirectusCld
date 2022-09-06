<script>
 import n from '$lib/stores/newsStore'
 import {page} from '$app/stores'

 import EditNews from '$lib/components/news/EditNews.svelte';

 const {slug} = $page.params  
 const item = $n.filter(item => item.slug === slug)[0]
</script>
<section>
    <header>
        <h1 class="title has-text-warning">Update Une news</h1>
    </header>
    <EditNews itemToEdit={item} />
</section>