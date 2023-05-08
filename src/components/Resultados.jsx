import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "@sweetalert/with-react";


const Resultados = () => {

    let query = new URLSearchParams(window.location.search);
    let keyword = query.get('keyword')

    const [results, setResults] = useState([])

    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=7ddd7d22adfb9fb25ce3c6f86f94a89e&language=es-ES&query=${keyword}`;

        axios.get(endpoint)
            .then(res => {
                const moviesResults = res.data.results;
                if(moviesResults.length === 0){
                    swal('No hay resultados de tu búsqueda')
                }
                setResults(moviesResults)
            })
        }, [keyword])

return (
    <>
    <h2 className='text-2xl font-bold text-center my-4'>Resultados de la busqueda:<em> {keyword}</em></h2>
    <div className='grid grid-cols-4 gap-4 justify-items-center'>

            { results.map((movie) => {
            return (
                <div key={movie.id} className='border w-80 my-2 flex flex-col justify-between'>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <h3 className='text-2xl text-center font-bold p-1'>{movie.title}</h3>
                    <p className='p-3'>{movie.overview.substring(0,120)}...</p>
                    <Link to={`/detalle?movieID=${movie.id}`} className='text-center font-bold bg-red-600 p-2 px-4'>Ver detalle</Link>
                </div>
            )
            })}

    </div>
    </>
    
)
}

export default Resultados