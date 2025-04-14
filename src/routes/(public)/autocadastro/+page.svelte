<script lang="ts">
    import '../../../lib/custom-styles.css'

    function formatPhoneNumber(event: Event, inputId: string): void {
        const input = document.getElementById(inputId);
        const phoneNumber = event.target.value.replace(/\D/g, '');

        if (phoneNumber.length <= 10) {
            input.value = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 6)}-${phoneNumber.substring(6, 10)}`;
        } else {
            input.value = `(${phoneNumber.substring(0, 2)}) ${phoneNumber.substring(2, 7)}-${phoneNumber.substring(7, 11)}`;
        }
    }

    function formatCNPJ(event: Event, inputId: string): void {
        const input = document.getElementById(inputId);
        
        if (input.value.length > 13) {
            input.type = "text"
            let teste = input.value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
            input.value = teste
        }
        console.log(input.type)
    }




</script>

<!-- begin Navbar fake -->
<div class="navbar bg-verdeTelaInicial d-flex">  <!-- FIXED-TOP iria fixar a tag SEMPRE NO TOPO-->
    <div class=" container-fluid justify-content-between ">
      <button class="navbar-toggler shadow-none"  type="button"   >
        <span class="bi bi-list text-white"></span>
      </button>
    </div>
</div>
<!-- end Navbar fake -->


<div class="container">
    <div class="container p-1 m-1">
        <h2 style="font-family: Calibri, sans-serif;" >Cadastrar Usuário</h2>
    </div>

    <div class="container p-3">
        <div class="col-md-12">
            <!-- begin formulário -->
            <form action="/Acesso/Autocadastro" method="post"><input name="__RequestVerificationToken" type="hidden" value="inWdwJ7s84TmuNrOKUo0QjDg3aBd1dwJaob_bgsjpD3ekpNQxUYxrVLvJFGvmHVsI82qwan7ehDaFBPRWAKRi3OrPEtzV4XzRcydhoqoCYk1"> 
                <div class="form-horizontal">
                    <div class="row m-3">
                        <label class="col-md-3" for="EMail">E-Mail</label>
                        <div class="col-md-8">
                            <input class="form-control text-box single-line"  id="EMail" 
                                name="EMail" type="email" value="" maxlength="100"
                            >
                            <span class="field-validation-valid text-danger" data-valmsg-for="EMail" data-valmsg-replace="true"></span>
                        </div>
                    </div>

                    <div class="row m-3">
                        <label class="control-label col-md-3" for="UserName">CNPJ</label>
                        <div class="col-md-8">
                            <input class="form-control text-lowercase text-box single-line"  
                                id="cnpj" name="CNPJ" type="tel" value="" maxlength="18" 
                                on:input={e => formatCNPJ (e, 'cnpj') }
                            >
                            <span class="field-validation-valid text-danger" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
                        </div>
                    </div>
        
                    <div class="row m-3">
                        <label class="control-label col-md-3" for="UserName">Como quer ser chamado?</label>
                        <div class="col-md-8">
                            <input class="form-control text-box single-line"  data-val-length="The field Nome must be a string with a maximum length of 200." data-val-length-max="200" data-val-required="The Nome field is required." id="Nome" name="Nome" type="text" value="" maxlength="200">
                            <span class="field-validation-valid text-danger" data-valmsg-for="Nome" data-valmsg-replace="true"></span>
                        </div>
                    </div>
        
                    <div class="row m-3">
                        <label class="control-label col-md-3" for="Celular">Telefone Celular</label>
                        <div class="col-md-8">
                            <div class="input-group">    
                                <span class="input-group-text" id="basic-addon1">+55</span>
                                <input  class="form-control text-box single-line"  id="Celular" 
                                    name="Celular" type="tel" value="" maxlength="15" 
                                    on:input={e => formatPhoneNumber(e, 'Celular')}
                                >
                             </div>
                        </div>
                    </div>
        
                    <div class="row m-3">
                        <label class="control-label col-md-3" for="Senha">Senha</label>
                        <div class="col-md-8">
                            <input class="form-control text-box single-line" name="Senha" 
                            data-val-length-max="100" data-val-required="O campo é obrigatório." 
                            id="Senha" type="password" value="" minlength="6" required >
                        </div>
                    </div>
        
                    <div class="row m-3">
                        <label class="control-label col-md-3" for="Confirmacao">Confirmação de senha</label>
                        <div class="col-md-8">
                            <input class="form-control text-box single-line" data-val-length-max="100" data-val-required="O campo é obrigatório." id="Confirmacao" type="password" value="" maxlength="100" required="">
                        </div>
                    </div>
        
                    <div class="row m-3">
                        <div class="col-11">
                                <input type="submit" value="Criar" class="btn btn-success">
                                <input type="reset" value="Limpar" class="btn btn-outline-secondary">
                                <a class="btn btn-link" href="/login">Voltar</a>
                        </div>
                    </div>
                </div>
            </form>   
            <!-- end formulário -->
        </div>
    </div>
                 
</div>


<style>
    .form-horizontal {
        text-align: right;
    }

    /* Ocultar as setas de incremento e decremento do input type number */
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }
  
  
  </style>