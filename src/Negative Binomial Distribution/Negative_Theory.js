import React from 'react'
import Negative1 from '../assets/Images/Negative1.png';
export const Negative_Theory = () => {
    return (
        <>
        <br></br>
            <div className="container fluid">
                <div className="row getsolution">
                    <div className="col-lg-12 col-12 box">
                        <div className="input container">
                            <div className="row justify-content-center">
                                <div className="col-lg-12 col-12 ">
                                    <div className="container">
                                        <h4>What is a Negative Binomial Distribution?</h4>
                                        <p style={{fontWeight:'bold'}}>A negative binomial distribution (also called the Pascal Distribution) is a discrete 
                                            probability distribution for random variables in a negative binomial experiment.</p>
                                        <br></br>
                                        <p>The random variable is the number of repeated trials, X, that 
                                            produce a certain number of successes, r. In other words, it’s the number 
                                            of failures before a success. This is the main difference from the binomial 
                                            distribution: with a regular binomial distribution, you’re looking at the number 
                                            of successes. With a negative binomial distribution, it’s the number of failures that counts.</p><br></br>
                                            <p>Negative binomial distribution is a probability distribution of number of occurences 
                                                of successes and failures in a sequence of independent trails before a 
                                                specific number of success occurs. Following are the key points to be noted 
                                                about a negative binomial experiment.</p><br></br>
                                        <div className="formula" style={{fontSize:'18px'}}>
                                          <ul>
                                            <ol>• The experiment should be of x repeated trials.</ol>
                                            <ol> • Each trail have two possible outcome, one for success, another for failure.</ol>
                                            <ol> • Probability of success is same on every trial.</ol>
                                            <ol>• Output of one trial is independent of output of another trail.</ol>
                                            <ol>• Experiment should be carried out until r successes are observed, where r is mentioned beforehand.</ol>
                                        </ul>
                                        </div>

                                        <br></br>
                                        <br></br>
                                        <h4 style={{color:'#EA4335'}}> The Negative Binomial Distribution Formula :</h4>
                                        <img src={Negative1} className="graph-img" style={{marginLeft:'30%'}} /><br></br>
                                        
                                        <div className="formula" style={{fontSize:'18px'}}>
                                          <ul>
                                            <ol>Where:</ol><br></br>
                                            <ol> • n is the total number of trials;</ol>
                                            <ol> • r is the number of successes;</ol>
                                            <ol> • p is the probability of one success;</ol>
                                            <ol> • (n-1)C(r-1) is the number of combinations (so-called "n choose r"), using the values 
                                                (n-1) and (r-1); and • </ol>
                                            <ol>• P(Y=n) is the probability of the exact number of trials n needed to achieve r successes.</ol>    
                                        </ul>
                                        </div>
                                        <h4 style={{color:'#EA4335'}}> Mean:</h4>
                                        <div className="formula" style={{fontSize:'18px'}}>
                                          <ul>
                                            <ol>μ = r / P</ol><br></br>
                                            <ol> where r is the number of trials</ol>
                                            <ol>P=probability of success for any trial</ol>    
                                        </ul>
                                        </div> 
                                        <h4 style={{color:'#EA4335'}}>Negative binomial distribution examples :</h4>
                                        <p>Some examples of negative binomial distribution include:</p>
                                        <div className="formula" style={{fontSize:'18px'}}>
                                          <ul>
                                            <ol>• How many times you need to roll a die until you get three results of 6;</ol>
                                            <ol>• How many times you need to knock on doors during the Halloween night until you collect 20 candy bars;</ol>
                                            <ol> • How many times you need to flip a coin to get four heads; and</ol>
                                            <ol> • How many attempts you need to score three goals in a match. </ol>
                                        </ul>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="last-heading">If you like the page, please share or like. Questions, comments and suggestions are
                    appreciated.</p>
            </div>
        </>

    )
}
export default Negative_Theory;
