import Nav from './nav'

export default function Header() {
    return (
        <header className="flex justify-between bg-gray-800 text-white px-4 py-2">
            <h1 className="text-1sm font-bold content-center">CashBlu</h1>
            <Nav />
        </header>
    )
}