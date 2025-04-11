import { z } from 'zod';

export const userValidation = z.object({
    nome: z.string()
        .min(1, { message: "Nome é obrigatório" })
        .min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    email: z.string()
        .min(1, { message: "O email é obrigatório" })
        .email({ message: "Email inválido" })
        .min(8, { message: "O email deve ter pelo menos 8 caracteres" }),
    senha: z.string()
        .min(1, { message: "A senha é obrigatória" })
        .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
        .regex(/[a-z]/, { message: "A senha deve conter pelo menos uma letra minúscula" }),
    confirmaSenha: z.string()
        .min(1, { message: "A confirmação de senha é obrigatória" })
        .min(8, { message: "A confirmação de senha deve ter pelo menos 8 caracteres" }), 
    cpf: z.string()
        .min(1, { message: "O CPF é obrigatório" })
        .length(14, { message: "O CPF deve ter 11 caracteres" }),
    telefone: z.string()
        .optional()
})


export const addressValidation = z.object({
    cep: z.string()
        .min(1, { message: "O CEP é obrigatório" }) 
        .length(8, { message: "O CEP deve ter 8 caracteres" }),
    rua: z.string()
        .min(1, { message: "A rua é obrigatória" })
        .min(3, { message: "A rua deve ter pelo menos 3 caracteres" }),
    numero: z.string()
        .min(1, { message: "O número é obrigatório" })
        .min(1, { message: "O número deve ter pelo menos 1 caracteres" }),
    complemento: z.string()
        .optional(),
    bairro: z.string()
        .min(1, { message: "O bairro é obrigatório" })
        .min(3, { message: "O bairro deve ter pelo menos 3 caracteres" }),
    cidade: z.string()
        .min(1, { message: "A cidade é obrigatória" })  
        .min(3, { message: "A cidade deve ter pelo menos 3 caracteres" }),
    estado: z.string()
        .min(1, { message: "O estado é obrigatório" })
        .length(2, { message: "O estado deve ter 2 caracteres" }),
})