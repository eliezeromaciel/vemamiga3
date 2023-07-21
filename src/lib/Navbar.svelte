<script>
    import'./custom-styles.css'
    import SideBar from './Sidebar.svelte'
  </script>
  
  
  <div class="navbar bg-verdeTelaInicial d-flex">  <!-- FIXED-TOP iria fixar a tag SEMPRE NO TOPO-->
    
      <div class=" container-fluid justify-content-between ">
        <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" 
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation" 
        >
          <span class="bi bi-list text-white"></span>
        </button>
  
        <div class="topMenuRight d-flex">
          <!-- begin Avatar -->
          <div class="mx-2">
            <div class="dropdown-center">
                <a class="btn border-none outline-none text-white dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"aria-expanded="false">
                  <i class="bi bi-person-bounding-box mx-1"></i>
                  <span class="d-sm-inline"> Avatar </span>
                </a>
                <div class="dropdown-menu bg-verdeTelaInicial" aria-labelledby="triggerId">
                    <a class="dropdown-item" href="/#">Alterar Senha </a>
                </div>
            </div>
          </div>
          <!-- end avatar -->
          <!-- begin button out -->
          <button class="navbar-toggler mx-2 shadow-none " type="button" 
            on:click={() => {
                localStorage.clear()
            }}
          >
            <a href="/login" 
              class="bi bi-box-arrow-right text-white">
            </a>
          </button>
          <!-- end button out -->
        </div>
  
        <!-- really begin offcanvas -->
        <div class="offcanvas offcanvas-start bg-verdeTelaInicial" style="width: 200px;" tabindex="-1" id="offcanvasNavbar" 
            aria-labelledby="offcanvasNavbarLabel" data-bs-backdrop="false" 
        >
          <div class="offcanvas-header p-1 justify-content-around">
            <a href="/">
              <img src="logoLogin.png" alt="" style="max-width: 45px" >
            </a>
            <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" 
              aria-controls="offcanvasNavbar" aria-label="Toggle navigation"
            >
              <span class="bi bi-list text-white"></span>
            </button>
          </div>
          <SideBar/>
        </div>
        <!-- end offcanvas -->
      </div>
  </div>