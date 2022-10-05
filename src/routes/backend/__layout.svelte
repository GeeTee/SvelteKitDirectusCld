<script context="module">
    export const load = async ({url, session}) => {
        const path = url.pathname
        // console.log('backend load', session.user)
        let authenticated = false
        if (session?.user) {
            authenticated = true
            return {
                props:{
                    path,
                    authenticated
                }
            }
        } else {
            console.log('Backend layout non authenticated')
            return {
                status: 302,
                redirect: '/'
            }
        }

    }

</script>
<script>
    // import {page, session} from '$app/stores'
    import { getContext } from "svelte";
    import Nav from "$lib/partials/navs/NavLinks.svelte";

    export let path = ''
    export let authenticated = false
    
    const backendLinks = getContext('backendLinks')
    const settingsLinks = getContext('settingsLinks')
    const isAuthenticated = authenticated
</script>
<div class="container">
    <div class="columns">
        <div class="column is-one-fifth">
            <nav class="has-background-link-light p-2">
                <Nav {path} links={backendLinks} {isAuthenticated} padLeft={true} />
            </nav>
            <hr>
            <nav class="has-background-link-light p-2">
                <Nav {path} links={settingsLinks} {isAuthenticated} padLeft={true} />
            </nav>
        </div>
        <div class="column">
            <span>isAuthenticated: {isAuthenticated}</span>
            <slot>Content backend</slot>
        </div>
    </div>
</div>