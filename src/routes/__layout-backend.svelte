<script context="module">
    export const load = async ({url}) => {
        const path = url.pathname
        return {
            props:{
                path
            }
        }
    }

</script>
<script>
    export let path = '/'
</script>
<div class="columns">
    <div class="column">
        <aside>
            Menu Backend
        </aside>
    </div>
    <div class="column">
        <slot>Content backend</slot>
    </div>
</div>

