import "./css.css"
export default function CurrectData({ isVisible, setIsVisible}) {
  if (isVisible === true) {
    function toFalse(){
      setIsVisible(false)
          }
      return (        
    <div onClick={toFalse}  className={"succeded"}>
        
            <h1>The Form Has Been Submitted Successfully </h1>
        
    </div>
    )
  }else{
    return <></>
  }
}
