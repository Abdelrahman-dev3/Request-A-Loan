import "./css.css"
export default function CurrectAge({ IsVisibleError, setIsVisibleError ,title}) {
  if (IsVisibleError === true) {
    function toFalse(){
        setIsVisibleError(false)
    }
        return (        
            <div onClick={toFalse}  className={"mainbg"}>
                
                    <h1>{title}</h1>
                
            </div>
        )
  }else{
    return <></>
  }
}

