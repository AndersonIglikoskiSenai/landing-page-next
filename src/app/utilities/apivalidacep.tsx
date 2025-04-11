export async function validateCEP(cep: string) {
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
            console.log('Invalid CEP:', data.erro);
            return false;
        } else {
            return data;
        }
    } catch (error) {
        console.error('Erro na resposta da API: ', error);
        return false;
    }
}