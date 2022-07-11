// variables with arrays. First one with Strings and second one with numbers //
let userNames = ['Maya','Samira','Sumaya','Hanad','Ramla','Said','Liban','yusuf','Aisha','Siham'];
let userAges = [24,23,17,19,25,17,18,20,30,40]

// This variable is for the index of all variables //
let counter = 0;
 

// this loop will only print out the ages that are 18 or above 18 //

while(counter < userNames.length){
    if(userAges[counter] >=18){
    console.log(userNames[counter]);
    }
    counter++;  // adds one more//
}
 
// this loop will print out the names of everyone under 18 //

for(counter = 0; counter < userNames.length; counter++) {
    if(userNames[counter] <=18){
        console.log (userNames[counter]);
    }
}