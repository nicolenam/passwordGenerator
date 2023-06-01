const OptionsList = () =>{
    return(
        <>
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
        </>
    )
}

export default OptionsList;