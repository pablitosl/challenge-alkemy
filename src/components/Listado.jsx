import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Listado = () => {

    let navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/');
        }
    }, [navigate])
    
    return (
        <div>Listado Componente</div>
    )
}

export default Listado