import React from 'react';
export const Header = () => {
    const handleMouseEnter = e => {
        e.target.style.color = "grey";
        console.log("Mouse")
    }
    const handleMouseLeave = e => {
        e.target.style.color = "black";
    }

 return(
    <div className = "Header">
  <button onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
      className="button">Hover

      
  </button>
    </div>

    );
}