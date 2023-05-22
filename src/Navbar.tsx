
import React from "react";


function Navbar() {

    return (
       <nav className='nav'>
            <div className='header'>
                <a href='/'>Home</a>
                Fitness App
                <a href='./pages/AddWorkOut'>Add Work Out</a>  
            </div>
            <div className='days'>
                <button className="monday">MONDAY</button>
                <button className="tuesday">TUESDAY</button>
                <button className="wednesday">WEDNESDAY</button>
                <button className="thursday">THURSDAY</button>
                <button className="friday">FRIDAY</button>
                <button className="saturday">SATURDAY</button>
                <button className="sunday">SUNDAY</button>
            </div>
        </nav>
    );
} 

export default Navbar;
