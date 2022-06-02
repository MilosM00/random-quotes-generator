import React from "react";

const Quotes = (props) =>{
    return(

        <div className="quotes-overlay">

            <button onClick={props.newQuote} className="button-new-quote">New Quote</button>
            <p className="author-name">{props.name}</p>
            <h4 className="author-quote">" {props.quote} "</h4>

        </div>

    );
};

export default Quotes;