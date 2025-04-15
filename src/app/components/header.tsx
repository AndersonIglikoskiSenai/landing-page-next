'use client';

import Nav from './nav';
import Link from 'next/link';
import { useState } from 'react';
import { User, ClipboardPenLine, FileUserIcon, LogOut } from 'lucide-react';
import { useAuth, useUnAuth } from '../lib/firebaseauth';
import Login from '@/app/components/login';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const { user } = useAuth();
    const router = useRouter();
    
    const openLoginModal = () => {
        setIsLoginModalOpen(true);
    }
    const closeLoginModal = () => {
        setIsLoginModalOpen(false);
    }

    const handleLogout = async () => {
        await useUnAuth();
        router.push('/')};

    return (
        <header className="grid grid-cols-5 grid-rows-2 bg-gray-800 text-white px-2 py-1">
            <div className="col-span-1 row-span-2 flex items-center justify-center">
                <h1 className="text-1sm font-bold content-center"> MY NEXT APP</h1>
            </div>
            <div className="col-span-4 flex items-center justify-end space-x-4">
                {user ? (
                    <>
                        <FileUserIcon className='w-6 h-6' />
                        <Link href="/profile" className="text-sm font-bold">Perfil</Link>
                        <LogOut className='w-6 h-6' />
                        <button className="text-sm font-bold"
                            onClick={handleLogout}>Sair</button>
                    </>
                ) : (
                    <>
                        <User className='w-6 h-6' />
                        <button onClick={openLoginModal} className="text-sm font-bold">
                            Login</button>
                        <ClipboardPenLine className='w-6 h-6' />
                        <Link href="/register" className="text-sm font-bold">Registrar</Link>
                    </>
                )}
            </div>
            <div className='col-span-4  flex items-center justify-end'>
                <Nav />
            </div>
            {isLoginModalOpen && <Login onClose={closeLoginModal} />}
        </header>
    );
}