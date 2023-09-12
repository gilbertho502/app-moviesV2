import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Get } from '../data/httpClient'
import { getMovieImg } from '../utils/getMovieImg'
import './Detalles.css'
import { Link } from 'react-router-dom'

const Detalles = ()=> {

    const {movieId} = useParams()
    const [movie, setMovie] = useState([])
    const [generos, setGeneros] = useState([])

    useEffect(()=>{
        Get('/movie/' + movieId).then((data)=>{
            setMovie(data)
            setGeneros(data.genres[0])
        });
    },[movieId]);
    
    const imageURL = getMovieImg(movie.poster_path, 500)
    return(
        <div className='datailcontainer '>
            <Link to = {'/'}>
            <img className='col movieimage' src={imageURL} alt={movie.title} />
            </Link>
            <div className='col moviedetail'>
                
                <h4 className='title'>
                    <strong>Titulo: </strong>
                    {movie.title}
                </h4>
               
                <p>Genere: {generos.name}</p>
                <p>Description: {movie.overview}</p>
            </div>
            
        </div>
    )
}

export {Detalles}