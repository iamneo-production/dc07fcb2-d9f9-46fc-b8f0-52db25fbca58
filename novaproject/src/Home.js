import './Home.css';

function Home() {
    

    function funhome(){
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("homeblock").style.visibility="visible";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";

        document.getElementById("imghome").style.backgroundColor = "yellow";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
    }
    function funtransactions(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="visible";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";
        
        document.getElementById("imgtrans").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
    }

    function funcards(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="visible";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";

        document.getElementById("imgcards").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
    }
    function funloan(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="visible";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";

        document.getElementById("imgloan").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";

    }
    function funcrypto(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="visible";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";

        document.getElementById("imgcrypto").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";

    }
    function funassistant(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="visible";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="visible";

        document.getElementById("imgassistant").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";

    }
    function funsettings(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="visible";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";

        document.getElementById("imgsettings").style.backgroundColor = "yellow";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        
    }

    return (
        <div>
            <div id="homeblock">
                <div id='midcontent'>
                    <div id="card">
                        <button id="sendmoney">
                            zXpay Wallet
                        </button>
                        <button id="sendmoney">
                            Send money
                        </button>
                        <button id="sendmoney">
                            Scan QR code
                        </button>
                        <button id="sendmoney">
                            Self Transfer
                        </button>
                        <button id="sendmoney">
                            Bank Transfer
                        </button>
                        <button id="sendmoney">
                            Add Bank Account
                        </button>
                        <button id="sendmoney">
                            Check Balance
                        </button>
                    </div>
                    <div id="card">
                        <button id="sendmoney">
                            Mobile Recharge
                        </button>
                        <button id="sendmoney">
                            DTH Recharge
                        </button>
                        <button id="sendmoney">
                            Fibernet Recharge
                        </button>
                        <button id="sendmoney">
                            Google Play
                        </button>
                        <button id="sendmoney">
                            Bill payment
                        </button>
                        <button id="sendmoney">
                            Cylinder booking
                        </button>
                        <button id="sendmoney">
                            Fastag Recharge
                        </button>
                    </div>
                    <div id="card">
                        <button id="sendmoney">
                            Movie
                        </button>
                        <button id="sendmoney">
                            Train
                        </button>
                        <button id="sendmoney">
                            Bus
                        </button>
                        <button id="sendmoney">
                            Plane
                        </button>
                        <button id="sendmoney">
                            Cruise
                        </button>
                        <button id="sendmoney">
                            Sports
                        </button>
                        <button id="sendmoney">
                            Events
                        </button>
                    </div>
                    <div id="card">
                    </div>
                    <div id="card">
                    </div>
                    <div id="botspace"></div>
                </div>
            </div>


            
            <div id="sidebar"> 
                <ul id= "side-items">
                    <li onClick={funhome}><div id="imghome"></div> <b> Home </b></li>
                    <li onClick={funtransactions}><div id="imgtrans"></div> <b> Transactions </b></li>
                    <li onClick={funcards} ><div id="imgcards"></div> <b> Cards </b></li>
                    <li onClick={funloan}><div id="imgloan"></div> <b> Loan </b></li>
                    <li onClick={funcrypto}><div id="imgcrypto"></div> <b> Crypto </b></li>
                    <li onClick={funassistant}><div id="imgassistant"></div> <b> Assistant </b></li>
                    <li id="sidebarspace"></li>
                    <li onClick={funsettings} id="settings"><div id="imgsettings"></div> <b> Settings </b></li>
                </ul>
            </div>


            
            <div id="nav"></div>

            <div id="header">
                <b>  zXPay </b>
                <div id="nav-items">
                    Hello, John Cena
                </div>
                <div id="profile"></div>
                
                <div id="profilebox">
                    <div id="pic"></div>
                    <h5 id="name"> Name: John Cena  </h5> 
                    <h5 id="uid"> Flash ID: john123@fyl </h5>
                    <h5 id="kyc"> KYC Verified </h5>
                </div>
            </div>
        </div>
    )
}

export default Home;
