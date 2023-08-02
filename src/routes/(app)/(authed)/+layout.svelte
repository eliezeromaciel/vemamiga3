<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
    import Splash from "$lib/Splash.svelte";
</script>


<Splash>
    <Navbar/>
    <slot/> 
</Splash>