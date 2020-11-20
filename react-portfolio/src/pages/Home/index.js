import React from "react"
import './Home.css';
import Me from '../../assets/me.jpg'



function Home(){
    return(
        <>
            <div className="heroImage">
                <div className="heroText">
                    Farhin Chowdhury
                    <div className="socials">
                        <a href="https://github.com/FarhinChowdhury"><i class="fab fa-github-square"></i></a>
                        <a href="https://www.linkedin.com/in/farhin-chowdhury-49905a173/"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>

            <div className="row">
                <div id= "title"className="col-lg-3">
                    <h1> About Me:</h1>
                </div>
                <div className="col-lg-9">
                        <div className="card" id="aboutme-text">
                            <div className="cardBody">
                                <p>

                                    <b>She/her 
                                    <br/>

                                    UofT BA in Anthropology and International Development Studies coding my life away in Toronto. 

                                    </b>
                                    <br/><br/>

                                    Welcome! It’s Farhin here. 
                                    <br/><br/>
                                    My topsy turvy career path along can speak to my new found interest for coding in 2020. Lost yet hopeful, I joined a coding bootcamp in the Fall to find myself unravelling into the exciting world of code and started to imagine the life of a full stack developer. 
                                    <br/><br/>

                                    Perhaps the number of interconnected steps, strokes and commands resonate with my love for dancing from a very young age. Stemming from dance lessons since the age of five I rarely get to practice my passion anymore, but that doesn’t stop me from swinging around my home whenever I need to clear my mind. 

                                    <br/><br/>
                                    When I am not dancing or thinking of coding my way out of the life, I prefer boarding a plane,and when that’s out of the picture I’ll indulge in animated movies and cooking up a storm at home. 

                                    <br/><br/>
                                    Unlike the other places my career has taken me, this new space makes me feel like I belong. The lustre of the front end and the investigations in the backend keep me wired to learn more. It also makes me wonder why I didn’t take it up seriously in my earlier years. 

                                    I invite you to a small portfolio that continues to grow, a linked profile calling for our connection and a GitHub page that makes you come back.
                                    <br/>
                                </p>   
                            </div>


                    </div>



                </div>
            </div>
        
        </>
        
    )
}

export default Home;