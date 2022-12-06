import './Home.css';




function Home() {

    function openprof(){
        document.getElementById("profileblock").style.visibility = "visible";
    }
    

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
        document.getElementById("reward").style.visibility="hidden";

        document.getElementById("imghome").style.backgroundColor = "yellow";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";
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
        document.getElementById("reward").style.visibility="hidden";
        
        document.getElementById("imgtrans").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";
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
        document.getElementById("reward").style.visibility="hidden";

        document.getElementById("imgcards").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";
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
        document.getElementById("reward").style.visibility="hidden";

        document.getElementById("imgloan").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";

    }
    function funrewards(){
        document.getElementById("homeblock").style.visibility="hidden";
        document.getElementById("transaction").style.visibility="hidden";
        document.getElementById("bankcard").style.visibility="hidden";
        document.getElementById("loan").style.visibility="hidden";
        document.getElementById("assistant").style.visibility="hidden";
        document.getElementById("crypto").style.visibility="hidden";
        document.getElementById("setting").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";
        document.getElementById("chatoptions").style.visibility="hidden";
        document.getElementById("reward").style.visibility="visible";

        document.getElementById("imgreward").style.backgroundColor = "yellow";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
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
        document.getElementById("reward").style.visibility="hidden";

        document.getElementById("imgcrypto").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";

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
        document.getElementById("reward").style.visibility="hidden";
        document.getElementById("botinterface").style.visibility="hidden";

        document.getElementById("imgassistant").style.backgroundColor = "yellow";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgsettings").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";

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
        document.getElementById("reward").style.visibility="hidden";

        document.getElementById("imgsettings").style.backgroundColor = "yellow";
        document.getElementById("imgassistant").style.backgroundColor = "white";
        document.getElementById("imghome").style.backgroundColor = "white";
        document.getElementById("imgcards").style.backgroundColor = "white";
        document.getElementById("imgtrans").style.backgroundColor = "white";
        document.getElementById("imgloan").style.backgroundColor = "white";
        document.getElementById("imgcrypto").style.backgroundColor = "white";
        document.getElementById("imgreward").style.backgroundColor = "white";
        
        
    }


    return (
        <div>
            <div id="homeblock">
                <div id='midcontent'>
                    <div id="card" className='card1'>
                        <div id="cardtitle">
                            Money Transfer 
                        </div>
                        <button id="wallet">
                        <b> zXpay Wallet</b>
                        </button>
                        <button id="sendmoney">
                        <b> Send Money</b>
                        </button>
                        <button id="qrcode">
                        <b> Scan QR code</b>
                        </button>
                        <button id="selftransfer">
                        <b> Self Transfer</b>
                        </button>
                        <button id="banktransfer"> 
                        <b> Bank Transfer</b>
                        </button> 
                        <button id="addaccount">
                        <b>  Add Account</b>
                        </button>
                        <button id="checkbalance">
                        <b>  Check Balance</b>
                        </button>
                    </div>
                    <div id="card" className='card2'>
                        <div id="cardtitle" >
                         Recharge and Bill Payment
                        </div>
                        <button id="mobilerec">
                        <b> Mobile <br/>Recharge</b>
                        </button>
                        <button id="dthrec">
                        <b>  DTH <br/>  Recharge</b>
                        </button>
                        <button id="fibernetrec">
                        <b>  Fibernet <br/>Recharge</b>
                        </button>
                        <button id="googlerec">
                        <b>  Google Play<br/> Recharge</b>
                        </button>
                        <button id="billpay">
                        <b>  Bill  <br/>payment</b>
                        </button>
                        <button id="gasbook">
                        <b>  Gas <br/> booking</b>
                        </button>
                        <button id="fasttagrec">
                        <b>  Fastag <br/>Recharge</b>
                        </button>
                    </div>
                    <div id="card" className='card3'>
                        <div id="cardtitle">
                          Ticket Booking
                        </div>
                        <button id="movie">
                        <b>  Movie</b>
                        </button>
                        <button id="train">
                        <b>   Train</b>
                        </button>
                        <button id="bus">
                        <b>   Bus</b>
                        </button>
                        <button id="plane">
                        <b>  Plane</b>
                        </button>
                        <button id="cruise">
                        <b>  Cruise</b>
                        </button>
                        <button id="sports">
                        <b>  Sports</b>
                        </button>
                        <button id="events">
                        <b>   Events</b>
                        </button>
                    </div>
                    <div id="botspace"></div>
                </div>
            </div>


            
            <div id="sidebar"> 
                <ul id= "side-items">
                    <li onClick={funhome}><div id="imghome"></div> <b> Home </b></li>
                    <li onClick={funtransactions}><div id="imgtrans"></div> <b> Transactions </b></li>
                    <li onClick={funcards} ><div id="imgcards"></div> <b> Cards </b></li>
                    <li onClick={funrewards} ><div id="imgreward"></div> <b> Rewards </b></li>
                    <li onClick={funloan}><div id="imgloan"></div> <b> Loan </b></li>
                    <li onClick={funcrypto}><div id="imgcrypto"></div> <b> Crypto </b></li>
                    <li onClick={funassistant}><div id="imgassistant"></div> <b> Assistant </b></li>
                    <li id="sidebarspace"></li>
                    <li onClick={funsettings} id="settings"><div id="imgsettings"></div> <b> Settings </b></li>
                </ul>
            </div>


            
            <div id="nav"></div>

            <div id="header">
                <b>  DXPay </b>
                <div id="nav-items">
                    Hello, 
                </div>
                <div id="profile"></div>
                
                <div id="profilebox">
                    <div id="pic"></div>
                    <h5 id="pname"> Name:  </h5> 
                    <h5 id="pid"> UPI ID: @fyl </h5>
                    <h5 id="kyc"> KYC Not Verified </h5>
                    <button id="btprof" onClick={openprof}>Profile</button>
                </div>
            </div>
        </div>
    )
}

export default Home;
