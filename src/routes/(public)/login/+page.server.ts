import { loginUser } from '$lib/user.model.js'

export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        
        // const { email, password } = formData    OUTRA FORMA DE SINTAXE
        const login = formData.get('login')
        const password = formData.get('password')

        if (typeof login !== 'string' || typeof password !== 'string') {
            console.error('Valores de login e/ou senha inválidos.');
            return {
                error: 'Valores de login e/ou senha inválidos.',
            };
        }

        const {error, token} = await loginUser(login, password)

        if (error) {
            console.log(error)
            return {
                error
            } 
        }
        return {
            token
        }
    }
}