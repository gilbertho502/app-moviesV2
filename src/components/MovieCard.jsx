/* eslint-disable react/prop-types */
// import React from 'react'
import '../styles/movieCard.css'
import { Link } from 'react-router-dom'

const MovieCard=({movie})=>{
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path
    
    return(
        <div>
            <li className='moviecard'>
                <Link to={'/movies/'+movie.id}>
                <img className='movieimage' 
                    width={230} 
                    height={345}
                    src={imageUrl} 
                    alt={movie.title} />
                </Link>
                <h4 className='titulo'>{movie.title}</h4>
            </li>            
        </div>
    )
}

export {MovieCard}