import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {LandingPage} from '../pages/LandingPage'
import { Detalles } from '../pages/Detalles'

const MyRoutes = ()=>{
    return(
        <Router basename='/'>
            <Routes>
                <Route exact path='/' element={<LandingPage/>}/>
                <Route exact path='/movies/:movieId' element={<Detalles/>}></Route>
            </Routes>
        </Router>
    )
}

export default MyRoutes