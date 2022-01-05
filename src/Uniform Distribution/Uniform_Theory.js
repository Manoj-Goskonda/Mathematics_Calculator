import React from 'react'
import Uniform3 from '../assets/Images/Uniform3.png'
const Binomial_Theory = () => {
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
                                        <br></br>
                                        <br></br>
                                        <h4>What is Uniform Distribution?</h4>
                                        <p>In statistics, uniform distribution refers to a type of probability distribution 
                                            in which all outcomes are equally likely. A deck of cards has within it uniform 
                                            distributions because the likelihood of drawing a heart, a club, a diamond, or a 
                                            spade is equally likely. A coin also has a uniform distribution because the probability 
                                            of getting either heads or tails in a coin toss is the same.</p>
                                        <br></br>
                                        <br></br>                                    
                                        <div className="formula" style={{fontSize:"20px"}}>
                                        <ul>
                                            <ol>• Uniform distributions are probability distributions with equally likely outcomes.</ol><br></br>
                                            <ol>• In a discrete uniform distribution, outcomes are discrete and have the same probability.</ol><br></br>
                                            <ol>• In a continuous uniform distribution, outcomes are continuous and infinite.</ol><br></br>
                                        </ul>
                                        </div>
                                        <br></br>
                                        <h5 className="theory_question">Uniform distribution formula :</h5>
                                        <div className='formula' style={{marginLeft:'30%'}}><img src={Uniform3} /></div><br></br>

                                        <h5 className="theory_question">Explanation of the Uniform distribution Formula :</h5>
                                        <div className="formula" style={{fontSize:"20px"}}>
                                        <ul>
                                            <ol>• Step 1: Firstly, determine the maximum and minimum value.</ol>
                                            <ol>• Step 2: Next, determine the length of the interval by deducting the minimum value from the maximum value.</ol>
                                            <ol>• Step 3: Next, determine the probability density function by dividing the unity from the interval length.</ol>
                                            <ol>• Step 4: Next, for the probability distribution function, determine the mean of the distribution by adding the 
                                                maximum and minimum value followed by division of resulting value from two.</ol>
                                            <ol>• Step 5: Next, determine the variance of the uniform distribution by deducting minimum value from the maximum value 
                                                further raised to the power of two and followed by the division of resulting value with twelve.</ol>  
                                            <ol>• Step 6: Next, determine the standard deviation of the distribution by taking the square root of the variance</ol><br></br>    
                                        </ul>
                                        </div>
                                        <h5 className="theory_question">Expectation and Variance :</h5>
                                        <p>If X ~ U(a,b), then :</p>
                                        <div className="formula">
                                        <p>• E(X) = ½ (a + b)</p>
                                        <p>• Var(X) = (1/12)(b - a)2 </p>
                                        </div><br></br>
                                        <h5 className="theory_question">The main properties of the uniform distribution are :</h5>
                                        <div className="formula">
                                        <p>• It is continuous (and hence, the probability of any singleton event is zero)</p>
                                        <p>• It is determined by two parameters: the lower (a) and upper (b) limits </p>
                                        </div><br></br>
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
export default Binomial_Theory;
