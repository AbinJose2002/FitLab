import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='navbar'>
            <div className="nav-logo">FitLab</div>
            <ul className={`${isOpen ? 'open' : ''} nav-list`}>
                <li>
                    <a href="#" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href="" className="nav-link">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="" className="nav-link">
                        Labs
                    </a>
                </li>
                <li>
                    <a href="" className="nav-link">
                        Curriculum
                    </a>
                </li>
                <li>
                    <a href="" className="nav-link nav-btn">
                        Curriculum
                    </a>
                </li>
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="white" className="bi bi-list" viewBox="0 0 16 16" onClick={toggle}>
                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
            </svg>
        </nav>
    );
};

export default Navbar;