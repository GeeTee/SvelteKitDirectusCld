<script context="module">

    export const load = async ({url}) => {
        const path = url.pathname
        return {
            props: {
                path,
            }
        }
    }
</script>
<script>
    import u from '$lib/stores/userStore'
    import {session} from '$app/stores'
    import {browser} from '$app/env'
    import r from '$lib/helpers/req'
    import { setContext, onMount, beforeUpdate } from 'svelte';

    import {DIRECTUS_URL, DIRECTUS_MODE, BASE_URL} from '$lib/helpers/Env'
    import { Directus } from "@directus/sdk";

    import Nav from '../lib/partials/navs/NavContainer.svelte'
    import Footer from '../lib/partials/Footer.svelte'

    export let path = ''

    let isAuthenticated = false 

    // if (browser) {
    //   if (window.localStorage.getItem('auth_token')) {
    //     console.log('Browseer on a un user at start')
    //     isAuthenticated = true
    //   } else {
    //     console.log('Browseer no user at start')
    //   }
    // }

    beforeUpdate(
      () => {
      if (browser) {
          if (window.localStorage.getItem('auth_token')) {
            console.log('Browseer on a un user at before update')
            isAuthenticated = true
          } else {
            console.log('Browseer no user at before update')
            isAuthenticated = false
          }
        }      
      }
    )

    // DIRECTUS
    const directus = new Directus(DIRECTUS_URL, { auth: { mode: DIRECTUS_MODE } })
    // let userConnected = {}

    const start = async () => {
        await directus.auth
        .refresh()
        .then(async () => {
            await getCurrentUser()
        })
        .catch((err) => {
            console.log("Error when refreshed =>", err);
        });        
    };

    const getCurrentUser = async () => {
        await directus.users.me
        .read({
            fields: ["id", "first_name", "last_name", "email", "avatar", "role"],
        })
        .then( async (user) => {
            // console.log('main __lay 1', user)
            user = {authenticated: true, ...user}
            // userConnected = {...user}
            $session.user = {...user}
            u.setUser(user) // ????
            // console.log('main __lay 2 session user', {userConnected}, $session.user)
            return user
        })
        .catch((err) => console.log('getCurrentUser error : ',err.message));
        };

    // VARIABLES DE CONTEXT
    setContext('directus', directus)
    setContext('isAuthenticated', isAuthenticated)
    setContext('navGeneraleLinks',[
		{
			href: '/',
			title: 'Accueil',
      beAuthenticated: false
		},
		{
			href: '/news',
			title: 'News',
      beAuthenticated: false
		},
		{
			href: '/login',
			title: 'Connexion',
      beAuthenticated: false
		},
		{
			href: '/logout',
			title: 'Déconnexion',
      beAuthenticated: true
		},
		{
			href: '/backend',
			title: 'Backend',
      beAuthenticated: true
		}
	])
    setContext('metiersLinks', [])
    setContext('navAdminLinks', [
		{
			href: '/mentions-legales',
			title: 'mentions légales',
      beAuthenticated: false
		},
		{
			href: '/rgpd',
			title: 'RGPD',
      beAuthenticated: false
		},
    ])
    setContext('backendLinks', [
      {
        href: '/backend',
        title: 'Dashboard',
        beAuthenticated: true
      },
      {
        href: '/backend/news',
        title: 'News',
        beAuthenticated: true
      },      
    ])
    setContext('footerLargeur','container')
    setContext('vcard',{
          full_name: 'Gilles Testard',
          avatar: null,
          redactionnel: 'blabla',
          company: 'Bleu Blanc Web',
          job: 'manager',
          mobile: '06 66 09 61 09',
          email: 'g.testard@galites.ent',
          address_1: 'la Volinière - la Fercelle',
          zip: '45500',
          town: 'Autry le châtel',
          country: 'France'
    })
    setContext('siteName', 'Bleu Blanc Web')

  onMount(
    async () => {
      // BULMA
      const navbarBurger = document.getElementById('top-burger')
      // console.log('onMount', {navbarBurger});
      navbarBurger.addEventListener('click', () => {
        console.log('navbar click')
        const target = navbarBurger.dataset.target;
        const targetedMenu = document.getElementById(target)
        navbarBurger.classList.toggle('is-active')
        targetedMenu.classList.toggle('is-active')
      })
      //DIRECTUS

      if (isAuthenticated === true) {
        start()
      }
      return
    }
  )

</script>
<svelte:head>
    <link rel="stylesheet" href="{BASE_URL}/css/app.css">
</svelte:head>
<Nav {path} {isAuthenticated} />
  <div class="container">
    <strong>isAuthenticated: {isAuthenticated}</strong>
  </div>
<div id="level-main-content" class="custom-bg" role="document">
  <main class="container py-5">
    <slot />
  </main>
</div>
<Footer {path} {isAuthenticated} />
