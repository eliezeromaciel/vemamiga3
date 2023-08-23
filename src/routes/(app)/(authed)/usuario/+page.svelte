<script lang="ts">
    import '../../../../lib/custom-styles.css'

    import {createStore} from '../../../../stores/todos.ts'
    import ListaPerfis from './ListaPerfisAcesso.svelte';
    import ListaEmpresasDisponiveis from './ListaEmpresasDisponiveis.svelte';

    const perfis = createStore([
		{ done: false, description: 'Administradores' },
		{ done: false, description: 'Cliente' },
		{ done: false, description: 'AD' }
	]);

    const empresas = createStore([
		{ done: false, description: 'Funerária Boa Sorte' },
		{ done: false, description: 'Pet Pai de Pet' },
		{ done: false, description: 'Dancing Bar do Jão' }
	]);

</script>



<div class="contaqqiner ">
    <div class="container p-3 m-3">
        <h2 style="font-family: Calibri, sans-serif;" >Novo Usuário</h2>
        <p style="font-family: Calibri, sans-serif;" >(Após a criação do usuário um link para confirmação da conta será enviado no e-mail informado.)</p>
    </div>
    <hr>
    <div class="container p-3">
        <div class="col-md-12">
            <!-- begin formulário -->
            <form action="/Acesso/Autocadastro" method="post"><input name="__RequestVerificationToken" type="hidden" value="inWdwJ7s84TmuNrOKUo0QjDg3aBd1dwJaob_bgsjpD3ekpNQxUYxrVLvJFGvmHVsI82qwan7ehDaFBPRWAKRi3OrPEtzV4XzRcydhoqoCYk1"> 
                <div class="form-horizontal">
                    <div class="row">
                        <div class="row m-3 d-flex align-items-center ">
                            <label class="col-1 " for="Login">Login</label>
                            <div class="col-3">
                                <input class="form-control text-box single-line" id="Login" name="Login" type="text" value="" maxlength="100">
                            </div>
                            <label class="col-1" for="CodigoExterno">Código Externo</label>
                            <div class="col-3">
                                <input class="form-control text-box single-line"  id="CodigoExterno" name="CodigoExterno" type="text" value="" maxlength="100">
                            </div>
                            <div class="col-4 d-flex justify-content-center">
                                <label class="m-2">
                                    <input class="form-check-input me-1" type="checkbox" value="" id="AD" >
                                    AD
                                </label>
                                <label class="m-2">
                                    <input class="form-check-input me-1" type="checkbox" value="" id="Administrador" >
                                    Administrador
                                </label>
                                <label class="m-2">
                                    <input class="form-check-input me-1" type="checkbox" value="" id="Inativo" >
                                    Inativo
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="row m-3 d-flex align-items-center">
                            <label class="col-1" for="Nome">Nome</label>
                            <div class="col-11">
                                <input class="form-control text-box single-line" id="Nome" name="Nome" type="text" value="" maxlength="100">
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="row m-3 d-flex align-items-center">
                            <label class="col-1" for="E-mail">E-mail</label>
                            <div class="col-11">
                                <input class="form-control text-box single-line" id="E-mail" name="E-mail" type="e-mail" value="" maxlength="100">
                            </div>
                        </div>
                    </div>
                  
                    <div class="row">
                        <div class="row m-3 d-flex align-items-center">
                            <label class="col-1" for="E-mail">Telefone Fixo</label>
                            <div class="col-4">
                                <input class="form-control text-box single-line" id="Telfixo" name="Telfixo" type="tel" value="" maxlength="100">
                            </div>
                            <label class="col-1" for="E-mail">Telefone Celular</label>
                            <div class="col-4">
                                <div class="input-group">
                                    <span class="input-group-text " id="basic-addon1">+55</span>
                                    <input class="form-control text-box single-line " data-val="true" id="Celular" name="Celular" type="tel" maxlength="20">
                                </div>
                             
                            </div>

                        </div>
                    </div>

                    <div class="row">
                        <div class="row m-3 ">
                            <label class="col-1" for="E-mail">Perfis de Acesso</label>
                            <div class="col-5">
                                <span class="p-2 d-flex justify-content-start" style="font-size: 0.8rem;">Perfis Disponíveis</span>
                                <div class="list-box">
                                    <ListaPerfis store={perfis} done={false} />
                                </div>
                            </div>
                            <div class="col-1 d-flex justify-content-center align-items-center"><i class="bi bi-arrow-left-right"></i></div>
                            <div class="col-5">
                                <span class="p-2 d-flex justify-content-start" style="font-size: 0.8rem;">Perfis Associados</span>
                                <div class="list-box">
                                    <ListaPerfis store={perfis} done={true} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="row m-3 ">
                            <label class="col-1" for="E-mail">Empresas</label>
                            <div class="col-5">
                                <span class="p-2 d-flex justify-content-start" style="font-size: 0.8rem;">Empresas Disponíveis</span>
                                <div class="list-box">
                                    <ListaEmpresasDisponiveis store={empresas} done={false} />
                                </div>
                            </div>
                            <div class="col-1 d-flex justify-content-center align-items-center"><i class="bi bi-arrow-left-right"></i></div>
                            <div class="col-5">
                                <span class="p-2 d-flex justify-content-start" style="font-size: 0.8rem;">Empresas Associados</span>
                                <div class="list-box">
                                    <ListaEmpresasDisponiveis store={empresas} done={true} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
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

    .list-box {
        display: block;
        height: 220px;
        outline: solid 1px rgb(218, 210, 210) ;
        text-align: left;
    }
</style>