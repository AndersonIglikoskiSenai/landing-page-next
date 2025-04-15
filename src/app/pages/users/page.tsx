"use client"

import { handleSelectAll, handleDelete, handleUpdate } from "@/app/utilities/handleactions"
import { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Trash2, FileEdit, ClipboardEdit } from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";

interface User {
    id: string;
    nome: string;
    email: string;
    cpf: string;
    telefone?: string;
}



export default function Users() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);


    useEffect(() => {
        const fetchUsers = async () => {
            const data = await handleSelectAll();
            if (data) {
                setUsers(data as User[]);
            }
            setLoading(false);
        };
        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div className='container py-12 px-4 items-center h-screen'>
                <h1 className='text-4xl font-bold mb-6 text-center'>Carregando...</h1>
            </div>
        )
    }

    const DeleteUser = async (id: string) => {
        const confirmDelete = confirm("Você tem certeza que deseja deletar este usuário?");
        if (confirmDelete) {
            try {
                await handleDelete(id);
                setUsers(users.filter(user => user.id !== id));
                toast.success("Usuário deletado com sucesso!");

            } catch (error) {
                console.error("Erro ao deletar usuário: ", error);
                toast.error("Erro ao deletar usuário!");
            }
        }
    }

    const editingUser = async (user: User) => {
        setSelectedUser(user);
    }

    const editUser = async (id: string) => {
        if (selectedUser) {
            try {
                await handleUpdate(id, selectedUser);
                setUsers(users.map(user => user.id === id ? selectedUser : user));
                toast.success("Usuário editado com sucesso!");
                setSelectedUser(null); // Limpa o usuário selecionado após a edição
            } catch (error) {
                console.error("Erro ao editar usuário: ", error);
                toast.error("Erro ao editar usuário!");
            }
        }
    }


    return (
        <div className='container py-12 px-4 items-center min-h-screen'>
            <Toaster position='bottom-right' />
            <h1 className='text-4xl font-bold mb-6 text-center'>USUÁRIOS</h1>
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="bg-gray-50 border-b dark:gb-gray-800 dark-border-gray-700">
                        <tr className="text-sm text-gray-500 dark:text-gray-400">
                            <th scope="col" className="px-6 py-3">Nome </th>
                            <th scope="col" className="px-6 py-3">Email</th>
                            <th scope="col" className="px-6 py-3">CPF</th>
                            <th scope="col" className="px-6 py-3">Telefone</th>
                        </tr>
                    </thead>
                    <tbody className="overflow-x-auto">

                        {users.map((user) => (
                            <tr key={user.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="px-6 py-4">{user.nome}</td>
                                <td className="px-6 py-4">{user.email}</td>
                                <td className="px-6 py-4">{user.cpf}</td>
                                <td className="px-6 py-4">{user.telefone}</td>
                                <td className="px-6 py-4 flex items-center">
                                    <div className=" gap-4 flex items-center">
                                        <Dialog.Root>
                                            <Dialog.Trigger asChild>
                                                <button className="flex items-center gap-2">
                                                    <ClipboardEdit className="w-4 h-4 text-blue-600 hover:text-blue-900 cursor-pointer" />
                                                    <span>Editar</span>
                                                </button>
                                            </Dialog.Trigger>
                                            <Dialog.Portal>
                                                <Dialog.Overlay className="fixed inset-0 bg-black/30" />
                                                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded shadow-lg">
                                                    <Dialog.Title className="text-lg font-bold">Editar Usuário</Dialog.Title>
                                                    <form onSubmit={(e) => { e.preventDefault(); editUser(user.id) }}>
                                                        <input
                                                            type="text"
                                                            placeholder="Nome"
                                                            className="border-2 border-blue-900 rounded p-2 mb-4 w-full"
                                                            value={selectedUser?.nome || ""}
                                                            onChange={(e) =>
                                                                setSelectedUser({ ...selectedUser!, nome: e.target.value })
                                                            }
                                                            required
                                                        />
                                                        <input
                                                            type="email"
                                                            placeholder="Email"
                                                            className="border-2 border-blue-900 rounded p-2 mb-4 w-full"
                                                            value={selectedUser?.email || ""}
                                                            onChange={(e) =>
                                                                setSelectedUser({ ...selectedUser!, email: e.target.value })
                                                            }
                                                            required
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="CPF"
                                                            className="border-2 border-blue-900 rounded p-2 mb-4 w-full"
                                                            value={selectedUser?.cpf || ""}
                                                            onChange={(e) =>
                                                                setSelectedUser({ ...selectedUser!, cpf: e.target.value })
                                                            }
                                                            required
                                                        />
                                                        <input
                                                            type="text"
                                                            placeholder="Telefone"
                                                            className="border-2 border-blue-900 rounded p-2 mb-4 w-full"
                                                            value={selectedUser?.telefone || ""}
                                                            onChange={(e) =>
                                                                setSelectedUser({ ...selectedUser!, telefone: e.target.value })
                                                            }
                                                        />
                                                        <button
                                                            type="submit"
                                                            className="bg-blue-900 text-white rounded p-2 mt-4 w-full"
                                                        >
                                                            Salvar
                                                        </button>
                                                    </form>
                                                </Dialog.Content>
                                            </Dialog.Portal>
                                        </Dialog.Root>

                                        <button className="text-red-600 hover:text-red-900 ml-2"
                                            onClick={() => DeleteUser(user.id)}>
                                            <Trash2 className="w-4 h-4" />Deletar</button>
                                    </div>
                                </td>

                            </tr>
                        ))
                        }
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                            <td className="px-6 py-4"></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    )
}