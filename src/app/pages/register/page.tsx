"use client"

import { handleSelectAll, handleDelete, handleUpdate, handleADD } from "@/app/utilities/handleactions"
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Trash2, FileEdit, ClipboardEdit } from "lucide-react";
import * as Dialog  from "@radix-ui/react-dialog";
import { userValidation, addressValidation } from "@/app/utilities/zodvalidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { IMaskInput } from "react-imask";
import  FormUseData  from "@/app/pages/register/formUserData";
import  FormUserAddress  from "@/app/pages/register/formUserAdress";
import { z } from "zod";


const combinedSchema = z.object({
    ...userValidation.shape,
    ...addressValidation.shape,
})

.refine((data) => data.senha === data.confirmaSenha, {
    path: ["confirmaSenha"],
message: "As senhas não conferem"
});

type FormData = z.infer<typeof combinedSchema>;


export default function Register() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [cpfMessage, setCPFMessage] = useState("");
    const [cpfValid, setCPFValid] = useState(false);
    const methods = useForm<FormData>({
        resolver: zodResolver(combinedSchema),  
        defaultValues: {nome: "",email: "",senha: "",confirmaSenha: "",cpf: "",
        telefone: "",cep: "",rua: "",numero: "",complemento: "",bairro: "",cidade: "",estado: "",
        }
    })

    const {register, handleSubmit, formState: {errors},control, setValue, reset} = methods;

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            await handleADD(data);
            toast.success("Usuário Cadastrado com sucesso!");
            setIsSubmitting(false);
            methods.reset();
        } catch (error) {
            console.error("Erro ao atualizar usuário: ", error);
            toast.error("Erro ao atualizar usuário!");
            setIsSubmitting(false);
        }
    };
    
    return (
        <div className='flex flex-col min-h-screen justify-center items-center bg-gray-100 mb-4'>
            <Toaster position="bottom-right"/>
            <div className='w-full max-w-6x1 mx-auto p-4 bg-white shadow-md rounded-lg'>
                <h1 className="text-4x1 font-bold mb-6 text-center">Cadastro</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col md:flex-row md:sapce-x-4 gap-4">
                        <div className="flex-1">
                            <FormUseData register={register} errors={errors} control={control} 
                            cpfMessage={cpfMessage} setCPFMessage={setCPFMessage} cpfValid={cpfValid} setCPFValid={setCPFValid}/>
                        </div>
                        <div className="flex-1">
                            <FormUserAddress register={register} errors={errors} control={control} setValue={setValue}/>
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <button type="submit" disabled={isSubmitting} 
                        className={`bg-blue-900 text-white font-bold py-2 px-4 rounded ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}>Cadastrar
                    </button>
                    </div>
                </form>
            </div>
            
        </div>
        
    )
};