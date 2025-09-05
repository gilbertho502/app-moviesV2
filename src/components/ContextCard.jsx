import {useEffect, useState} from 'react'
import {Get} from '../data/httpClient'
import { MovieCard } from './MovieCard'
import '../styles/contextcard.css'


const ContextCard=()=>{

    const [movies, setMovies] = useState([])
    useEffect(()=>{
        Get('/discover/movie')
        .then((data)=> {
            setMovies(data.results)
            // console.log('desde la api',data)
        })
    },[])

    return(
        <div className=''>
            <ul className='container'>
                {movies.map((movie)=>(
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
            </ul>
        </div>
    )
}

export {ContextCard}