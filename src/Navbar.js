import React, {useState, useEffect} from 'react';
import './navbar.css';

const Navbar = () => {
    const [show, handleShow] = useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY > 100) {
                handleShow(true)
            }else{
                handleShow(false)
            }
        })
        return ()=> {
            window.removeEventListener("scroll");
        }

    },[])


    return (
       
            <div className={`nav ${show && "nav__black"}`}>
               
                    <a href="#">WEBFLIX</a>
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="logo" className="navbar__avatar"/>

        </div>
    )
}

export default Navbar
