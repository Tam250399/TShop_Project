import React, { useEffect, useState } from 'react'
import darkmode from '../../assets/DarkMode/dark-mode-button.png'
import lightmode from '../../assets/DarkMode/light-mode-button.png'

const DarkMode = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "ligth")

    const elements = document.documentElement


    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            elements.classList.add("dark")
            elements.classList.add("dark")
        } else {
            elements.classList.remove("ligth")
            elements.classList.remove("dark")
        }
    })
    return (
        <div className='relative'>
            <img onClick={() => setTheme(theme === "dark" ? "ligth" : "dark")} src={lightmode} className={`w-12 cursor-pointer absolute right-0 z-10 ${theme === "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`}></img>

            <img src={darkmode} className={`w-12 cursor-pointer `}></img>
        </div>
    )
}

export default DarkMode