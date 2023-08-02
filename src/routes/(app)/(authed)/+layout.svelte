<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
    import { onMount } from "svelte";

    onMount ( ( ) => {
        const teste = localStorage.getItem('token')
        if (!teste) {
            window.location.href = '/login'
        }

    })


</script>

<Navbar/>
<slot/> 