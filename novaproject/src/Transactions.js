import './Transactions.css';

function Transactions() {
    return (
        <div>
            <div id="transblock">
                <div id='midcontent'>
                    <div id="filter">
                        <h2> Category </h2>: 
                        <select>
                            <option value="">All</option>
                            <option value="">Transfer</option>
                            <option value="">Movies</option>
                            <option value="">Shopping</option>
                            <option value="">Recharge</option>
                            <option value="">Crypto</option>
                            <option value="">Rent</option>
                            
                        </select>
                    </div>
                    <div id="results">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transactions;
