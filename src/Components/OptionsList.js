const OptionsList = ({userInput}) =>{

    const userOptions = ["Uppercase Letters", "Lowercase Letters", "Numbers", "Symbols"]


    return(
        <>
           {
            userOptions.map(item=>{
                return(
                    <label className="optionsItem" key={item}>
                        Include {item}
                        <input type="checkbox" onChange={userInput} value={item} />
                        <span className="checkmark"></span>
                    </label>
                )
               
            })
           }
        </>
    )
}

export default OptionsList;


