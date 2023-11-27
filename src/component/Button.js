import React from "react"
import "../styles/button.css"

function Button({count, handleClick}) {
    
    return (
        <button className="btn" onClick={handleClick}>Diklik {count} kali</button>
    )
}

export default Button;