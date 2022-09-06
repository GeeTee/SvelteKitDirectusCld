<script>
    import { session } from "$app/stores";
    import { authenticated } from "$lib/stores/authStore";
    import u from '$lib/stores/userStore'
    import { getContext, onMount } from "svelte";
    import { goto } from "$app/navigation";
    import {checkEntry, toggleHelp} from '$lib/helpers/validations'
    import Div from "$lib/layouts/DivHeader.svelte";

    // console.log('login expected recaptcha : ', recaptcha)
    // DEV 
    import {DIRECTUS_EMAIL, DIRECTUS_PW} from '$lib/helpers/Env'

    const headT = 'Connexion'
    const h2 = getContext('siteName')
    let email = DIRECTUS_EMAIL
    let password = DIRECTUS_PW
    // $: emailValid = checkEntry(email, 'email') ? true : false;
    // $: passwordValid = checkEntry(password, 'password') ? true : false;
    // let captchaValid = true
    // $: formValid = emailValid && passwordValid && captchaValid;
    // HELPS
    let helpEmail = false
    let helpPassword = false

    const directus = getContext('directus')

    async function handleLogin () {
        await directus.auth.login(
            {email, password}
        )

        await directus.users.me
        .read({
            fields: ["id", "first_name", "last_name", "email", "avatar", "role"],
        })
        .then( async (user) => {
            // console.log('login step 1', user)
            user = {authenticated: true, ...user}
            // userConnected = {...user}
            $session.user = {...user}
            u.setUser(user) // ????
            // console.log('login step 2 session user', $session.user)
            return user
        })
        .catch((err) => console.log('getCurrentUser error : ',err.message));

        // console.log('handleLogin Directus done')

        const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json'
        }
        });
        if (!response.ok) {
        error = (await response.json()).message;
        return;
        }
        const message = (await response.json()).message;
        resetForm()

        console.log('handleLogin fetch done, message: ', message) 

        goto('/backend')
        // setTimeout(() => {
        //     goto('/dashboard')
        // }, 5000)
    }

    const resetForm = () => {
        email = ''
        password = ''
        helpEmail = false
        helpPassword = false
    }

    // GESTION CAPTCHA
        // var verifyCallback = function(response) {
        //     // alert(response);
        //     if(response.length == 0) {
        //     // gRecpatchaError = "Cliquer : Je ne suis pas un robot"
        //     // showHelpCaptcha = true
        //     console.log('captchaValidity = false')
        //     captchaValid = false
        //     }
        //     // captchaValid = true
        //     console.log('captchaValidity = true')
        //     captchaValid = true
        // };
        // var onloadCallback = function() {
        //     grecaptcha.render('gt-captcha', {
        //     'sitekey' : `${recaptcha}`,
        //     'callback' : verifyCallback,
        //         });
        // };
        // if (onloadCallback) {
        //     console.log('recaptcha monté')
        // }

        // onMount(
        //     () => onloadCallback()
        // )
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
    <form id="login-form" name="login">
        <legend class="subtitle is-4 is-uppercase">Se connecter</legend>
        <div class="columns">
            <div class="field column">
                <label for="email" class="label"><span class="has-text-danger">*</span> email </label>
                <div class="control has-icons-left">
                    <input 
                    type="email" 
                    name="email" 
                    id="email"
                    class="input"
                    placeholder="Noter un mail valide"
                    bind:value={email}
                    required
                    >
                    <span class="icon is-small is-left">
                        <i class="fas fa-at"></i>
                    </span>
                </div>
                <p class="help has-text-danger" class:is-invisible={!helpEmail}>Champ indispensable, merci de noter un mail valide</p>
            </div>
            <div class="field column">
                <label for="password" class="label"><span class="has-text-danger">*</span> Mot de passe </label>
                <div class="control has-icons-left">
                    <input 
                    type="password" 
                    name="password" 
                    id="password"
                    class="input"
                    placeholder="Noter un mail valide"
                    bind:value={password}
                    required
                    >
                    <span class="icon is-small is-left">
                        <i class="fas fa-key"></i>
                    </span>
                </div> 
                <p class="help has-text-danger" class:is-invisible={!helpPassword}>Au moins 8 caractères, 1 petite lettre, 1 capitale, 2 chiffres, 2 caractèrs spéciaux</p>               
            </div>
        </div>
    <div class="field">
        <div id="login-captcha"></div>
    </div>
    <div class="field is-grouped">
        <div class="control">
            <button 
            id="submit-button" 
            class="button is-link" 
            type="submit" 
            on:click|preventDefault={handleLogin}
            >Se connecter</button>
        </div>
        <div class="control">
            <button 
            id="reset-button" 
            class="button is-warning"
            on:click|preventDefault={resetForm}
            >Effacer</button>
        </div>
    </div>
    </form>
</Div>