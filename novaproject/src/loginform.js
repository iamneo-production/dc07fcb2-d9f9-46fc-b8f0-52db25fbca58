
import './loginform.css';
import { initializeApp } from "firebase/app";

import { getDatabase, ref , set, child , update, remove, onValue, get} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCpWSszxhDlQasxK1rwdgsHHc31Qka2hdk",
    authDomain: "neobank-d79a3.firebaseapp.com",
    databaseURL: "https://neobank-d79a3-default-rtdb.firebaseio.com",
    projectId: "neobank-d79a3",
    storageBucket: "neobank-d79a3.appspot.com",
    messagingSenderId: "641306442398",
    appId: "1:641306442398:web:faaef3e7040c98f369198f",
    measurementId: "G-6WFR69QQDF"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

const sleep = ms => new Promise(r => setTimeout(r, ms));

function Loginform() {
    function slide(){
        document.getElementById("cover").style.left="960px";
        document.getElementById("logform").style.transform = 'scale(0.8)';
        document.getElementById("regform").style.transform = 'scale(1)';
    }

    async function funlog(){
        function passinfo(sid){
            get(child(ref(db), "neobank/" + sid)).then((snapshot) => {
                if (snapshot.exists()) {
                var name = snapshot.child('name').val();
                var mobile = snapshot.child('number').val();
                var mail = snapshot.child('mail').val();
                var age = snapshot.child('age').val();
                document.getElementById("nav-items").innerHTML = "Hello, "+name;
                document.getElementById("pname").innerHTML = "Name: "+name;
                document.getElementById("pid").innerHTML = "User ID: "+mobile+"@dxp";
                }
            });
        }

        var sid = document.getElementById("unumber").value;
        var spass = document.getElementById("upass").value;
        if(sid ==="" || spass === "")
            {
                document.getElementById("notification").style.visibility = "visible";
                document.getElementById("notification").innerHTML = "Please Fill All Details!";
                await sleep(2000);
                document.getElementById("notification").style.visibility = "hidden";
                return;
            }
            
        get(child(ref(db), "neobank/" + sid)).then(async (snapshot) => {

            if (snapshot.exists()) {
                var pass = snapshot.child('password').val();
                var CryptoJS = require("crypto-js");
                pass = CryptoJS.AES.decrypt(pass, "anits").toString(CryptoJS.enc.Utf8);

                if (pass === spass) {

                    document.getElementById("home").style.visibility = "visible";
                    document.getElementById("homeblock").style.visibility="visible";
                    document.getElementById("imghome").style.backgroundColor = "yellow";
                    document.getElementById("unumber").value="";
                    document.getElementById("upass").value="";
                    passinfo(sid);
                    

                }
                else {
                    document.getElementById("notification").style.visibility = "visible";
                    document.getElementById("notification").innerHTML = "Wrong password!";
                    await sleep(3000);
                    document.getElementById("notification").style.visibility = "hidden";



                }

            }
            else{
                document.getElementById("notification").style.visibility = "visible";
                document.getElementById("notification").innerHTML = "Invalid user!";
                await sleep(3000);
                document.getElementById("notification").style.visibility = "hidden";
            }
        });
        
    }
    
    return (
        <div id="loginbox">
            <div id='logform'>
                <div id="loginheader">
                    LOGIN
                </div>
                <input type="text" id="unumber" placeholder='Enter Mobile Number'/> <br/><br/>
                <input type="password" id="upass" placeholder='Enter Password'/><br/><br/>
                <button id="loginbutton" type="submit" onClick={funlog}>Login</button> <br/> <br/>
                <b id="slidelogin" onClick={slide}>Don't have an account</b>
            </div>
        </div>
    )
}

export default Loginform;
