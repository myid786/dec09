//    function mul (a,b,c){

//       return function mul2 (b){
          
//        return function mul3 (c){
//             console.log(a*b*c);
//         }


     
//     }

    
    
// }
// mul(6)(5)(2);
// ----------------------------------
// method---1


function mul(){
    var a, b ,c ,d
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c=Number(document.getElementById("third").value);
    d=a*b*c;
    document.getElementById("answer").value = d;
}
a=document.getElementById("first").value;
a.addEventListener("clicl", mul());




// function mul(a,b,c){
//     return function mul2(b){
//         return function mul3(c){
//              var d=a*b*c;
            
//             document.getElementById("answer").value=d;

//         }
//     }
    
// }

function multiply(a,b){
     var c=a*b;
     return c;

    
}


