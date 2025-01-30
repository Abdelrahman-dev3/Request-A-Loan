import "./Forms.css"
import CurrectAge from "./CurrectAge"
import CurrectData from "./CurrectData";
import { useState } from "react";
export default function Forms() {
    let [inputsFeild,setInputsFeild] = useState({name:"",phoneNumber:"",age:"",AYemployye:false,rangeSalary:""})
    let [isVisible , setIsVisible ] = useState(false)
    let [IsVisibleError , setIsVisibleError ] = useState(false)
    let [ErrorMsg , setErrorMsg ] = useState("")

    function getValueName(n) {
        setInputsFeild({...inputsFeild , name:n.target.value});
        
    }
    function getValuePhone(p) {
        setInputsFeild({...inputsFeild , phoneNumber:p.target.value});
        
    }
    function getValueAge(a) {
        setInputsFeild({...inputsFeild , age:a.target.value});
        
    }
    function getValueemployye(q) {
            setInputsFeild({...inputsFeild , AYemployye:q.target.checked});
        }
    
        function getValuerangeSalary(c) {
            setInputsFeild({...inputsFeild , rangeSalary:c.target.value});
            
        }
        function submition(p) {
            p.preventDefault();
            if (inputsFeild.phoneNumber.length > 12 || inputsFeild.phoneNumber.length < 10 ) {
                setErrorMsg("PhoneNumber incorrect")
                setIsVisibleError(true);
            }else if (inputsFeild.age > 100 || inputsFeild.age < 18) {
                setErrorMsg("Age is not allowed")
                setIsVisibleError(true);
            }else{
                setIsVisible(true);
        }
        }
    
    return(
<>
<div className="forms">
            <div style={{width:"94%" , margin:"auto" }}>
            <h1>Requesting a Loan</h1>
            <hr />
            
<div>
    <form onSubmit={submition}>

        <label>Name</label>
        <input onChange={getValueName}  style={{width:"100%" , height: "28px"}} type="text" />

        <label>Phone Number</label>
        <input onChange={getValuePhone} style={{width:"100%" , height: "28px"}} type="number" />

        <label>Age</label>
        <input onChange={getValueAge} style={{width:"100%" , height: "28px"}} type="number" />

        <label>Are You Employye</label>
        <input checked={inputsFeild.AYemployye} onChange={getValueemployye} style={{width:"100%" , height: "28px"}} type="checkbox" />

        <select onChange={getValuerangeSalary} style={{width:"100%" , height: "28px"}}>
            <option>less than 500$</option>
            <option>between 200$ and 2000$</option>
            <option>above 2000%</option>
        </select>

        <button className={inputsFeild.name && inputsFeild.age && inputsFeild.phoneNumber && inputsFeild.rangeSalary !== null ? "btn" : "btn noAllow" }>Submit</button>

    </form>
    
</div>

            </div>
        </div>
        {isVisible && <CurrectData isVisible={isVisible} setIsVisible={setIsVisible} />}
        {IsVisibleError && <CurrectAge title={ErrorMsg} IsVisibleError={IsVisibleError} setIsVisibleError={setIsVisibleError} />}

</>
    )
}///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////         ////////////////////////////////////////////////////         /////////////////////////////////////
/////////////////         ////////////////////////////////////////////////////         /////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////    ///////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////    ///////////////////////////////////////////////////////////////////