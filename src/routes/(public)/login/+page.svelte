<script>
    import'../../../lib/custom-styles.css'
    import { onMount } from 'svelte'
    
    export let form

    let loginData = {
        email: '',
        password: '',
    }

    let showFormulSenha = true
    let showMsgErrorLogin = false

    function esqueceSenha () {
        // ocultar div com ID formulEntrar
        showFormulSenha = !showFormulSenha
        console.log(`funcao esqueceSenha executada. showFormulSenha é: ${showFormulSenha}`)
    }

    function MsgErrorLogin () {
        showMsgErrorLogin = true
        showFormulSenha = !showFormulSenha

    }


    // VERIFICAÇÃO DE TOKEN, REDIRECIONAMENTO, ARMAZENAMENTO EM LOCALSTORAGE
    let token = ''
    onMount ( ( ) => {
        if (form?.token) {
            // caso tenha token, direciona usuário para HOME
            window.location.href = '/'
            token = form.token

            localStorage.setItem('token', token)

        } 
        if (form?.error){
            // senao tem token, executa função para mostrar msg de erro de login
            MsgErrorLogin ()
        }
    })

    //exemplo dado pelo chatgpt (para pesquisa futura)
    // let redirectToError = false
    
    // afterUpdate(() => {
    //     if (form?.error && !redirectToError) {
    //         console.log(form.error)
    //         redirectToError = true
    //         window.location.href = '/sobre'
    //     }
    // })

</script>


<div class="body">
    <div class="container d-flex justify-content-center mx-auto " >
        <div class="content bg-transparenciaPouca m-5 ">
            <div class="d-flex justify-content-center   ">
                <img src="logoLogin.png" style="max-width: 200px" alt="dfsg">
            </div>
            
            <!-- begin login form -->
            <div class={showFormulSenha ? 'show' : 'hide'}  >
                <form method="post" class="card card-body bg-transparente" style="max-width: 400px" >
                    <label class=" py-1">
                        <input class="form-control" name="login" type="text" required placeholder="Usuário..." bind:value={loginData.email}>
                    </label> 
                    <label class="py-1">
                        <input class="form-control" name="password" type="password" required placeholder="Senha..." bind:value={loginData.password}>
                    </label> 
    
                    <label class="py-1 d-flex justify-content-between ">
                        <button class="btn btn-success text-white" style="width: 120px;" type="submit"> 
                            Entrar
                        </button>
                        <p class="text-white">
                            <input name="RememberMe" type="checkbox" > <!-- - retirado value="true" data-val-required="The Lembrar field is required." por enquanto - -->
                            <input name="RememberMe" type="hidden" > <!-- - retirado value="false" por enquanto - -->
                            Lembrar
                        </p>
    
                    </label>
                    <label class=" d-flex flex-column py-1">
                        <input  type="hidden">   <!-- TAG existente apenas para nao mostrar erro quanto necessidade de "control" -->
                        <a href="#" id="forget-password" class="forget-password text-white text-info" on:click={esqueceSenha} >Esqueceu sua senha?</a>
                        <a href="cadastrar" class="text-white text-info">Cadastrar-se</a>
                    </label> 
                </form>
            </div>
            <!-- end login form -->
    
            <!-- begin forgot password form -->
            <div class={showFormulSenha || showMsgErrorLogin ? 'hide' : 'show'} >
                <form class="card card-body bg-transparente" style="max-width: 400px"  >
                    <label class=" py-1">
                        <input  type="hidden">   <!-- TAG existente apenas para nao mostrar erro quanto necessidade de "control" -->
                        <h4 class="text-center text-white">Esqueceu sua senha? </h4>
                        <p class="text-white">Digite seu e-mail de cadastro para redefinir sua senha:</p>
                    </label> 
                    <label class="py-1">
                        <input class="form-control" type="email" placeholder="E-mail..." bind:value={loginData.password}>
                    </label> 
    
                    <label class="py-1 d-flex justify-content-evenly">
                        <button class="btn btn-secondary" type="submit" on:click={esqueceSenha}> Voltar </button>
                        <button class="btn btn-success " type="submit"  > Redefinir </button>
                    </label>
    
                   
                </form>
            </div>
            <!-- end forgot password form -->

            <!-- begin error login message -->
            <div class={showMsgErrorLogin && !showFormulSenha ? 'show' : 'hide'} >
                <form method="post" class="card card-body bg-transparente" style="max-width: 400px"  >
                    <label class=" py-1">
                        <input  type="hidden">   <!-- TAG existente apenas para nao mostrar erro quanto necessidade de "control" -->
                        <h5 class="text-center text-danger bg-danger-subtle ">Login ou senha inválidos</h5>
                    </label> 

                    <label class=" py-1">
                        <input class="form-control" name="login" type="text" required placeholder="Usuário..." bind:value={loginData.email}>
                    </label> 
                    <label class="py-1">
                        <input class="form-control" name="password" type="password" required placeholder="Senha..." bind:value={loginData.password}>
                    </label> 


                    <label class="py-1 d-flex justify-content-between ">
                        <button class="btn btn-success text-white" style="width: 120px;" type="submit"> 
                            Entrar
                        </button>
                        <p class="text-white">
                            <input name="RememberMe" type="checkbox" > <!-- - retirado value="true" data-val-required="The Lembrar field is required." por enquanto - -->
                            <input name="RememberMe" type="hidden" > <!-- - retirado value="false" por enquanto - -->
                            Lembrar
                        </p>
    
                    </label>
                    <label class=" d-flex flex-column py-1">
                        <input  type="hidden">   <!-- TAG existente apenas para nao mostrar erro quanto necessidade de "control" -->
                        <a href="#" id="forget-password" class="forget-password text-white text-info" on:click={esqueceSenha} >Esqueceu sua senha?</a>
                        <a href="/cadastrar" class="text-white text-info">Cadastrar-se</a>
                    </label> 
    
                   
                </form>
            </div>
            <!-- end error login message -->

        </div>
    </div>
</div>


<style>

    .body {
        background-image: url('telaFundo.png');
        background-size: cover;
        background-position: center;
        min-height: 100vh;
    }

    .hide {
        opacity: 0;
        pointer-events: none;
        max-height: 0;
   
    }

    .show {
        opacity: 1;
        transition: opacity 1s;
    }
</style>
  
