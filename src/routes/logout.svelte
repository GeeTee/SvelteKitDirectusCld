<script>
    import { session } from "$app/stores";
    import u from "$lib/stores/userStore";

    import { getContext } from "svelte";
    import { goto } from "$app/navigation";
    const directus = getContext('directus')
    import Div from "$lib/layouts/DivHeader.svelte";
    import User from '$lib/partials/user/ConnectedUser.svelte'

    let authenticated = false
    let message = 'connecté'
    const headT = 'Déconnexion'
    const h2 = getContext('siteName')

    if ($u) {
        authenticated = $u.authenticated
    }

    const handleLogout = async () => {
        await directus.auth.logout()

        // console.log('handleLogout directus done')

        const response = await fetch('/api/logout')
        if (!response.ok) {
        error = (await response.json()).message;
        return;
        }
        message = (await response.json()).message;
        // console.log('handleLogout fetch done, message : ', message)
        
        delete $session?.user
        
        goto('/')
        // setTimeout(() => {
        //     goto('/')  
        // }, 3000) 
        
    }
</script>
<svelte:head>
    <title>{headT + ' - ' + h2}</title>
</svelte:head>
<Div
    titleBg=true
    h1={headT}
    {h2}
    beWell=true
>
{#if !authenticated}
    <div class="has-text-centered is-uppercase">
        Il semble que vous ne soyez pas connecté.
    </div>
{:else}
<div class="has-text-centered is-uppercase">
    <div class="block">
        <!-- <User isAuthenticated={$session?.user?.authenticated} ConnectedUser={$session?.user} positionAbsolute={false} /> -->
        Info User
    </div>
     <button class="button is-warning" on:click={handleLogout}>Vous déconnecter</button>
     </div>
{/if}
</Div>