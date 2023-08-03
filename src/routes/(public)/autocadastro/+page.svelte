<script lang="ts">
    import '../../../lib/custom-styles.css'
</script>

<!-- begin Navbar fake -->
<div class="navbar bg-verdeTelaInicial d-flex">  <!-- FIXED-TOP iria fixar a tag SEMPRE NO TOPO-->
    <div class=" container-fluid justify-content-between ">
      <button class="navbar-toggler shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" 
          aria-controls="offcanvasNavbar" aria-label="Toggle navigation" 
      >
        <span class="bi bi-list text-white"></span>
      </button>
    </div>
</div>
<!-- end Navbar fake -->


<div class="container">
    <div class="container p-3 m-3">
        <h2 style="font-family: Calibri, sans-serif;" >Cadastrar Usuário</h2>
    </div>
    <hr>
    <div class="container p-3">
        <div class="col-md-12">
            <!-- begin formulário -->
            <form action="/Acesso/Autocadastro" method="post"><input name="__RequestVerificationToken" type="hidden" value="inWdwJ7s84TmuNrOKUo0QjDg3aBd1dwJaob_bgsjpD3ekpNQxUYxrVLvJFGvmHVsI82qwan7ehDaFBPRWAKRi3OrPEtzV4XzRcydhoqoCYk1"> 
                <div class="form-horizontal">
                    <div class="row m-3">
                        <label class="col-md-2" for="EMail">E-Mail</label>
                        <div class="col-md-9">
                            <input class="form-control text-box single-line" data-val="true" data-val-email="The E-Mail field is not a valid e-mail address." data-val-length="The field E-Mail must be a string with a maximum length of 100." data-val-length-max="100" data-val-required="The E-Mail field is required." id="EMail" name="EMail" type="email" value="" maxlength="100">
                            <span class="field-validation-valid text-danger" data-valmsg-for="EMail" data-valmsg-replace="true"></span>
                        </div>
                    </div>

                    <div class="row m-3">
                        <label class="control-label col-md-2" for="UserName">CNPJ</label>
                        <div class="col-md-9">
                            <input class="form-control text-lowercase text-box single-line" data-val="true" data-val-length="The field Login must be a string with a maximum length of 100." data-val-length-max="100" data-val-required="The Login field is required." id="UserName" name="UserName" type="text" value="" maxlength="100">
                            <span class="field-validation-valid text-danger" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
                        </div>
                    </div>
        
                    <div class="row m-3">
                        <label class="control-label col-md-2" for="UserName">Como quer ser chamado?</label>
                        <div class="col-md-9">
                            <input class="form-control text-box single-line" data-val="true" data-val-length="The field Nome must be a string with a maximum length of 200." data-val-length-max="200" data-val-required="The Nome field is required." id="Nome" name="Nome" type="text" value="" maxlength="200">
                            <span class="field-validation-valid text-danger" data-valmsg-for="Nome" data-valmsg-replace="true"></span>
                        </div>
                    </div>
        
                    <div class="row m-3">
                        <label class="control-label col-md-2" for="Celular">Telefone Celular</label>
                        <div class="col-md-9">
                            <div class="input-group">    
                                <span class="input-group-text" id="basic-addon1">+55</span>
                                <input class="form-control text-box single-line" data-val="true" data-val-length="The field Telefone Celular must be a string with a maximum length of 20." data-val-length-max="20" data-val-phone="The Telefone Celular field is not a valid phone number." id="Celular" name="Celular" type="tel" value="" maxlength="20">
                             </div>
                        </div>
                    </div>
        
                    <div class="row m-3">
                        <label class="control-label col-md-2" for="Senha">Senha</label>
                        <div class="col-md-9">
                            <input class="form-control text-box single-line" name="Senha" data-val-length-max="100" data-val-required="O campo é obrigatório." id="Senha" type="password" value="" maxlength="100" required="">
                        </div>
                    </div>
        
                    <div class="row m-3">
                        <label class="control-label col-md-2" for="Confirmacao">Confirmação de senha</label>
                        <div class="col-md-9">
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
</style>