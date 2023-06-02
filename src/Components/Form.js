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

        // "Uppercase Letters", "Lowercase Letters",  "Numbers", "Symbols"

        // cases for 3 user options
        const caseOne = [ "Lowercase Letters",  "Numbers", "Uppercase Letters" ];
        const caseTwo = [ "Lowercase Letters",  "Symbols", "Uppercase Letters" ];
        const caseThree = [ "Lowercase Letters",  "Numbers", "Symbols" ];
        const caseFour = [ "Numbers", "Symbols", "Uppercase Letters" ];
        
        if(optionsArr.length >= 3){

            const sortedOptionsArr = optionsArr.slice().sort();

            if(optionsArr.length === 3){
                if(JSON.stringify(sortedOptionsArr) === JSON.stringify(caseOne)){
                    console.log("case one");
                }else if(JSON.stringify(sortedOptionsArr) === JSON.stringify(caseTwo)){
                    console.log("case two");
                }else if(JSON.stringify(sortedOptionsArr) === JSON.stringify(caseThree)){
                    console.log("case three")
                }else if(JSON.stringify(sortedOptionsArr) === JSON.stringify(caseFour)){
                    console.log("case four")
                }

            }else{
                console.log("4 useroptions block", optionsArr);
            }

        }else{
            alert("Please choose 3 options or more");
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