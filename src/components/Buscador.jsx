import swal from "@sweetalert/with-react";
import { useNavigate } from "react-router-dom";

const Buscador = () => {
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        const keyword = e.target.keyword.value.trim() ;
        console.log(keyword)

        if (keyword.length === 0) {
            swal('Tenes que escribir una pelicula')
        }else{
            e.target.keyword.value = '';
            navigate(`/resultados?keyword=${keyword}`)
        }

    }
  return (
    <form onSubmit={handleSubmit} className="flex items-center">
        <input type="text" className="rounded p-2" name='keyword' placeholder="Buscar..." />
        <button type='submit' className='p-2 text-xl rounded-full '>🔎</button>
    </form>
  )
}

export default Buscador