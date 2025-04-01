import { Mail, Phone, MapPin, Facebook, Instagram, Twitch, Twitter } from 'lucide-react';

export default function Contact() {
    return (
        <div className='container mx-auto py-12 px-4'>
            <h1 className='text-4xl font-bold mb-6 text-center'>CONTATOS</h1>

            <div>
                <h4 className='text-2xl font-bold mb-6'>Horário de funcionamento</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {["Seg-Sex: 09:00 - 18:00", "Sáb: 10:00 - 14:00", "Domingo: Fechado"]
                        .map((day, index) => (
                            <div key={index} className='border-2 border-blue-900 rounded-lg p-6 bg-white shadow-md'>
                                <h3 className='text-lg font-bold mb-3'>{day}</h3>
                            </div>
                        ))}
                </div>
            </div>

            <div className='mt-10'>
                <h4 className='text-2xl font-bold mb-6'>Localização</h4>
                <iframe className='w-full h-64 rounded-lg shadow-md'
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28462.591652756033!2d-49.0733568!3d-26.909081599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1743459251194!5m2!1spt-BR!2sbr"
                    allowFullScreen
                    loading="lazy">
                </iframe>



            </div>
            <div>
                <div className='mt-10'>
                    <h4 className='text-2xl font-bold mb-6'>FAQ - Perguntas Frequentes</h4>
                    <div className='grid grid-cols-1'>
                        {[{ q: "Qual o horário de funcionamento?", a: "Horário Comercial e sábados das 09h00 ás 12h00." },
                        { q: "Como posso entrar em contato?", a: "Pelo Formulário de contato ou pelo telefone." },
                        { q: "Onde vocês estão localizados?", a: "Estamos em Blumenau-SC." }]
                            .map((faq, index) => (
                                <details key={index} className='border-2 border-blue-900 rounded-lg p-6 bg-white shadow-md mb-4'>

                                    <summary className='text-lg font-bold mb-3'>{faq.q}</summary>
                                    <p className='text-gray-700'>{faq.a}</p>
                                </details>
                            ))}
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10'>
                    <div>
                        <h4 className='text-2xl font-bold mb-6'>Envie sua mensagem.</h4>
                        <form className=" bg-white shadow-md rounded-lg p-6">
                            <input type="text" placeholder='Nome'
                                className='border-2 border-blue-900 rounded-lg p-2 mb-4 w-full' />
                            <input type="email" placeholder='Email'
                                className='border-2 border-blue-900 rounded-lg p-2 mb-4 w-full' />
                            <textarea placeholder='Mensagem'
                                className='border-2 border-blue-900 rounded-lg p-2 mb-4 w-full' />
                            <button type='submit' className='bg-blue-900 text-white rouded-lh p-2 w-full'>Enviar</button>
                        </form>
                    </div>
                    <div className='bg-white shadow-md rounded-lg p-6'>
                        <h4 className='text-2xl font-bold mb-6'>Entre em contato diretamente</h4>
                        <h6 className='text-lg font-bold mb-6'>Redes sociais</h6>
                        <div className='grid grid-cols-3 gap-4 md-6'>
                            <div className='grid grid-vols-3 gap-4 mb-6'>
                            <Facebook className='text-blue-900' size={27} />
                            <Instagram className='text-blue-900' size={27} />
                            <Twitter className='text-blue-900' size={27} />
                            </div>

                        </div>

                        <h6 className='text-lg font-bold mb-6'>Contatos diretos</h6>
                         <Phone className='text-blue-900' size={24} />
                         <span className='text-gray-700'> (47) 99999-9999</span>
                         <Mail className='text-blue-900' size={24} />
                         <span className='text-gray-700'>email@email.com</span>
                         <MapPin className='text-blue-900' size={24} />
                         <span className='text-gray-700'>Av. ABC, Numero: 123, Blumenai,SC</span>
                    </div>

                </div>

            </div>



        </div>



    )
}