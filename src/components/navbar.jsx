import "./styles/navbar.css"
import { HiUserCircle } from "react-icons/hi";
import { FiChevronDown} from "react-icons/fi";
const Navbar = () => {
    return(
        <>
        <section id="navbar-body">
        <div>
           <button className="nav-btns font-m-16">My Assignment</button> 
        </div>
        <div>
           <button className="nav-btns font-m-16">Chat with Mentor</button> 
        </div>
        <div className="nav-profile-block">
           <HiUserCircle className="nav-profile-icon"/>
           <button className="font-m" id="profile-btn">ProfileName </button> 
           <FiChevronDown className="nav-profile-down-arrow"/>
        </div>
        </section>
        </>
    )
}

export default Navbar;