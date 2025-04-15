import Link from "next/link";

export default function Nav() {
    return (
        <nav className="flex flex-row mt-4 gap-5">
            <Link href="/" className="p-2 hover:bg-gray-200 hover:text-gray-800 rounded-lg duration-400 hover:animate-pulse">Início</Link>
            <Link href="/about" className="p-2 hover:bg-gray-200 hover:text-gray-800 rounded-lg duration-400 hover:animate-pulse">Sobre nós</Link>
            <Link href="/contact" className="p-2 hover:bg-gray-200 hover:text-gray-800 rounded-lg duration-400 hover:animate-pulse">Contato</Link>
            <Link href="/users" className="p-2 hover:bg-gray-200 hover:text-gray-800 rounded-lg duration-400 hover:animate-pulse">Usuários</Link>
        </nav>
    )
}