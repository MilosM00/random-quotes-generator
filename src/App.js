import React from "react";
import Quotes from "./Quotes";

const App = () =>{

    const [quote, setQuote] = React.useState({});

    React.useEffect(() =>{

        const generateQuote = async () =>{
    
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();
            setQuote(data);
    
        };
        generateQuote();

    }, []);

    const [number, setNumber] = React.useState(0);

    const newQuote = () =>{
        setNumber(prevNumber => (Math.trunc(Math.random() * quote.length) + 1));
    };


    return(

        <div>
            <Quotes 
                name={quote[number]?.author === null ? "Unknown" : quote[number]?.author}
                quote={quote[number]?.text}
                newQuote={newQuote}
            />
        </div>

    );
};

export default App;