

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-200">
      <h1 className="text-4xl font-bold"> CashBlu - Serviços financeiros</h1>
      <p className="text-2xl mt-4 p-8">Bem-vindo - Aqui você vê um exemplo de site feito com Node.js</p>
      
      <img 
        src="/images/exemplo.jpg" 
        alt="Exemplo de imagem" 
        className="mt-8 w-64 h-auto" 
      />
    </div>
  );
}
