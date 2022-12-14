
import React from "react";


function Navbar() {

    // classList documentation
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#wrapper


    // toggle day class to show selected date and workout container OR use addDayClass + removeDayClass functions

    // function toggleDayClass() {
    // document.getElementById('').classList.toggle('');
    // }


    // function addDayClass() {
    //     //document.getElementById('').classList.add('');
    //     return
    // }

    // function removeDayClass() {
    //     //document.getElementById('').classList.remove('');
    //     return
    // } 

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
