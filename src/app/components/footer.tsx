export default function Footer() {
  return (
    <footer className="bg-blue-200 text-center py-4 bg-gray-800 text-white mt-auto flex flex-col items-center justify-center">
      <div className="container flex flex-col md:flex-row justify-between items-center px-4">
        <div className="w-1/2 border-r border-gray-600">
            <p className="text-lg">Desenvolvido por Anderson Iglikoski</p>
            <p className="text-sm">Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
        </div>
        <div className="w-1/2">
            <p>Gerado por <a href="https://create-next-app.dev" className="underline">create-next-app.dev</a></p>
            <p>Com <a href="https://tailwindcss.com" className="underline">Tailwind CSS</a></p>
        </div>
      </div>
    </footer>
  );
}