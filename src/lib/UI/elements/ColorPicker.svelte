<script>
	import ColorPicker from 'svelte-awesome-color-picker';

	let hex = "#2948eb" // or hsv or hex
</script>
{hex}
<ColorPicker bind:hex />