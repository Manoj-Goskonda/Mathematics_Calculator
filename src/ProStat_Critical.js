'use strict';


 function round(num, dec) {
  return Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec);
} 
 
  
omni.onResult(['prec'], function(ctx,prec){
  if (prec % 1 !== 0 || prec <= 0 || prec > 20) { 
     ctx.addUnmetCondition('Precision must be an integer between 1 and 20.');
  }
});
 
omni.define('testalpha', function (alpha) {
  return alpha > 0 && alpha < 1;
});

function testalpha (alpha) {
  return alpha >= 0;
}
  
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
 

   
   if( which_test === 1) {
         ctx.addHtml('The test statistic follows the standard normal distribution N(0,1).', {afterVariable: "prec"});
 
          	  ctx.showVariables('z');  
   }
   else if( which_test === 2) {
       ctx.showVariables('t','tdf');  
       if( tdf === undefined) {
  			 ctx.addHtml('The test statistic follows the t-distribution with d degrees of freedom.', {afterVariable: "prec"});
       } else {
			ctx.addHtml('The test statistic follows the t-distribution with '+tdf+' degrees of freedom.', {afterVariable: "prec"});         
   	   }
   }
  else if( which_test === 3) {
       ctx.showVariables('chi','chidf');  
       if( chidf === undefined) {
 	        ctx.addHtml('The test statistic follows the χ²-distribution with d degrees of freedom.', {afterVariable: "prec"});
        } else {
  		    ctx.addHtml('The test statistic follows the χ²-distribution with '+chidf+' degrees of freedom.', {afterVariable: "prec"});         
        } 
   }    
   else if( which_test === 4) {
       ctx.showVariables('F','Fdf1','Fdf2');  
      if( Fdf1 === undefined && Fdf2 === undefined) {
   		    ctx.addHtml('The test statistic follows the F-distribution with (d₁, d₂) degrees of freedom.', {afterVariable: "prec"});
      } else  if( Fdf1 !== undefined && Fdf2 === undefined) {
		    ctx.addHtml('The test statistic follows the F-distribution with ('+Fdf1+', d₂) degrees of freedom.', {afterVariable: "prec"});
      } else  if( Fdf1 === undefined && Fdf2 !== undefined) {
		    ctx.addHtml('The test statistic follows the F-distribution with (d₁, '+Fdf2+') degrees of freedom.', {afterVariable: "prec"});
      } else {
      	    ctx.addHtml('The test statistic follows the F-distribution with ('+Fdf1+', '+Fdf2+') degrees of freedom.', {afterVariable: "prec"});
      }
   }   
});
 



omni.onResult(['alpha'], function(ctx,alpha){
      alpha = alpha.toNumber();
   var alt = ctx.getNumberValue('alt'); 
   var which_test = ctx.getNumberValue('which_test'); 
   var prec = ctx.getNumberValue('prec'); 
        if (which_test===1) 
       {
          if (alt===0){ 
           ctx.addHtml("Critical value: &pm;"+round(zquantile(1-alpha/2),prec));  
          } else  if (alt===1){ 
      ctx.addHtml("Critical value: "+round(zquantile(1-alpha),prec));  
          } else  if (alt===-1){ 
        ctx.addHtml("Critical value: "+round(zquantile(alpha),prec));  
         }


          if (alt===0){ 
         ctx.addHtml("Critical region:");
           ctx.addHtml("(-&infin;, "+round(zquantile(alpha/2),prec)+"] &cup; ["+round(zquantile(1-alpha/2),prec)+', &infin;)');  
          } else  if (alt===1){ 
           ctx.addHtml("Critical region: ["+round(zquantile(1-alpha),prec)+', &infin;)');  
          } else  if (alt===-1){ 
           ctx.addHtml("Critical region: (-&infin;, "+round(zquantile(alpha),prec)+"]");  
          }
         
 		 ctx.addHtml("<i>To increase the precision with which the critical values are calculated, click the advanced mode.</i>");  
       }
     });
 

 

omni.onResult(['alpha','tdf'], function(ctx,alpha,tdf){
      alpha = alpha.toNumber();
      var prec = ctx.getNumberValue('prec'); 
    tdf= tdf.toNumber();
     var which_test = ctx.getNumberValue('which_test'); 
     var alt = ctx.getNumberValue('alt'); 
      if (which_test===2) 
       {
           if (alt===0){ 
           ctx.addHtml("Critical value: &pm;"+round(tquantile(1-alpha/2,tdf),prec));  
          } else  if (alt===1){ 
      ctx.addHtml("Critical value: "+round(tquantile(1-alpha,tdf),prec));  
          } else  if (alt===-1){ 
        ctx.addHtml("Critical value: "+round(tquantile(alpha,tdf),prec));  
         }
  		
          if (alt===0){ 
            ctx.addHtml("Critical region:");
           ctx.addHtml("(-&infin;, "+round(tquantile(alpha/2,tdf),prec)+"] &cup; ["+round(tquantile(1-alpha/2,tdf),prec)+', &infin;)');  
          } else  if (alt===1){ 
           ctx.addHtml("Critical region: ["+round(tquantile(1-alpha,tdf),prec)+', &infin;)');  
          } else  if (alt===-1){ 
           ctx.addHtml("Critical region: (-&infin;, "+round(tquantile(alpha,tdf),prec)+"]");  
          }
         
 		 ctx.addHtml("<i>To increase the precision with which the critical values are calculated, click the advanced mode below.</i>");  
       }
 });
 
 


omni.onResult(['alpha','chidf'], function(ctx,alpha,chidf){
    chidf = chidf.toNumber();
   alpha = alpha.toNumber();
     var prec = ctx.getNumberValue('prec'); 
    var which_test = ctx.getNumberValue('which_test'); 
     var alt = ctx.getNumberValue('alt'); 
      if (which_test===3) 
       {
            if (alt===0){ 
           ctx.addHtml("Critical values: "+round(chiquantile(alpha/2,chidf),prec)+" and "+round(chiquantile(1-alpha/2,chidf),prec) );  
          } else  if (alt===1){ 
      ctx.addHtml("Critical value: "+round(chiquantile(1-alpha,chidf),prec));  
          } else  if (alt===-1){ 
        ctx.addHtml("Critical value: "+round(chiquantile(alpha,chidf),prec));  
         }
   		
          if (alt===0){ 
            ctx.addHtml("Critical region:");
           ctx.addHtml("[0, "+round(chiquantile(alpha/2,chidf),prec)+"] &cup; ["+round(chiquantile(1-alpha/2,chidf),prec)+', &infin;)');  
          } else  if (alt===1){ 
           ctx.addHtml("Critical region: ["+round(chiquantile(1-alpha,chidf),prec)+', &infin;)');  
          } else  if (alt===-1){ 
           ctx.addHtml("Critical region: [0, "+round(chiquantile(alpha,chidf),prec)+"]");  
          }
         
 		 ctx.addHtml("<i>To increase the precision with which the critical values are calculated, click the advanced mode below.</i>");  
       }
 });
    
 


omni.onResult(['alpha','Fdf1','Fdf2'], function(ctx,alpha,Fdf1,Fdf2){
  alpha = alpha.toNumber();
     Fdf1 = Fdf1.toNumber();
     Fdf2 = Fdf2.toNumber();
       var prec = ctx.getNumberValue('prec'); 
      var which_test = ctx.getNumberValue('which_test'); 
     var alt = ctx.getNumberValue('alt'); 
      if (which_test===4) 
    {
        if (alt===0){ 
           ctx.addHtml("Critical values: "+round(Fquantile(alpha/2,Fdf1,Fdf2),prec)+" and "+round(Fquantile(1-alpha/2,Fdf1,Fdf2),prec) );  
          } else  if (alt===1){ 
      ctx.addHtml("Critical value: "+round(Fquantile(1-alpha,Fdf1,Fdf2),prec));  
          } else  if (alt===-1){ 
        ctx.addHtml("Critical value: "+round(Fquantile(alpha,Fdf1,Fdf2),prec));  
         }
 		
          if (alt===0){ 
            ctx.addHtml("Critical region:");
           ctx.addHtml("[0, "+round(Fquantile(alpha/2,Fdf1,Fdf2),prec)+"] &cup; ["+round(Fquantile(1-alpha/2,Fdf1,Fdf2),prec)+', &infin;)');  
          } else  if (alt===1){ 
           ctx.addHtml("Critical region: ["+round(Fquantile(1-alpha,Fdf1,Fdf2),prec)+', &infin;)');  
          } else  if (alt===-1){ 
           ctx.addHtml("Critical region: [0, "+round(Fquantile(alpha,Fdf1,Fdf2),prec)+"]");  
          }        
        ctx.addHtml("<i>To increase the precision with which the critical values are calculated, click the advanced mode below.</i>");  
       }
 });

 
 

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

/*  CRITZ  --      Compute critical normal z value to
                   produce given p.  We just do a bisection
                   search for a value within CHI_EPSILON,
                   relying on the monotonicity of pochisq(). */

function zquantile(p) {
  var Z_EPSILON = 0.000001;     /* Accuracy of z approximation */
  var minz = -Z_MAX;
  var maxz = Z_MAX;
  var zval = 0.0;
  var pval;

  if (p < 0.0 || p > 1.0) {
    return -1;
  }

  while ((maxz - minz) > Z_EPSILON) {
    pval = zcdf(zval);
    if (pval > p) {
      maxz = zval;
    } else {
      minz = zval;
    }
    zval = (maxz + minz) * 0.5;
  }
 
  
  return(zval);
}

function tquantile(p, dof) {
    var x = ibetainv(2 * Math.min(p, 1 - p), 0.5 * dof, 0.5);
    x = Math.sqrt(dof * (1 - x) / x);
    return (p > 0.5) ? x : -x;
  }

function Fquantile(x, df1, df2) {
    return df2 / (df1 * (1 / ibetainv(x, df1 / 2, df2 / 2) - 1));
  }

function chiquantile(p, dof) {
    return 2 * gammapinv(p, 0.5 * dof);
  }


function ibetainv(p, a, b) {
  var EPS = 1e-8;
  var a1 = a - 1;
  var b1 = b - 1;
  var j = 0;
  var lna, lnb, pp, t, u, err, x, al, h, w, afac;
  if (p <= 0)
    return 0;
  if (p >= 1)
    return 1;
  if (a >= 1 && b >= 1) {
    pp = (p < 0.5) ? p : 1 - p;
    t = Math.sqrt(-2 * Math.log(pp));
    x = (2.30753 + t * 0.27061) / (1 + t* (0.99229 + t * 0.04481)) - t;
    if (p < 0.5)
      x = -x;
    al = (x * x - 3) / 6;
    h = 2 / (1 / (2 * a - 1)  + 1 / (2 * b - 1));
    w = (x * Math.sqrt(al + h) / h) - (1 / (2 * b - 1) - 1 / (2 * a - 1)) *
        (al + 5 / 6 - 2 / (3 * h));
    x = a / (a + b * Math.exp(2 * w));
  } else {
    lna = Math.log(a / (a + b));
    lnb = Math.log(b / (a + b));
    t = Math.exp(a * lna) / a;
    u = Math.exp(b * lnb) / b;
    w = t + u;
    if (p < t / w)
      x = Math.pow(a * w * p, 1 / a);
    else
      x = 1 - Math.pow(b * w * (1 - p), 1 / b);
  }
  afac = -gammaln(a) - gammaln(b) + gammaln(a + b);
  for(; j < 10; j++) {
    if (x === 0 || x === 1)
      return x;
    err = ibeta(x, a, b) - p;
    t = Math.exp(a1 * Math.log(x) + b1 * Math.log(1 - x) + afac);
    u = err / t;
    x -= (t = u / (1 - 0.5 * Math.min(1, u * (a1 / x - b1 / (1 - x)))));
    if (x <= 0)
      x = 0.5 * (x + t);
    if (x >= 1)
      x = 0.5 * (x + t + 1);
    if (Math.abs(t) < EPS * x && j > 0)
      break;
  }
  return x;
}


function gammapinv(p, a) {
  var j = 0;
  var a1 = a - 1;
  var EPS = 1e-8;
  var gln = gammaln(a);
  var x, err, t, u, pp, lna1, afac;

  if (p >= 1)
    return Math.max(100, a + 100 * Math.sqrt(a));
  if (p <= 0)
    return 0;
  if (a > 1) {
    lna1 = Math.log(a1);
    afac = Math.exp(a1 * (lna1 - 1) - gln);
    pp = (p < 0.5) ? p : 1 - p;
    t = Math.sqrt(-2 * Math.log(pp));
    x = (2.30753 + t * 0.27061) / (1 + t * (0.99229 + t * 0.04481)) - t;
    if (p < 0.5)
      x = -x;
    x = Math.max(1e-3,
                 a * Math.pow(1 - 1 / (9 * a) - x / (3 * Math.sqrt(a)), 3));
  } else {
    t = 1 - a * (0.253 + a * 0.12);
    if (p < t)
      x = Math.pow(p / t, 1 / a);
    else
      x = 1 - Math.log(1 - (p - t) / (1 - t));
  }

  for(; j < 12; j++) {
    if (x <= 0)
      return 0;
    err = lowRegGamma(a, x) - p;
    if (a > 1)
      t = afac * Math.exp(-(x - a1) + a1 * (Math.log(x) - lna1));
    else
      t = Math.exp(-x + a1 * Math.log(x) - gln);
    u = err / t;
    x -= (t = u / (1 - 0.5 * Math.min(1, u * ((a - 1) / x - 1))));
    if (x <= 0)
      x = 0.5 * (x + t);
    if (Math.abs(t) < EPS * x)
      break;
  }

  return x;
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