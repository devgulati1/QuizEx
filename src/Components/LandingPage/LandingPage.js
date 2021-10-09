import React,{useState} from 'react'
import "./LandingPage.css";
import heroImg from "../../../src/Images/heroImg.svg";
import Quiz from '../Quiz/Quiz';

const LandingPage = (props) => {
    const [startBtn,setStartBtn]=useState(false);
    // START BUTTON HANLDER
    const startBtnHandler=()=>{
        console.log("clicked start btn");
        setStartBtn(true);
         props.btnClicked(true);

        

    }
    return (
        <div className="landing-page  container">
            <div className="row">
         <h1 className="text-center">QuizEx</h1>
          <div className="landing-page__hero  col-lg-12">
              <div className="row">
              <div className="quiz-instruction-section col-lg-6 col-md-6 col-sm-12 col-xs-12  ">

              <h2 id="heading-hero">Quiz Instructions</h2>
              <p id="para">The quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module. No data will be collected on the website regarding your responses or how many times you take the quiz.
                  <br/>
                  Each question in the quiz is of multiple-choice. Read each question carefully, and click on the button next to your response that is based on the information covered on the topic in the module
              </p>
              </div>
              <div className="landing-page__hero__img-section col-lg-6 col-md-6  col-sm-12 col-xs-12">
          <img  id="imgHero" src={heroImg}  alt={"hero img "}></img> 
          </div>
          </div>
          </div>
          <button className="btn btn-success  col-lg-12"  onClick={startBtnHandler}>Start </button>
        </div>
        </div>
    )
}

export default LandingPage
