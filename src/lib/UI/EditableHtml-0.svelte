<script>
    import Actions from '$lib/UI/ActionComponent.svelte'
    export let fct;
    export let fctDel;
    export let label = 'Le label'
    export let deleting = false
    export let creating = false
</script>
<div class="box">
<p class="label">{label}</p>
<hr>
<div class="container">
    <slot>Fall back</slot>
    <Actions
    is-size-4
    {fct}
    {fctDel}
    {deleting}
    {creating}
    />
</div>
</div>
<style lang="scss">
    .container {
        align-items: center;
        display: flex;
        justify-content: space-between;
    }
</style>