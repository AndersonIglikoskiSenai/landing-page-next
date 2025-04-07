import { z } from 'zod';

export const zodValidation = z.object({
    nome: z.string()
        .min(1, { message: 'Nome é obrigatório' })
        .min(3, { message: 'Nome deve ter no máximo 3 caracteres' }),
    email: z.string()
        .min(1, { message: 'O email é obrigatório' })
        .email({ message: 'Email invalido' })
        .min(8, { message: 'O email deve ter no máximo 8 caracteres' }),
    cpf: z.string()
        .min(1, { message: 'O CPF é obrigatório' })
        .length(14, { message: 'O CPF deve ter 11 caracteres' }),
    telefone: z.string()
        .optional()
})