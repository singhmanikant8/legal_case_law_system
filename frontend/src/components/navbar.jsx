import {Link} from 'react-router-dom';
import "./navbar.css";

function Navbar(){

    return (
        <nav className='container'>
            <div className='div1'>LegalAI</div>
            <div className='div2'>
                <a href="#" className='home'>Home</a>
                <a href="#" className='search'>Search Laws</a>
                <a href="#" className='const'>Constitution</a>
                <a href="#" className='about'>About</a>
            </div>
        </nav>
    );
}

export default Navbar;
