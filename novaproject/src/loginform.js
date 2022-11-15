
import './loginform.css';

function Loginform() {
    function slide(){
        document.getElementById("cover").style.left="960px";
        document.getElementById("logform").style.transform = 'scale(0.8)';
        document.getElementById("regform").style.transform = 'scale(1)';
    }
    function fun(){
        document.getElementById("home").style.visibility = "visible";
        document.getElementById("homeblock").style.visibility="visible";
        document.getElementById("imghome").style.backgroundColor = "yellow";
    }
    return (
        <div id="loginbox">
            <div id='logform'>
                <div id="loginheader">
                    LOGIN
                </div>
                <input type="text" placeholder='Enter Mobile Number'/> <br/><br/>
                <input type="text" placeholder='Enter Password'/> <br/><br/>
                <button id="loginbutton" type="submit" onClick={fun}>Login</button> <br/> <br/>
                <b id="slidelogin" onClick={slide}>Don't have an account</b>
            </div>
        </div>
    )
}

export default Loginform;
