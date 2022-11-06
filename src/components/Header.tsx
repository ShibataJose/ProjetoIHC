interface HeaderProp {
    breadCrumb : string
};

export default function Header (props: HeaderProp) {
    return (
        <header className='bg-black flex justify-between h-12 items-center'>
            <div className='w-40 h-full overflow-hidden'>
                <img src='HeaderItems/Logo.png' className='w-full' />
            </div>
            <span className='absolute top-3 left-1/2'>{props.breadCrumb.toUpperCase()}</span>
            <span>Início {props.breadCrumb == 'inicio' ? '' : ' > ' +props.breadCrumb} </span>
        </header>
    )
};