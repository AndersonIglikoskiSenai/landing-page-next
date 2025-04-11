import { IMaskInput } from "react-imask";
import { Control, Controller, Field, FieldError, FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { register } from "module";
import { validateCEP } from "@/app/utilities/apivalidacep";
import toast from "react-hot-toast";


type FormUserAddress = {
    register: UseFormRegister<any>,
    errors: FieldErrors<any>,
    control: Control<any>,
    setValue: UseFormSetValue<any>
};

export default function FormUserAddress({ register, errors, control, setValue }: FormUserAddress) {
    const cepBlur = async (value: string) => {
        const result = await validateCEP(value);
    if(result) {
        setValue("Rua", result.logradouro);
        setValue("Bairro", result.bairro);
        setValue("Cidade", result.localidade);
        setValue("Estado", result.uf);}
        else {
            toast.error("CEP inválido!");
            setValue("Rua", "");
            setValue("Bairro", "");
            setValue("Cidade", "");
            setValue("Estado", "");
        }
    };

    return (
        <div className="flex flex-col gap-4 w-full">
            <h1 className="text-2xl font-bold">Endereço</h1>
            <Controller name="cep" control={control}
                render={({ field }) => (
                    <IMaskInput
                        value={field.value} mask="00000-000" placeholder="CEP"
                        className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full"
                        onBlur={() => cepBlur(field.value)}
                        onAccept={(value: string) => {
                            field.onChange(value);
                        }}
                    />
                )}
            />
            {errors.cep && <span className="text-red-600">{String(errors.cep.message)}</span>}


            <input type="text" placeholder="Rua" {...register("Rua")} className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full" />
            {errors.rua && <span className="text-red-600">{String(errors.rua.message)}</span>}

            <input type="text" placeholder="Numero" {...register("Numero")} className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full" />
            {errors.numero && <span className="text-red-600">{String(errors.numero.message)}</span>}

            <input type="text" placeholder="Complemento" {...register("Complemento")} className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full" />
            {errors.Complemento && <span className="text-red-600">{String(errors.Complemento.message)}</span>}

            <input type="text" placeholder="Bairro" {...register("Bairro")} className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full" />
            {errors.bairro && <span className="text-red-600">{String(errors.bairro.message)}</span>}

            <input type="text" placeholder="Cidade" {...register("Cidade")} className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full" />
            {errors.cidade && <span className="text-red-600">{String(errors.cidade.message)}</span>}

            <input type="text" placeholder="Estado" {...register("Estado")} className="border-2 border-blue-900 rounded-lg p-2 mt-2 w-full" />
            {errors.estado && <span className="text-red-600">{String(errors.estado.message)}</span>}

            
        </div>
    );
}