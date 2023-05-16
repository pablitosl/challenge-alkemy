const toogleFavs = e => {
    const btn = e.target;
    const parent = btn.parentElement;

    const imgURL = parent.querySelector('img').getAttribute('src');
    const title = parent.querySelector('h3').innerText;
    const overview = parent.querySelector('p').innerText;

    const movieData = {
        imgURL, title, overview,
        id: btn.dataset.movieId
    }
    const favsMovies = localStorage.getItem('favs')
    
    let tempMoviesInFavs ;

    if(favsMovies === null){
        tempMoviesInFavs = []   
    }else{
        tempMoviesInFavs = JSON.parse(favsMovies)
    }

    let  moviesInArray = tempMoviesInFavs.find(movie => movie.id === movieData.id);
    
    if(!moviesInArray){
        tempMoviesInFavs.push(movieData);
        localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
        btn.classList.remove('disabled')
        console.log('se agrego')
    }else{
        let deleteFav = tempMoviesInFavs.filter(movie =>{
            return movie.id !== movieData.id
        })
    localStorage.setItem('favs', JSON.stringify(deleteFav))
    btn.classList.add('disabled')
    console.log('se elimino')
    }
}

export default toogleFavs