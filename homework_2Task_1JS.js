let age = [17, 18, 60];
for (let i=0; i<3; i++){
    let b = i+1;
    
    const checkAge = function(age){
        if (age[i] < 18){
           console.log (b, "You don’t have access cause your age is" + " " + age[i] + " " + "It’s less then");
       }else if (age[i] >=  18 && age[i] < 60){
           console.log (b, "Welcome  !");
       }else if (age[i]  > 60){
           console.log (b, "Keep calm and look Culture channel");
       }else  
       {console.log (b, "Technical work");
       }}
       checkAge(age);
    }



    console.log(age[0])
let ty="comon"
console.log(ty[0])
console.log (ty.length)
console.log (age.length)
