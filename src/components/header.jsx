import Navbar from "./navbar";
import "./styles/header.css"

const Header = () => {
    return(
        <>
        <section className="header">
        <div>
            <img src="https://tutedude-yash.vercel.app/logo.svg" alt="tute-dude-Logo" />
        </div>
        <div className="navbar">
            <Navbar/>
        </div>
        </section>
        </>
    )
}

export default Header;