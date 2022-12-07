import React from "react";

function Navbar(){
    return(
        <div className='nav'>
            <div className='header'>
                <button className='home-btn'>Home</button>
                Fitness App
                <button className='add-btn'>Add Work Out</button>
            </div>
            <div className='days'>
                <button>MONDAY</button>
                <button>TUESDAY</button>
                <button>WEDNESDAY</button>
                <button>THURSDAY</button>
                <button>FRIDAY</button>
                <button>SATDAY</button>
                <button>SUNDAY</button>
            </div>
      </div>    
    );

}

export default Navbar;