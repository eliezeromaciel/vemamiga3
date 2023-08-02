<script lang="ts">
    import Navbar from "$lib/Navbar.svelte";
</script>

<Navbar/>

<div class="container">

    <div class="container p-3 m-3">
        <h2 >Cadastrar Usuário</h2>
    </div>
    <hr>
    <div class="container p-3">
        <div class="col-md-12">
            <form action="/Acesso/Autocadastro" method="post"><input name="__RequestVerificationToken" type="hidden" value="inWdwJ7s84TmuNrOKUo0QjDg3aBd1dwJaob_bgsjpD3ekpNQxUYxrVLvJFGvmHVsI82qwan7ehDaFBPRWAKRi3OrPEtzV4XzRcydhoqoCYk1"> 
                <div class="form-horizontal">
                    <div class="form-group">
                        <label class="control-label col-md-2" for="EMail">E-Mail</label>
                        <div class="col-md-9">
                            <input class="form-control text-box single-line" data-val="true" data-val-email="The E-Mail field is not a valid e-mail address." data-val-length="The field E-Mail must be a string with a maximum length of 100." data-val-length-max="100" data-val-required="The E-Mail field is required." id="EMail" name="EMail" type="email" value="" maxlength="100">
                            <span class="field-validation-valid text-danger" data-valmsg-for="EMail" data-valmsg-replace="true"></span>
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="control-label col-md-2" for="UserName">CNPJ</label>
                        <div class="col-md-9">
                            <input class="form-control text-lowercase text-box single-line" data-val="true" data-val-length="The field Login must be a string with a maximum length of 100." data-val-length-max="100" data-val-required="The Login field is required." id="UserName" name="UserName" type="text" value="" maxlength="100">
                            <span class="field-validation-valid text-danger" data-valmsg-for="UserName" data-valmsg-replace="true"></span>
                        </div>
                    </div>
        
                    <div class="form-group">
                        <label class="control-label col-md-2" for="UserName">Como quer ser chamado?</label>
                        <div class="col-md-9">
                            <input class="form-control text-box single-line" data-val="true" data-val-length="The field Nome must be a string with a maximum length of 200." data-val-length-max="200" data-val-required="The Nome field is required." id="Nome" name="Nome" type="text" value="" maxlength="200">
                            <span class="field-validation-valid text-danger" data-valmsg-for="Nome" data-valmsg-replace="true"></span>
                        </div>
                    </div>
        
                    <div class="form-group">
                        <label class="control-label col-md-2" for="Celular">Telefone Celular</label>
                        <div class="col-md-9 input-group">
                            <span class="input-group-addon" id="basic-addon1">+55</span>
                            <input class="form-control phone text-box single-line" data-val="true" data-val-length="The field Telefone Celular must be a string with a maximum length of 20." data-val-length-max="20" data-val-phone="The Telefone Celular field is not a valid phone number." id="Celular" name="Celular" type="tel" value="" maxlength="20">
                            <span class="field-validation-valid text-danger" data-valmsg-for="Celular" data-valmsg-replace="true"></span>
                        </div>
                    </div>
        
                    <div class="form-group">
                        <label class="control-label col-md-2" for="Senha">Senha</label>
                        <div class="col-md-9">
                            <input class="form-control text-box single-line" name="Senha" data-val-length-max="100" data-val-required="O campo é obrigatório." id="Senha" type="password" value="" maxlength="100" required="">
                        </div>
                    </div>
        
                    <div class="form-group">
                        <label class="control-label col-md-2" for="Confirmacao">Confirmação de senha</label>
                        <div class="col-md-9">
                            <input class="form-control text-box single-line" data-val-length-max="100" data-val-required="O campo é obrigatório." id="Confirmacao" type="password" value="" maxlength="100" required="">
                        </div>
                    </div>
        
                    <div class="form-group">
                        <div class="col-md-offset-8">
                            <div class="pull-right">
                                <input type="submit" value="Criar" class="btn btn-primary">
                                <input type="reset" value="Limpar" class="btn btn-default">
                                <a class="btn btn-link" href="/Acesso/Entrar">Voltar</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>   
        </div>
    </div>
                 
</div>