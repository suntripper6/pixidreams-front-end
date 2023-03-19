import { Link } from 'react-router-dom'

import About from './About'
import Movies from './Movies'
import News from './News'
import LoginModal from './LoginModal'

export default function Nav(){

    return(
        <div id="navBar">
            <div id="centerLinks">
                <Link to="/" element={<Home/>}><button className="navBtn">HOME</button></Link>
                <Link to="/About" element={<About/>}><button className="navBtn">ABOUT</button></Link>
                <Link to="/Movies" element={<Movies/>}><button className="navBtn">MOVIES</button></Link>
                <Link to="/News" element={<News/>}><button className="navBtn">NEWS</button></Link>
            </div>
            <div id="rightLinks">
                <Link to="/LoginModal" element={<LoginModal/>}><button className="navBtn">LOGIN</button></Link>
            </div>
        </div>
    )}



//////////////////////////////////////////////////////////////////////////////////////////////////////