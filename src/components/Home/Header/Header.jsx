
import './Header.css';
import { Link,NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <div>
          
            <nav>
                <span> My Website</span>
                <Link to="/">Home</Link>
                <NavLink to ="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">ContactUs</NavLink>
            </nav>
        </div>
    );
};

export default Header;