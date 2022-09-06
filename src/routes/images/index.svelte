<script>
    import f from '$lib/helpers/scripts'

    export let srcArr = []

    // const deletingImg = (i) => {
    //     console.log('deletingImg', {i})
    // }
</script>
<div class="container">
    <h1>Les images ({srcArr.length})</h1>
    <div class="imgs-container">
        {#if srcArr.length > 0}
            {#each srcArr as h}
                <div>
                    <a href="images/{f.slashToUnderscore(h)}">
                        <img src={f.bannerResizeW(300, h)} alt="test">
                    </a>
                    <br>
                    <span on:click={f.deleteOneImg(f.slashToUnderscore(h))}>Del</span>
                </div>
            {/each}
        {/if}
    </div>
</div>

<style lang='scss'>
    .imgs-container {
        display: flex;
        flex-flow: row wrap;
        > a {
            display: block;
        }
    }
</style>

