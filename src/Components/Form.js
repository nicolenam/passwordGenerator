import { useState } from 'react';
import OptionsList from "./OptionsList";
import Evaluation from "./Evaluation";

const Form = () =>{
    
    const [length, setLength] = useState(10);
    const [optionsArr, setOptionsArr] = useState([])

    const handleChange = (e) =>{
        setLength(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("final length:", length);
        console.log("user chosen options:", optionsArr);
    }

    const userInput = (e) =>{
        const { value, checked } = e.target;
        
        if(checked) {
            setOptionsArr(prev => [...prev,value]);
        }
        else{
            setOptionsArr(prev => prev.filter(item => item !== value))
        }
    } 

    return(
        <form className="wrapper" onSubmit={handleSubmit}>
            <div className="sliderContainer">
                <h2>character length</h2>
                <p>{length}</p>
            </div>
            <label className="sr-only">slider</label>
            <input className="slider" type="range" value={length} min="1" max="20" onChange={handleChange}/>
            <div className="optionsContainer">
                <OptionsList userInput={userInput}/>
            </div>
            <div>
                <Evaluation />
            </div>
            <button>Generate</button>
        </form>
    )
}

export default Form;