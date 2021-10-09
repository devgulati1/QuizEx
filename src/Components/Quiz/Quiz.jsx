import React,{useState,useEffect} from 'react'
import "./Quiz.css";
import QuizList from "../QuesList";
import Quizlist from '../QuesList';
const Quiz = (props) => {

    const [ submitAns,setSubmitAns]=useState("");
    const[currentIndex,setCurrentIndex]=useState(0);
    const[result,setResult]=useState(0);
   var status=false;

//    empty array to store ans of users
let ansStoreArr=[];
console.log(ansStoreArr)
    
    
//       INPUT RADIO VAL HANDLER
    const ansValHanlder=(e)=>{

 console.log(e.target.value)
 setSubmitAns(e.target.value);
 
 
 

    }
    //     ANS SUBMIT HANDLER
    // const ansSubmitHanlder=(e)=>{
    //    console.log(" ans sumbit user "+submitAns)
        
    //     e.preventDefault();
    //     // console.log(QuizList[currentIndex].ans)
    //     // console.log(currentIndex)
    //     // if(QuizList[currentIndex].ans===submitAns){
    //     //     alert("your ans is correct");
    //     // }else{
    //     //     alert("your ans is wrong");
    //     // }

      
       
        //        BUTTON PRESS NEXT
           const nextQuesHandler=(e)=>{

              e.preventDefault();
              
              document.querySelector('.radio-input').checked = false;
              
               if(QuizList.length-1===currentIndex){
                console.log("inside last quiz ");
                console.log("result inside last quiz is  "+result);
                checkAns();
            if(status===true){
                props.showResult(true,result+1,...ansStoreArr);
            }else{
                 props.showResult(true,result,...ansStoreArr);
            }
               }
              
                
                  
              
            
            checkAns();
           
            setCurrentIndex(currentIndex+1);
           
         
        }
        //      FUNC TO CHECK WHETHER ANS IS CORRECT OR NOT 
        const checkAns=()=>{
            console.log(QuizList[currentIndex].ans)
            console.log("curr ind is  "+currentIndex)
            console.log("submit ans "+submitAns)
            ansStoreArr.push(submitAns);
            console.log(ansStoreArr)
            if(QuizList[currentIndex].ans===submitAns){
                setResult(result+1);
                console.log("result is  "+result)
                alert("your ans is correct");
                status=true;
               
               
            }else{
                alert("your ans is wrong");
                status=false;
              
            }
        }
       

    
        
    return (
        <div className="quiz-container">
            <div className="quiz">
            <form action="">
             <h2>{QuizList[currentIndex].ques} </h2> 
            
            
                 {QuizList[currentIndex].option.map(city=>(
                 <div>
                     <input className="radio-input" type="radio" value={city} onChange={ansValHanlder} name="ans" />
                     <label htmlFor={city}>{city}</label><br/>
                 </div>))
                    

                 }
            
             <button className="btn-quiz  btn-success" onClick={nextQuesHandler}>Next Ques</button>
             </form>
            
            </div>
        </div>
    )
                }
            

export default Quiz
