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
        let password = "";
        
        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowerCase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()";

        // "Uppercase Letters", "Numbers", "Lowercase Letters", "Symbols"
        
        if(optionsArr.length === 1){
            
            if(optionsArr[0] === "Uppercase Letters"){
                
                for(let i = 0; i <= length -1 ; i++){
                    const randomChar = Math.floor(Math.random() * upperCase.length)
                    console.log(randomChar);
                    password += upperCase.substring(randomChar, randomChar + 1);
                    console.log(password);
                }
            }else if (optionsArr[0] === "Lowercase Letters"){

                for(let i = 0; i <= length -1 ; i++){
                    const randomChar = Math.floor(Math.random() * lowerCase.length)
                    console.log(randomChar);
                    password += lowerCase.substring(randomChar, randomChar + 1);
                    console.log(password);
                }
            }else if (optionsArr[0] === "Numbers"){

                for(let i = 0; i <= length -1 ; i++){
                    const randomChar = Math.floor(Math.random() * numbers.length)
                    console.log(randomChar);
                    password += numbers.substring(randomChar, randomChar + 1);
                    console.log(password);
                }
            }else{

                for(let i = 0; i <= length -1 ; i++){
                    const randomChar = Math.floor(Math.random() * symbols.length)
                    console.log(randomChar);
                    password += symbols.substring(randomChar, randomChar + 1);
                    console.log(password);
                }

            }

        }else if (optionsArr.length === 2){
            console.log("user chose 2", optionsArr)
        }else if (optionsArr.length === 3){
            console.log("user chose 3", optionsArr)
        }else {
            console.log(optionsArr.length)
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
            <button className="submitBtn">Generate</button>
        </form>
    )
}

export default Form;