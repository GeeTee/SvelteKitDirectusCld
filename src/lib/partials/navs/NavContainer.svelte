<script>
	import { getContext } from "svelte";

	import Nav from "./NavLinks.svelte";
	import ThumbXxs from "../images/ThumbXXS.svelte";
	
	export let path;
	export let isAuthenticated = false
	export let logoId = undefined

	const metiersLinks = getContext('metiersLinks')
	const navGeneraleLinks = getContext('navGeneraleLinks')


</script>
<nav class="nav-top-bar navbar is-fixed-top has-shadow"  aria-label="Menu principal">
	<div class="navbar-brand">
		<a class="navbar-item" href="/">
			<ThumbXxs id={logoId} />
		</a>

		<a role="button" id="top-burger" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
			<span aria-hidden="true"></span>
		</a>
	</div>

	<div id="navMenu" class="navbar-menu">
		{#if navGeneraleLinks.length > 0}
			<div class="navbar-start">
			<Nav {path} links={navGeneraleLinks} {isAuthenticated} />
		</div>
		{/if}

		{#if metiersLinks.length > 0}
			<div class="navbar-end">
			<Nav {path} links={metiersLinks} />
		</div>
		{/if}
	</div>
</nav>


<style lang="scss">
	// .navbar.is-fixed-top,
	// .navbar.is-fixed-top * {
	// 	max-width: 100vw;
	// }
	// .navbar-burger {
	// 	color: var(--main-color-1);
	// }
	// .nav-top-bar.navbar {
	// 	background: var(--main-color-2);
	// 	z-index: 9999;
	// 	}
	// @media screen and (max-width: 1023px) {
	// 	.navbar-menu {
	// 		background-color: var(--main-color-2);
	// 	}
	// }

    // :global(a.navbar-item) {
    //     color: var(--hover-link-color) !important;
    // }
    // :global(a.navbar-item.is-active) {
    //     color: var(--main-color-1) !important;
    // }
</style>

