
const Form = () =>{

    return(
        <form className="wrapper">
            <div className="sliderContainer">
                <h2>character length</h2>
                <p>10</p>
            </div>
            <label className="sr-only">slider</label>
            <input className="slider" type="range" min="1" max="20" />
            <div className="optionsContainer">
                <div>
                    <label  className="optionsItem">Include Uppercase Letters
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label  className="optionsItem">Include Lowercase Letters
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label  className="optionsItem">Include Numbers
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
                <div>
                    <label  className="optionsItem">Include Symbols
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <div>
                Evaluation component
            </div>
            <button>Generate</button>
        </form>
    )
}

export default Form;