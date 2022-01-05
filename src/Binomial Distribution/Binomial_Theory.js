import React from 'react'

export const Binomial_Theory = () => {
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
                                        <h4>What is Binomial Distribution?</h4>
                                        <p>The binomial distribution is a probability distribution that summarizes the
                                            likelihood that a value will take one of two independent values under a
                                            given set of parameters or assumptions. The underlying assumptions of
                                            the binomial distribution are that there is only one outcome for each trial,
                                            that each trial has the same probability of success, and that each trial is
                                            mutually exclusive, or independent of each other.</p>
                                        <br></br>
                                        <p>Binomial probability refers to the probability of exactly x successes on n
                                            repeated trials in an experiment which has two possible outcomes
                                            (commonly called a binomial experiment). If the probability of success on
                                            an individual trial is p , then the binomial probability is nCx*p  *(1-p)       .</p>
                                        <br></br>

                                        <h5 className="theory_question">The binomial distribution formula is :</h5>
                                        <br></br>
                                        <p className="text-center">b(x; n, P) = nCx * P  * q</p>
                                        <br></br>
                                        <div className="formula">

                                            <p>Where:</p>
                                            <p> b = binomial probability</p>
                                            <p>  x = total number of “successes” (pass or fail, heads or tails etc.</p>
                                            <p>  n is the number of trials</p>
                                            <p> P = probability of a success on an individual trial</p>
                                            <p>  q is the probability of failure</p>
                                        </div>

                                        <br></br>
                                        <br></br>

                                        <h5 className="theory_question">The binomial distribution arise for the following 4 conditions, when the
                                            event has :</h5>

                                        <div className="ml-5 mt-3 mb-2 pb-5">
                                            <p>1. n identical trials or experiments</p>
                                            <p>   2. Two possible outcomes for each trial or experiments are success and failure.</p>
                                            <p> 3. Each trials or experiments are independent, e.g. each coin toss doesn't affect the others.</p>
                                            <p>  4. P(success) = p is the probability of success same for each trial or experiments.</p>

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
export default Binomial_Theory;
