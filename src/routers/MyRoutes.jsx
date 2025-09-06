import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {LandingPage} from '../pages/LandingPage'
import {DetallesMovies} from '../pages/DetallesMovies'
import {DetallesSeries} from '../pages/DetallesSeries'
import {MoviesPage} from '../pages/MoviesPage'
import {SeriesPage} from '../pages/SeriesPage'

const MyRoutes = ()=>{
    return(
        <Router basename='/'>
            <Routes>
                <Route exact path='/' element={<LandingPage/>}/>
                <Route exact path='/movies' element={<MoviesPage/>}/>
                <Route exact path='/tv' element={<SeriesPage/>}/>
                <Route exact path='/movies/:movieId' element={<DetallesMovies/>}></Route>
                <Route exact path='/tv/:tvId' element={<DetallesSeries/>}></Route>
                <Route path='*' element={<h1>404 Not Found</h1>}/>
            </Routes>
        </Router>
    )
}

export default MyRoutes