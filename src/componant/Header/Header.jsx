import { Link, NavLink } from "react-router-dom";
import '../style/Style.css'

const Header = () => {



    
    return (
        <nav className="gap-16 text-center text-3xl font-bold flex justify-center items-center ">
          
            <NavLink   to='/'>Home</NavLink>
            <NavLink  to='/about'>About</NavLink>
            <NavLink  to='/posts'>Posts</NavLink>
            <NavLink  to='/contact'>Contact</NavLink>
            <NavLink  to='/user'>User</NavLink>
        </nav>
    );
};

export default Header;