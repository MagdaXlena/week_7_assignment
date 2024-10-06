import { Link } from "react-router-dom"
import './NavBar.css'

export default function NavBar () {
    return (
        <div className="header">   
            <div className="logoContainer">
                <div className='rocket'>
                    <img src='src/assets/rocket.png' alt='rocket' />
                </div>
            <div>
                <h1 className="logo">To Da Moon</h1>   
            </div>
            </div>
            <nav className="navbar">
                <Link className="link" to={'./'}>Home</Link>
                <Link className="link" to={'/MyBag'}>My Bag</Link> 
            </nav>
        </div>
    )
}