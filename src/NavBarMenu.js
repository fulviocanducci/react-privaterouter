import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function NavBarMenu ({router}) {
    const [active, setActive] = useState(false);
    const togglerMenu = () => setActive(!active);   
    return (
        <>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand" onClick={togglerMenu}>
                    <a className="navbar-item" href="https://bulma.io">
                        <img src="https://bulma.io/images/bulma-logo.png" alt="" width="112" height="28" border="0" />
                    </a>         
                    { /* eslint-disable-next-line */ }
                    <a role="button" className={active?'navbar-burger burger is-active':'navbar-burger burger'} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className={active?'navbar-menu is-active':'navbar-menu'}>
                    <div className="navbar-start">
                    {router.map((item, key) => (
                        <Link onClick={togglerMenu} className="navbar-item" key={key} to={item.linkTo}>{item.name}</Link>
                    ))}                        
                    </div>
                </div>
            </nav>
        </>
    );
}