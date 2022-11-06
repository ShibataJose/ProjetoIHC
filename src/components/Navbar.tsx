import { List } from "phosphor-react"

interface NavbarProp {
    changePage: React.Dispatch<React.SetStateAction<string>>
};

export default function Navbar(props: NavbarProp) {
    return (
        <nav className="w-20 h-full bg-black fixed top-0 left-0 text-sm">
            <div className='w-full h-14 flex items-center justify-center hover:cursor-pointer hover:border-[#00FF57] hover:transition-[border-color] ease-in-out hover:border-r'>
                <List size={30} />
            </div>
            <div className='border-[#00FF57] border-r border-opacity-[80%]'>
                <div onClick={() => props.changePage(() => 'inicio')} className='w-full h-14 flex items-center justify-center border-b-[1px] border-white hover:cursor-pointer hover:bg-[#D9D9D9] hover:bg-opacity-[20%]'>
                    <span>Início</span>
                </div>
                <div onClick={() => props.changePage(() => 'software')} className='w-full h-14 flex items-center justify-center border-b-[1px] border-white hover:cursor-pointer hover:bg-[#D9D9D9] hover:bg-opacity-[20%]'>
                    <span>Software</span>
                </div>
                <div onClick={() => props.changePage(() => 'orçamento')} className='w-full h-14 flex items-center justify-center border-b-[1px] border-white hover:cursor-pointer hover:bg-[#D9D9D9] hover:bg-opacity-[20%]'>
                    <span>Orçamento</span>
                </div>
                <div onClick={() => props.changePage(() => 'clientes')} className='w-full h-14 flex items-center justify-center border-b-[1px] border-white hover:cursor-pointer hover:bg-[#D9D9D9] hover:bg-opacity-[20%]'>
                    <span>Clientes</span>
                </div>
                <div onClick={() => props.changePage(() => 'sobre')} className='w-full h-14 flex items-center justify-center hover:cursor-pointer hover:bg-[#D9D9D9] hover:bg-opacity-[20%]'>
                    <span>Sobre</span>
                </div>
            </div>
        </nav>
    );
};