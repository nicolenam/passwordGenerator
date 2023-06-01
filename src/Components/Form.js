
const Form = () =>{

    return(
        <form className="wrapper">
            <div className="sliderContainer">
                <h2>character length</h2>
                <p>10</p>
            </div>
            <input className="slider" type="range" min="1" max="20" />
            <div>
                checkboxes for options
            </div>
            <div>
                Evaluation component
            </div>
            <button>Generate</button>
        </form>
    )
}

export default Form;