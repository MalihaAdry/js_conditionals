const salary = 24001;
const isBCS = true;
const height = 68;
const hasCar = false;
//AND ar khetre 2ta condition e mante hobe
// if(salary > 20000 && height > 66){
//     console.log('Su--patro');
// }
// else{
//     console.log('onno patro khuji');
// }


// //OR ar khetre 1ta manlei cholbe.
// if(salary > 25000 || height > 72 || isBCS == true){
//     console.log('eso baba kobul')
// } 
// else{
//     console.log('vaag tui mokbul')
// }

//--------------------COMPLEX CONDITION-----------------
if((salary > 25000 && hasCar == true) || isBCS== true){
    console.log('sobai raji');
}

if((salary > 25000 && hasCar == true) && isBCS== true){
    console.log('sobai raji');
}