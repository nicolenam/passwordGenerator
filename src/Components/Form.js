import { useState } from 'react';
import OptionsList from "./OptionsList";
import Evaluation from "./Evaluation";

const Form = () =>{
    
    const [length, setLength] = useState(10);

    const handleChange = (e) =>{
        setLength(e.target.value)
    }

    return(
        <form className="wrapper">
            <div className="sliderContainer">
                <h2>character length</h2>
                <p>{length}</p>
            </div>
            <label className="sr-only">slider</label>
            <input className="slider" type="range" value={length} min="1" max="20" onChange={handleChange}/>
            <div className="optionsContainer">
                <OptionsList />
            </div>
            <div>
                <Evaluation />
            </div>
            <button>Generate</button>
        </form>
    )
}

export default Form;