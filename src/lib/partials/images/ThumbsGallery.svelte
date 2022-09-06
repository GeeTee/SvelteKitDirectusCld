<script>
    import f from '$lib/helpers/scripts'
    export let thumbGallery = []
    export let fctImg = f.thumbImg
</script>

{#if thumbGallery.length > 0}
    <p class="label">Gérer la gallerie images ({thumbGallery.length})</p>
{:else}
    <p class="label">Alimenter la gallerie images</p>
{/if}
{#if thumbGallery.length > 0}
     <ol>
        {#each thumbGallery as {slug, public_id}}
            <li>
                <div>
                    <img src={fctImg(public_id)} alt="//TODO:">
                </div>
            </li>
        {/each}
     </ol>
{/if}
{#if thumbGallery.length <= 0}
    <div class="notification is-primary">
        <strong>Notification //TODO: vide</strong>
    </div>   
     
{/if}

<style lang="scss">
    ol {
        display: flex;
        flex-flow: row wrap;
        > li {
            margin: 0.7rem;
            display: flex;
            flex-direction: column;
            max-width: 150px;
            > div {
                text-align: center;
            }
        }
    }
</style>