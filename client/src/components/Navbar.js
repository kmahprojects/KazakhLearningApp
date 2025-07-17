import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const root = document.querySelector(':root');
    const storedMode = localStorage.getItem("mode");
    const initialMode = storedMode === null ? true : JSON.parse(storedMode);
    const [darkMode, setDarkMode] = useState(initialMode);

    useEffect(() => {
        localStorage.setItem("mode", darkMode); 
        setColors(darkMode);
      }, [darkMode]); 

    function changeTheme(){
        setDarkMode(!darkMode);
        localStorage.setItem("mode", darkMode);
        
    }

    function setColors(state){
        if (state){
            root.style.setProperty("--theme-background", "28 27 30");
            root.style.setProperty("--theme-medium", "46 44 53");
            root.style.setProperty("--body-color", "48 48 58");
            root.style.setProperty("--font-color", "255 255 255");
        } else {
            root.style.setProperty("--theme-background", "200 200 200");
            root.style.setProperty("--theme-medium", "255 255 255");
            root.style.setProperty("--body-color", "150 150 150");
            root.style.setProperty("--font-color", "0 0 0");
        }
    }
    
    return (
        <>
        <div id = "topBar">
        <Link to="/" id = "HomeLink">Home</Link>
        <div id = "switch">
        <input defaultChecked={darkMode ? 'checked' : ''} type="checkBox" name="themeButton" id="themeButton" onChange={changeTheme}/>
          <label htmlFor="themeButton">Dark Mode</label>
          </div>
        </div>
        <nav id="navbar">
            <Link to="/Alphabet">
                <div className="label">
                    <span className="name">Alphabet</span>
                    <span className="desc">Kazakh Cyrillic</span>
                </div>
            </Link>
            <Link to="/Phrases">
                <div className="label">
                    <span className="name">Phrases</span>
                    <span className="desc">Useful Phrases</span>
                </div>
            </Link>
            <Link to="/Flashcards">
                <div className="label">
                    <span className="name">Flashcards</span>
                    <span className="desc">Test Yourself</span>
                </div>
            </Link>
            <Link to="/Documentation">
                <div className="label">
                    <span className="name">Documentation</span>
                    <span className="desc">About</span>
                </div>
            </Link>
        </nav>
        
        </>
    )
}

export default Navbar