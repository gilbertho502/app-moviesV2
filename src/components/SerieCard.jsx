/* eslint-disable react/prop-types */
// import React from 'react'
import '../styles/movieCard.css'
import { Link } from 'react-router-dom'

const SerieCard=({serie})=>{
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + serie.poster_path

    return(
        <div>
            <li className='tvcard'>
                <Link to={'/tv/'+serie.id}>
                    <img className='tvimage'
                        width={230} 
                        height={345}
                        src={imageUrl} 
                        alt={serie.name} />
                </Link>
                <h3 className='titulo'>{serie.name}</h3>
            </li>
        </div>
    )
}

export {SerieCard}