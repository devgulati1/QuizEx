import React,{useState} from "react"
import Quiz from "../Quiz/Quiz"
import Result from "../Result/Result"


const ShowData = (props) => {
    const [result,setResult]=useState(0);
    const [status,setStatus]=useState(false);
    const [arr,setArr]=useState([]);

    const showResultOrQiz=(value,inputResult,...ansStoreArr)=>{
        console.log("val of show result or quiz  "+value);
        setStatus(value);
        getResultHandler(inputResult,...ansStoreArr);
      }
      const getResultHandler=(result,...ansStoreArr)=>{
          setResult(result);
          setArr(...ansStoreArr);
          console.log( "result handler is  "+result)
          console.log("arr is "+ansStoreArr)
          
     
    }
    
      
    return (
        <div>
                {status?<Result  result={result} ansStoreArr={arr}/>:<Quiz showResult={showResultOrQiz} />}
        </div>
    )
}

export default ShowData
