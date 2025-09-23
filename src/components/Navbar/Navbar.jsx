import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search_icon.svg';
import bellIcon from '../../assets/bell_icon.svg';
import Profile from '../../assets/profile_img.png';
import dropdown from '../../assets/caret_icon.svg';
import './Navbar.css';
import { useEffect, useRef } from 'react';
import { logout } from '../../firebase/authService';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const Navbar = () => {
    const navRef = useRef();
    const navigate = useNavigate();
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY >= 80) {
                navRef?.current?.classList?.add('nav-dark');
            } else {
                navRef?.current?.classList?.remove('nav-dark');
            }
        });
        return () => {
            window.removeEventListener('scroll', () => { });
        };
    }, [])
    return (
        <div ref={navRef} className='navbar'>
            <div className='left-nav'>
                <img src={logo} alt="netflix logo" />
                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by languages</li>
                </ul>
            </div>
            <div className='right-nav'>
                <img src={searchIcon} alt="search Icon" className='icons' />
                <img src={bellIcon} alt="bell icon" className='icons' />
                <div className="navbar__profile">
                    <img src={Profile} alt="Profile icon" />
                    <img src={dropdown} alt="Dropdown icon" />
                    <div className="dropdown"
                        role="button"
                        tabIndex={1}
                        onClick={() => {
                            logout(navigate).then(() => {
                                toast.success('Logged out successfully');
                            }).catch((error) => { toast.error(error.message);
                            })
                        }}
                        onKeyDown={(e) => { if (e.key === 'Enter') logout(navigate) }}
                    >
                        <p>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar