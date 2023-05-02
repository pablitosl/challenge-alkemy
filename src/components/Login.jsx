//import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import swal from '@sweetalert/with-react'

const Login = () => {

    let navigate = useNavigate();
    //http://challenge-react.alkemy.org/
    const handleSubmit = (e) =>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i ;
        
        if(email === '' || password === ''){
            swal('Ingresar un email y una contraseña', '', 'error')
            return;
        }
        if(email !== '' && !regex.test(email)){
            swal('Correo electronico invalido','', 'error')
            return;
        }
        if(email !== 'challenge@alkemy.org' || password !== 'react'){
            swal('Credenciales incorrectas','', 'error')
            return;
        }
        console.log('Todo OK !')
        axios.post('http://challenge-react.alkemy.org/', {email, password})
        .then(res => {
            swal('Ingreso correcto',' ', {
                icon: "success",
                buttons: false,
                timer: 1500,
            })
            const token = res.data.token;
            localStorage.setItem('token', token);
            navigate('/listado');
        });
    }

return (
    <div className='bg-slate-600 text-center h-screen'>
        <h2 className='text-4xl py-4 text-white'>Formulario de login</h2>
        <form onSubmit={handleSubmit} className='flex flex-col items-center py-6 text-white'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='text-black my-2 p-1 rounded' placeholder="Ingrese su email" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" className='text-black my-2 p-1 rounded' placeholder="Ingrese su contraseña" />
            <button type="submit" className='rounded bg-slate-300 px-6 py-1 mt-4 text-black'>Ingresar</button>
        </form>
    </div>
  )
}

export default Login