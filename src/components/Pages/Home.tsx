import { YoutubeLogo, DiscordLogo } from "phosphor-react";

export default function Home() {
    return (
        <div className='flex flex-col items-center'>
            <div className="bg-black border-white border w-[80%] h-64 my-6">

            </div>
            <div className="bg-[#181A1B] flex w-[80%] rounded border-[#00FF57] border-t-2 border-opacity-[80%]">
                <div className='w-[50%]'>
                    <h1 className="text-lg"> Comunidade Black Hat </h1>
                    <p>
                        Não só oferecemos serviços, mas também somos uma comunidade
                        completamente unida, visite nossas redes sociais e participe de nossos grupos
                    </p>
                    <button className="w-[70%] rounded my-4 h-10 bg-[#3C3C3C] hover:bg-[#6e6d6d] mx-auto flex gap-2 text-sm items-center border-white border">
                        <div className='w-14 h-full border-r-black border-r-2 border-opacity-50 overflow-hidden flex justify-center items-center'>
                            <YoutubeLogo size={30} color='red' />
                        </div>
                        <p>Fique por dentro do mundo da tecnologia</p>
                    </button>
                    <button className="w-[70%] rounded my-4 h-10 bg-[#3C3C3C] hover:bg-[#6e6d6d] mx-auto flex gap-2 text-sm items-center border-white border">
                        <div className='w-14 h-full border-r-black border-r-2 border-opacity-50 overflow-hidden flex justify-center items-center'>
                            <DiscordLogo size={30} color='cyan' />
                        </div>
                        <p>Fique por dentro do mundo da tecnologia</p>
                    </button>
                    <button className="w-[70%] rounded my-4 h-10 bg-[#3C3C3C] hover:bg-[#6e6d6d] mx-auto flex gap-2 text-sm items-center border-white border">
                        <div className='w-14 h-full border-r-black border-r-2 border-opacity-50 overflow-hidden flex justify-center items-center'>
                            <YoutubeLogo size={30} color='red' />
                        </div>
                        <p>Fique por dentro do mundo da tecnologia</p>
                    </button>
                    <button className="w-[70%] rounded my-4 h-10 bg-[#3C3C3C] hover:bg-[#6e6d6d] mx-auto flex gap-2 text-sm items-center border-white border">
                        <div className='w-14 h-full border-r-black border-r-2 border-opacity-50 overflow-hidden flex justify-center items-center'>
                            <YoutubeLogo size={30} color='red' />
                        </div>
                        <p>Fique por dentro do mundo da tecnologia</p>
                    </button>
                    <button className="w-[70%] rounded my-4 h-10 bg-[#3C3C3C] hover:bg-[#6e6d6d] mx-auto flex gap-2 text-sm items-center border-white border">
                        <div className='w-14 h-full border-r-black border-r-2 border-opacity-50 overflow-hidden flex justify-center items-center'>
                            <YoutubeLogo size={30} color='red' />
                        </div>
                        <p>Fique por dentro do mundo da tecnologia</p>
                    </button>
                </div>
                <div>
                    <h1 className="text-lg">Notícias</h1>
                </div>
            </div>
        </div>
    )
};