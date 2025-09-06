import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {Get } from '../data/httpClient'
import { getSerieImg } from '../utils/getMovieImg'
import './Detalles.css'
import { Link } from 'react-router-dom'

const DetallesSeries = ()=> {

    const {serieId} = useParams()
    const [serie, setSerie] = useState([])
    const [generos, setGeneros] = useState([])

    useEffect(()=>{
        Get('/tv/' + serieId).then((data)=>{
            setSerie(data)
            setGeneros(data.genres[0])
        });
    },[serieId]);

    const imageURL = getSerieImg(serie.poster_path, 500)
    return(
        <div className='datailcontainer '>
            <Link to = {'/'}>
            <img className='col movieimage' src={imageURL} alt={serie.title} />
            </Link>
            <div className='col moviedetail'>
                
                <h4 className='title'>
                    <strong>Titulo: </strong>
                    {serie.title}
                </h4>
               
                <p>Genere: {generos.name}</p>
                <p>Description: {serie.overview}</p>
            </div>
            
        </div>
    )
}

export {DetallesSeries}