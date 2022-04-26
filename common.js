const userList = ["ALEXIS","JEAN-LOUIS","MARCO"];
const message = "JE SUIS DEV & MOBILE";
function somme(a,b){
    return a+b;
}
function soustraction(a,b){
    return a - b;
}
const getName = (name)=>`HELLO ${name}`;

class myClass{
    constructor(){
        console.log("THIS IS FROM CONSTRUCTOR");
    }
}

export {myClass,getName, soustraction, somme,message,userList};