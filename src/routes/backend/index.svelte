<script>
    import {session} from '$app/stores'
    import {onMount} from 'svelte'

    let first_name = ''
    let last_name = ''
    let email = ''

    onMount(
        () => {
            if ($session?.user) {
                first_name = $session?.user.first_name
                last_name = $session?.user.last_name
                email = $session?.user.email        
            }
        }
    )
</script>
<section>
    <header>
        <h1 class="subtitle">Backend</h1>
        {#if $session?.user}
             <h2 class="subtitle">{first_name} {last_name} - {email}</h2>
        {:else}
            <h2 class="title has-text-danger">Non autorisé</h2>
        {/if}
    </header>
</section>