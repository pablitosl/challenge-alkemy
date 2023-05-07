import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from './Cards';

const Listado = () => {

    let navigate = useNavigate();
    
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if(!token){
            navigate('/');
        }
    }, [navigate])
    
    return (
        <div>
            <h2 className='text-4xl py-4'>Listado Componente</h2>
            <Cards />
        </div>
    )
}

export default Listado