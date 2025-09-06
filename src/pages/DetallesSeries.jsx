import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Get } from '../data/httpClient'
import { getSerieImg } from '../utils/getMovieImg'
import './Detalles.css'
import { Link } from 'react-router-dom'

const DetallesSeries = ()=> {

    const {tvId} = useParams()
    const [tv, setTv] = useState([])
    const [generos, setGeneros] = useState([])

    useEffect(()=>{
        Get('/tv/' + tvId).then((data)=>{
            setTv(data)
            setGeneros(data.genres[0])
        });
    },[tvId]);

    const imageURL = getSerieImg(tv.poster_path, 500)
    return(
        <div className='datailcontainer '>
            <Link to = {'/'}>
            <img className='col movieimage' src={imageURL} alt={tv.title} />
            </Link>
            <div className='col moviedetail'>
                
                <h4 className='title'>
                    <strong>Titulo: </strong>
                    {tv.name}
                </h4>
               
                <p>Genere: {generos.name}</p>
                <p>Description: {tv.overview}</p>
            </div>
            
        </div>
    )
}

export {DetallesSeries}