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
    <>
        <h2>Formulario de login</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Ingrese su email" />
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" id="password" placeholder="Ingrese su contraseña" />
            <button type="submit">Ingresar</button>
        </form>
    </>
  )
}

export default Login