import React, {useState} from 'react';
import * as firebase from 'firebase';

function Budget(){

    const [payments, setPayments] = useState(null)

    console.log(payments);

    let _info = null;

    function sendBudget(e){
        e.preventDefault();
        console.log("send budget function")
    }

    return(
        <div>
            <h1>Budget Section</h1>
            <form onSubmit={sendBudget}>
                <input placeholder="some Information here" ref={value => {_info = value}}/>
                <button type="submit">Enter</button>
            </form>
        </div>
    )
}

export default Budget;