import "../styles/button.css"
function Button() {
    // function handleClick() {
    //     alert("halooo")
    // }

    const handleClick = () => {
        alert("haiii")
    }
    
    return (
        <button className="btn" onClick={handleClick}>Saya adalah tombol</button>
    )
}

export default Button;