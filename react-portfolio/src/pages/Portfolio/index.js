import React from "react";
import Card from "../../components/Card"
import WeatherImg from "../../assets/weatherapp.png"
import BurgerImg from "../../assets/burgerapp.png"
import QuizImg from "../../assets/quiz.png"
import Project2Img from "../../assets/Project2.png"
import BudgetImg from "../../assets/budget-tracker.png"
import './Portfolio.css'


function Portfolio(){
    return(
        <>
        <header>
            <center> <h1 id="portfolioTitle">Portfolio:</h1></center>
            

        </header>
        <div className="container">
            
            <div className="row">
                <div className="col-lg-6">
                    <Card name="Project 2: Fandomzzz"
                    img={Project2Img}
                    link="https://stormy-depths-87128.herokuapp.com/"
                    
                    />
                </div>
                <div className="col-lg-6">
                    <Card name="Coding Quiz" 
                    img={QuizImg}
                    link="https://farhinchowdhury.github.io/Homework4_Quiz/"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <Card name="Project 1: TravelBug" 
                    img="https://user-images.githubusercontent.com/70531552/95394897-68871a80-08cb-11eb-8785-06631ed979ec.png"
                    link ="https://github.com/FarhinChowdhury/TravelBug"
                    />
                </div>
                <div className="col-lg-6">
                    <Card name="Weather App"
                    img= {WeatherImg}
                    link ="https://farhinchowdhury.github.io/Homework6_Weather/"
                     />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6">
                    <Card name="Burger App" 
                    img={BurgerImg}
                    link="https://shrouded-headland-26156.herokuapp.com/"
                    />
                </div>
                <div className="col-lg-6">
                    <Card name="Budget Tracker"
                    img={BudgetImg}
                    link="https://nameless-island-78488.herokuapp.com/" />
                </div>
            </div>
        </div>
    </>
    )
}

export default Portfolio;