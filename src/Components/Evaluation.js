const Evaluation = ({strength}) =>{

    
    return(
        <section className="evaluation">
            <h2>Strength</h2>
            <div className="resultContainer">
                <h3>{strength}</h3>
                <div className="barContainer">
                    {
                        strength === "Strong" ?
                    <>
                        <div className="bar fill"></div>
                        <div className="bar fill"></div>
                        <div className="bar fill"></div>
                        <div className="bar fill"></div>
                    </>
                    :
                    null
                    }
                    {
                        strength === "Medium" ?
                    <>
                        <div className="bar fill"></div>
                        <div className="bar fill"></div>
                        <div className="bar fill"></div>
                        <div className="bar"></div>
                    </>
                    :
                    null
                    }
                    {
                        strength === "Weak" ?
                    <>
                        <div className="bar fill"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </>
                    :
                    null
                    }
                </div>
            </div>    
        </section>
    )
}

export default Evaluation;