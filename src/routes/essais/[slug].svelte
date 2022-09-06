<script>
    export let item = {}
    console.log('essais slug expected', {item})
    const {title, redaction} = item
</script>
<article>
    <header>
        <h1>{title}</h1>
    </header>
    <div class="content">
        {@html redaction}
    </div>
</article>