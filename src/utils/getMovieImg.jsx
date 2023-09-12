import pelicula from '../img/pelicula.png'

const getMovieImg =(path, width)=>{
    return path ? `https://image.tmdb.org/t/p/w${width}${path}` : pelicula;
}

export {getMovieImg}