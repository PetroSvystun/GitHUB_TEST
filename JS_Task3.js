let CC = "55";
let age = Number(CC)
let AAA = typeof(age);
if (AAA == "number"){    
        const checkAge = function(age){
            if (age < 18){
               console.log ("You don’t have access cause your age is" + " " + age + " " + "It’s less then");
           }else if (age >=  18 && age < 60){
               console.log ("Welcome  !");
           }else if (age  > 60){
               console.log ("Keep calm and look Culture channel");
           }else  
           {console.log ("Technical work");
           }
        }
           checkAge(age);
        }
 else{
    console.log(false);
 }
 
//let CC = "u";
//console.log(typeof (CC)); 
//let num = Number(CC); 
//console.log(typeof (num))
//console.log(CC)
