import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Detalle = () => {

  const [movieDetail, setMovieDetail] = useState([]);
  let navigate = useNavigate();
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token){
            navigate('/');
        }
    }, [navigate])

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get('movieID')

    useEffect(() => {
      const endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=7ddd7d22adfb9fb25ce3c6f86f94a89e&language=es-ES`

        axios.get(endpoint)
            .then(res => {
                const apiData = res.data;
                setMovieDetail(apiData);
            })
    }, [movieID])
  console.log(movieDetail)
  return (
    <>
      <h2>Detalle de la pelicula</h2>
      {
        movieDetail.length !== 0 ? (
          <div className='border w-9/12 mx-auto my-2 flex justify-between'>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} className="mx-auto" alt={movieDetail.title} />
            <div className="flex flex-col justify-center items-center px-6  ">
              <h3 className='text-2xl text-center font-bold p-1'>{movieDetail.title}</h3>
              <p>{movieDetail.release_date}</p>
              <p className='p-3'>{movieDetail.overview}</p>
            </div>
          </div>
        ) : (
          <p>Cargando...</p>
        )
      }
    </>
    
  )
}

export default Detalle