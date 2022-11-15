import './Assistant.css';

function Assistant() {
    return (
        <div>
            <div id="assistantblock">
                <div id='midcontent'>
                    <div id="chatoptions">
                        <button id="resumechat">
                            Resume Previous Query
                        </button> 
                        <button id="createtasks">
                            Create Task
                        </button><br/>
                        <button id="newquery">
                            Start New Query
                        </button> 
                        
                        <button id="managetasks">
                            Manage Tasks
                        </button>

                        <p>*Your Banking Assisant is here! <br/>
                            It assists you in completing/scheduling tasks and answering questions.<br/><br/>
                            Eg: <br/>
                               - Can I purchase a burger?  <br/>
                               - How much additional money will I need to purchase a tesla car?  <br/>
                               - Notify me when the price of bitcoin reaches x <br/>
                               - Book Bahubali movie tickets at my local Inox
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assistant;
