import React from "react";
import axios from 'axios'
import button_img from "../img/icon-dice.svg"

export default function Main(){

    const [adviceData, setAdviceData] = React.useState(null)
    const [count, setCount] = React.useState(0)

    

    React.useEffect(() => {
        const url = `https://api.adviceslip.com/advice`
        axios.get(url)
            .then(response => {
                setAdviceData(response.data.slip)
            })
    }, [count])


    console.log(adviceData)
    let content = null

    if(adviceData){
        return(
            content = 
                <div className="main-wrapper">
                    <div className="main">
                    <h5 className="main-title">Advice #{adviceData.id}</h5>
                    <p className="advice">
                    “{adviceData.advice}”
                    </p>
                    <div className="line"></div>
                    </div>

                    <button onClick={()=>
                    setCount(prevCount=> prevCount + 1)} className="button">
                        <img src={button_img} alt="" />
                    </button>

    
                </div>

        )
    }
    return (
        <div>
            {content}
        </div>
    )
}

