<!-- Splash.svelte -->
<script>
    import { onMount } from 'svelte';
  
    let isDataLoaded = false;
  
    // Simule uma chamada assíncrona para obter o valor armazenado (por exemplo, usando um setTimeout)
    onMount(() => {
        const teste = localStorage.getItem('token')
        if (!teste) {
            window.location.href = '/login'
        } else {
            isDataLoaded = true
        }

    });

  </script>
  
  {#if isDataLoaded}
    <slot /> <!-- Renderiza o conteúdo do slot depois que o valor armazenado é obtido -->
  {:else}
    <p>Loading...</p> <!-- Exibe uma mensagem de carregamento enquanto espera pelo valor armazenado -->
  {/if}