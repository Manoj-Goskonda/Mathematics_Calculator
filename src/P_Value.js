'use strict';


 function round(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
} 
 
  
omni.onResult(['prec'], function(ctx,prec){
  if (prec % 1 !== 0 || prec <= 0 ) { 
     ctx.addUnmetCondition('Precision must be a positive integer!');
  }
});

omni.onResult(['alpha'], function(ctx,alpha){
  if (alpha < 0 || alpha >1 ) { 
     ctx.addUnmetCondition('α must be a number between 0 and 1!');
  }
  
});
  
omni.onResult(['which_test'], function(ctx,which_test){
    
  
   which_test = which_test.toNumber();
 
  /* ctx.addHtml("<center><img width=55% src=https://wikimedia.org/api/rest_v1/media/math/render/svg/41c83f334b298784aa01ba0688ee144cf9fa00fb alt=arithmetic sequence formula></center>",
              {afterVariable: 'hidden'});
      ctx.addHtml("F(d1, d2):", {afterVariable: 'hidden'});
*/
   ctx.hideVariables('hidden','chi','tdf','F','Fdf1','Fdf2', 'empty','z', 'altchi','chidf', 't');
    var tdf = ctx.getNumberValue('tdf'); 
    var chidf = ctx.getNumberValue('chidf'); 
    var Fdf1 = ctx.getNumberValue('Fdf1'); 
    var Fdf2 = ctx.getNumberValue('Fdf2'); 
 
   var pval;
   if( which_test === 1) {
         ctx.addHtml('<b>Z-score</b>: the test statistic follows the standard normal distribution N(0,1).', {afterVariable: "prec"});
 
          	  ctx.showVariables('z');  
   }
   else if( which_test === 2) {
       ctx.showVariables('t','tdf');  
       if( tdf === undefined) {
  			 ctx.addHtml('<b>t-score</b>: the test statistic follows the t-distribution with d degrees of freedom.', {afterVariable: "prec"});
       } else {
			ctx.addHtml('<b>t-score</b>: the test statistic follows the t-distribution with '+tdf+' degrees of freedom.', {afterVariable: "prec"});         
   	   }
   }
  else if( which_test === 3) {
       ctx.showVariables('chi','chidf');  
       if( chidf === undefined) {
 	        ctx.addHtml('<b>χ²-score</b>: the test statistic follows the χ²-distribution with d degrees of freedom.', {afterVariable: "prec"});
        } else {
  		    ctx.addHtml('<b>χ²-score</b>: the test statistic follows the χ²-distribution with '+chidf+' degrees of freedom.', {afterVariable: "prec"});         
        } 
   }    
   else if( which_test === 4) {
       ctx.showVariables('F','Fdf1','Fdf2');  
       if( Fdf1 === undefined && Fdf2 === undefined) {
   		    ctx.addHtml('<b>F-score</b>: the test statistic follows the F-distribution (Snedecor\'s) with (d₁, d₂)-degrees of freedom.', {afterVariable: "prec"});
      } else  if( Fdf1 !== undefined && Fdf2 === undefined) {
		    ctx.addHtml('<b>F-score</b>: the test statistic follows the F-distribution (Snedecor\'s) with ('+Fdf1+', d₂)-degrees of freedom.', {afterVariable: "prec"});
      } else  if( Fdf1 === undefined && Fdf2 !== undefined) {
		    ctx.addHtml('<b>F-score</b>: the test statistic follows the F-distribution (Snedecor\'s) with (d₁, '+Fdf2+')-degrees of freedom.', {afterVariable: "prec"});
      } else {
      	    ctx.addHtml('<b>F-score</b>: the test statistic follows the F-distribution (Snedecor\'s) with ('+Fdf1+', '+Fdf2+')-degrees of freedom.', {afterVariable: "prec"});
      }
   }    
});

function zpval(z,alt){
     var pval;
  
      if(alt === 0) {
          pval = 2*zcdf(-mathjs.abs(z));
      } else if (alt ===-1) {
          pval = zcdf(z);
      } else if (alt === 1) {
          pval = 1-zcdf(z);
      }
  
	return pval;
}


function tpval(t,df,alt){
   var pval;
   if(alt === 0) {
          pval = 2*tcdf(-mathjs.abs(t),df);
       } else if (alt ===-1) {
          pval = tcdf(t,df);
       } else if (alt === 1) {
          pval = 1-tcdf(t,df);
       }
	return pval;
}


function chipval(chi,df,alt){
   var pval;
   if(alt === 0) {  
      var x = chicdf(chi,df);
      if (x<=0.5) {
              pval=2*x;
              } else {
              pval = 2*(1-x);
            }
       } else if (alt ===-1) {
          pval = chicdf(chi,df);
       } else if (alt === 1) {
          pval = 1-chicdf(chi,df);
       }
	return pval;
}



function Fpval(F,df1,df2,alt){
   var pval;
   if(alt === 0) {  
      var x = Fcdf(F,df1,df2);
      if (x<=0.5) {
              pval=2*x;
              } else {
              pval = 2*(1-x);
            }
       } else if (alt ===-1) {
          pval = Fcdf(F,df1,df2);
       } else if (alt === 1) {
          pval = 1-Fcdf(F,df1,df2);
       }
	return pval;
}

    

omni.onResult(['z'], function(ctx,z){
     z = z.toNumber();
     var alt = ctx.getNumberValue('alt'); 
   var which_test = ctx.getNumberValue('which_test'); 
   var prec = ctx.getNumberValue('prec'); 
   var alpha = ctx.getNumberValue('alpha'); 
    var pval =round(zpval(z,alt),prec);
     if (which_test===1) 
       {
   
       ctx.addHtml('<b>p-value &asymp; '+pval+'</b>');
        ctx.addHtml(interp(ctx,pval));
       ctx.addHtml("This decision is made at significance level <b>α = "+alpha+"</b>.");
        ctx.addHtml("<i>To change α, or to increase the precision with which p-value is calculated, click the advanced mode button below.</i>");  
       }
     });
 

 

omni.onResult(['t'], function(ctx,t){
     t= t.toNumber();
    var alpha = ctx.getNumberValue('alpha'); 
     var prec = ctx.getNumberValue('prec'); 
     var tdf = ctx.getNumberValue('tdf'); 
     var which_test = ctx.getNumberValue('which_test'); 
     var alt = ctx.getNumberValue('alt'); 
     var pval =round(tpval(t,tdf,alt),prec);
     if (which_test===2) 
     {
       ctx.addHtml('<b>p-value  &asymp; '+pval+'</b>');
       ctx.addHtml(interp(ctx,pval));
      ctx.addHtml("This decision is made at significance level <b>α = "+alpha+"</b>.");
        ctx.addHtml("<i>To change α, or to increase the precision with which p-value is calculated, click the advanced mode button below.</i>");  
     } 
 });
 
 


omni.onResult(['chi','chidf'], function(ctx,chi,chidf){
     chi= chi.toNumber();
     chidf = chidf.toNumber();
     var prec = ctx.getNumberValue('prec'); 
    var alpha = ctx.getNumberValue('alpha'); 
      var which_test = ctx.getNumberValue('which_test'); 
     var alt = ctx.getNumberValue('alt'); 
     var pval =round(chipval(chi,chidf,alt),prec);
     if (which_test===3) 
     {
       ctx.addHtml('<b>p-value  &asymp; '+pval+'</b>');
       ctx.addHtml(interp(ctx,pval));
      ctx.addHtml("This decision is made at significance level <b>α = "+alpha+"</b>.");
        ctx.addHtml("<i>To change α, or to increase the precision with which p-value is calculated, click the advanced mode button below.</i>");  
     } 
 });
    

omni.onResult(['Fdf1','Fdf2'], function(ctx,Fdf1,Fdf2){
     
     Fdf1 = Fdf1.toNumber();
     Fdf2 = Fdf2.toNumber();
        var which_test = ctx.getNumberValue('which_test'); 
      if (which_test===4) 
     {
 
     } 
 });



omni.onResult(['F','Fdf1','Fdf2'], function(ctx,F,Fdf1,Fdf2){
     F= F.toNumber();
     Fdf1 = Fdf1.toNumber();
     Fdf2 = Fdf2.toNumber();
    var alpha = ctx.getNumberValue('alpha'); 
      var prec = ctx.getNumberValue('prec'); 
      var which_test = ctx.getNumberValue('which_test'); 
     var alt = ctx.getNumberValue('alt'); 
     var pval = round(Fpval(F,Fdf1,Fdf2,alt),prec);
     if (which_test===4) 
     {
       ctx.addHtml('<b>p-value  &asymp; '+pval+'</b>');
       ctx.addHtml(interp(ctx,pval));
       ctx.addHtml("This decision is made at significance level <b>α = "+alpha+"</b>.");
        ctx.addHtml("<i>To change α, or to increase the precision with which p-value is calculated, click the advanced mode button below.</i>");  
     } 
 });


function interp(ctx,pval){
var interpretation;
var alpha = ctx.getNumberValue('alpha'); 
    if(pval <= alpha) {
   			interpretation = "Your result is <b>statistically significant</b>: you can reject the null hypothesis and accept the alternative.";
      } else   {
            interpretation = "Your result is <b>not statistically significant</b>: there is not enough evidence to reject the null hypothesis.";
    } 
   return interpretation;
}

 

/*
 * Special Functions for converting Z score to confidence interval from
 * https://www.fourmilab.ch/rpkp/experiments/analysis/zCalc.js
 */

var Z_MAX = 6;                    // Maximum ±z value
var ROUND_FLOAT = 6;              // Decimal places to round numbers

/*  The following JavaScript functions for calculating normal and
        chi-square probabilities and critical values were adapted by
        John Walker from C implementations
        written by Gary Perlman of Wang Institute, Tyngsboro, MA
        01879.  Both the original C code and this JavaScript edition
        are in the public domain.  */

/*  POZ  --  probability of normal z value

        Adapted from a polynomial approximation in:
                Ibbetson D, Algorithm 209
                Collected Algorithms of the CACM 1963 p. 616
        Note:
                This routine has six digit accuracy, so it is only useful for absolute
                z values <= 6.  For z values > to 6.0, poz() returns 0.0.
    */

function zcdf(z) {
  var y, x, w;

  if (z === 0.0) {
    x = 0.0;
  } else {
    y = 0.5 * Math.abs(z);
    if (y > (Z_MAX * 0.5)) {
      x = 1.0;
    } else if (y < 1.0) {
      w = y * y;
      x = ((((((((0.000124818987 * w
                  - 0.001075204047) * w + 0.005198775019) * w
                - 0.019198292004) * w + 0.059054035642) * w
              - 0.151968751364) * w + 0.319152932694) * w
            - 0.531923007300) * w + 0.797884560593) * y * 2.0;
    } else {
      y -= 2.0;
      x = (((((((((((((-0.000045255659 * y
                       + 0.000152529290) * y - 0.000019538132) * y
                     - 0.000676904986) * y + 0.001390604284) * y
                   - 0.000794620820) * y - 0.002034254874) * y
                 + 0.006549791214) * y - 0.010557625006) * y
               + 0.011630447319) * y - 0.009279453341) * y
             + 0.005353579108) * y - 0.002141268741) * y
           + 0.000535310849) * y + 0.999936657524;
    }
  }
  return z > 0.0 ? mathjs.bignumber(((x + 1.0) * 0.5)) : mathjs.bignumber(((1.0 - x) * 0.5));
}

 
function gammaln(x) {
  var j = 0;
  var cof = [
    76.18009172947146, -86.50532032941677, 24.01409824083091,
    -1.231739572450155, 0.1208650973866179e-2, -0.5395239384953e-5
  ];
  var ser = 1.000000000190015;
  var xx, y, tmp;
  tmp = (y = xx = x) + 5.5;
  tmp -= (xx + 0.5) * Math.log(tmp);
  for (; j < 6; j++)
    ser += cof[j] / ++y;
  return Math.log(2.5066282746310005 * ser / xx) - tmp;
}

function betacf(x, a, b) {
  var fpmin = 1e-30;
  var m = 1;
  var qab = a + b;
  var qap = a + 1;
  var qam = a - 1;
  var c = 1;
  var d = 1 - qab * x / qap;
  var m2, aa, del, h;

  // These q's will be used in factors that occur in the coefficients
  if (Math.abs(d) < fpmin)
    d = fpmin;
  d = 1 / d;
  h = d;

  for (; m <= 100; m++) {
    m2 = 2 * m;
    aa = m * (b - m) * x / ((qam + m2) * (a + m2));
    // One step (the even one) of the recurrence
    d = 1 + aa * d;
    if (Math.abs(d) < fpmin)
      d = fpmin;
    c = 1 + aa / c;
    if (Math.abs(c) < fpmin)
      c = fpmin;
    d = 1 / d;
    h *= d * c;
    aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2));
    // Next step of the recurrence (the odd one)
    d = 1 + aa * d;
    if (Math.abs(d) < fpmin)
      d = fpmin;
    c = 1 + aa / c;
    if (Math.abs(c) < fpmin)
      c = fpmin;
    d = 1 / d;
    del = d * c;
    h *= del;
    if (Math.abs(del - 1.0) < 3e-7)
      break;
  }

  return h;
}


function ibeta(x, a, b) {
  // Factors in front of the continued fraction.
  var bt = (x === 0 || x === 1) ?  0 :
    Math.exp(gammaln(a + b) - gammaln(a) -
             gammaln(b) + a * Math.log(x) + b *
             Math.log(1 - x));
  if (x < 0 || x > 1)
    return false;
  if (x < (a + 1) / (a + b + 2))
    // Use continued fraction directly.
    return bt * betacf(x, a, b) / a;
  // else use continued fraction after making the symmetry transformation.
  return 1 - bt * betacf(1 - x, b, a) / b;
}


 


function lowRegGamma(a, x) {
  var aln = gammaln(a);
  var ap = a;
  var sum = 1 / a;
  var del = sum;
  var b = x + 1 - a;
  var c = 1 / 1.0e-30;
  var d = 1 / b;
  var h = d;
  var i = 1;
  // calculate maximum number of itterations required for a
  var ITMAX = -~(Math.log((a >= 1) ? a : 1 / a) * 8.5 + a * 0.4 + 17);
  var an;

  if (x < 0 || a <= 0) {
    return NaN;
  } else if (x < a + 1) {
    for (; i <= ITMAX; i++) {
      sum += del *= x / ++ap;
    }
    return (sum * Math.exp(-x + a * Math.log(x) - (aln)));
  }

  for (; i <= ITMAX; i++) {
    an = -i * (i - a);
    b += 2;
    d = an * d + b;
    c = b + an / c;
    d = 1 / d;
    h *= d * c;
  }

  return (1 - h * Math.exp(-x + a * Math.log(x) - (aln)));
}

  function chicdf(x, dof) {
    if (x < 0)
      return 0;
    return lowRegGamma(dof / 2, x / 2);
  }

function Fcdf(x, df1, df2) {
    if (x < 0)
      return 0;
    return  ibeta((df1 * x) / (df1 * x + df2), df1 / 2, df2 / 2);
}

 function tcdf(x, dof) {
    var dof2 = dof / 2;
    return ibeta((x + Math.sqrt(x * x + dof)) /
                       (2 * Math.sqrt(x * x + dof)), dof2, dof2);
  }