import './Settings.css';

function Settings() {
    function hide(){
        document.getElementById("home").style.visibility="hidden";
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("profilebox").style.visibility="hidden";

        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
    }
    return (
        <div>
            <div id="settingsblock">
                <div id='midcontent'>
                    <div id="settingscontent">
                        <center>
                        <h2>Profile </h2>
                        <h2>Notifications </h2>
                        <h2>UPI address</h2>
                        <h2>Security</h2>
                        <h2>About us</h2>
                        <h2 onClick={hide}>Log Out</h2>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings;
