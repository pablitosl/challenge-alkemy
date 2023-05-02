import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-400'>
        <nav className='flex justify-between px-4'>
            <img src={logo} alt="logo" className='w-44'/>
            <ul className='flex items-center gap-x-6 text-2xl'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/listado'>Listado</Link></li>
                <li><Link to='/contacto'>Contacto</Link></li>
            </ul>
        </nav>
    </header>
  )
}
export default Header