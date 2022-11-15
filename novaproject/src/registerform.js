import React from 'react';
import './registerform.css';

function Registerform() {
    function slide(){
        document.getElementById("cover").style.left="0px";
        document.getElementById("logform").style.transform = 'scale(1)';
        document.getElementById("regform").style.transform = 'scale(0.8)';
    }

    return (
        <div id="regbox">
            <div id='regform'>
                <div id="regheader">
                    REGISTER
                </div>
                <input type="text" placeholder='Enter Name'/> <br/><br/>
                <input type="text" placeholder='Enter Age'/> <br/><br/>
                <input type="text" placeholder='Enter Mobile Number'/> <br/><br/>
                <input type="text" placeholder='Enter Mail Id'/> <br/><br/>
                <input type="text" placeholder='Enter Password'/> <br/><br/>
                <button id="regbutton" type="submit" onClick={slide}>Register</button> <br/> <br/>
                <b id="slidereg" onClick={slide}>Have an account</b>
            </div>
        </div>
    )
}

export default Registerform;
