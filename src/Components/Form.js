import { useState } from 'react';
import OptionsList from "./OptionsList";
import Evaluation from "./Evaluation";

const Form = ({setPassword}) =>{

    const [ length, setLength ] = useState(10);
    const [ optionsArr, setOptionsArr ] = useState([]);

    const handleChange = (e) =>{
        setLength(e.target.value)
    }

    const generatePassword = (e) =>{
        e.preventDefault();
        
        const characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let password = "";

        for (let i = 0 ; i <= length-1 ; i++) {

            const randomCharacters = Math.floor(Math.random() * characters.length);

            password += characters.substring(randomCharacters, randomCharacters +1);

            console.log(password)

        }


        
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
        <form className="wrapper" onSubmit={generatePassword}>
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