import './Cards.css';

function Cards() {
    return (
        <div>
            <div id="cardsblock">
                <div id='midcontent'>
                    <div id="topcards">
                        <h1> Card 1 </h1>
                        <div id="sampcard1"></div>
                        <h1 id="c2"> Card 2 </h1>
                        <div id="sampcard2"></div>
                    </div>
                    <div id="bottomcards">
                        <div id="addcard">
                            <div id="imgadd"></div>
                            <h3> Add New Card </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default Cards;
