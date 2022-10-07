<script>
    export let name = 'main_color'
    export let value = '#2948eb'
</script>
<div class="container block">
    <div class="is-flex">
        <div id="value" style="background-color: {value};"></div>
        <div class="name pl-1 has-text-weight-bold" style="color: {value};">{name}</div>
    </div>
</div>
<style lang="scss">
    $dim: 3rem;
    .container {
        // background-color: beige;
        width: 20rem;
    }
    .is-flex {
        // background-color: coral;
        height: $dim;
        width: 100%;
    }
    #value {
        height: $dim;
        width: 5rem;
    }
    .name {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: $dim;
    }
</style>