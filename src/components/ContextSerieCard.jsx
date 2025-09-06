import {useEffect, useState} from 'react'
import {Get} from '../data/httpClient'
import { SerieCard } from './SerieCard'
import '../styles/contextcard.css'


const ContextSerieCard=()=>{

    const [series, setSeries] = useState([])
    useEffect(()=>{
        Get('/discover/tv')
        .then((data)=> {
            setSeries(data.results)
            console.log('desde la api Series',data)
        })
    },[])

    return(
        <div className=''>
            <ul className='container'>
                {series.map((serie)=>(
                    <SerieCard serie={serie} key={serie.id}/>
                ))}
            </ul>
        </div>
    )
}

export {ContextSerieCard}