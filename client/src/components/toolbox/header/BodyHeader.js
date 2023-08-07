import "./BodyHeader.css";
export function BodyHeader({titleArr}){
    // titleArr is an array with [headericon, header, description]
    return (<div className="bodyheader-container">
    <div className="logo-container">
        <img src={titleArr[0]} alt="logo" style={{width: "50px", height: "50px"}}/>
        <h2>{titleArr[1]}</h2>
    </div>
        <p>{titleArr[2]}</p>
    </div>)
    
}