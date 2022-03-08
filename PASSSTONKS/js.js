const len = document.getElementById("len");
const numO = document.getElementById("numO");
const lowO = document.getElementById("lowO");
const letO = document.getElementById("letO");
const sumA = document.getElementById("symA");
const butt = document.getElementById("butt");
const result = document.getElementById("result");
butt.addEventListener("click",e => {
e.preventDefault();
GeneratePassword();



});
const GeneratePassword = function(){
   
    var leng = len.value;
    if(leng == ""){
        leng="0";
    }
    var randomSTR = ""
if(numO.checked == true){
    console.log("gg");
randomSTR += "1234567890";
}
if(lowO.checked == true&&letO.checked == false){
    
    randomSTR += "abcdefghijklmnopqrstuvwxyz";
}
else if (letO.checked == true){
    randomSTR += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
}
if(sumA.checked == true){
    randomSTR += ' !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';;
}
var password = "";
for (var i = 0; i < leng; i++){
   password += randomSTR.charAt(Math.floor(Math.random() * randomSTR.length));

}

result.innerHTML = "This will be your passstonk: "+ password;
}

//rating passwords

const inp = document.getElementById("inp");
const out = document.getElementById("out");
inp.addEventListener("keyup", e => {
   
var symbols =' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
var bignsmol = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var big = false;
    var str = inp.value;
    var complx = 1;
    for (var i=0; i < bignsmol.length; i++){
        for (var j=0; j < str.length; j++){
if(str[j] == bignsmol[i] && big == false){
    big = true;
    i = 0;
    j = 0;
}
if(big = true){
    //code
}
if(complx ==  5){
    break;
}
        }
    }



    for (var i=0; i < symbols.length; i++){
        for (var j=0; j < str.length; j++){
if(str[j] == symbols[i]){
    complx = 5; break;
}
if(complx ==  5){
    break;
}
        }
    }
    switch(str.length){
        case(0): out.innerHTML = "Your password would become jam after 0 seconds"; break;
        case(1): out.innerHTML = "Your password would become jam after 0 seconds";break;
        case(2): out.innerHTML = "Your password would become jam after 0 seconds";break;
        case(3): out.innerHTML = "Your password would become jam after 0 seconds";break;
        case(4): out.innerHTML = "Your password would become jam after 0 seconds";break;
        case(5): out.innerHTML = "Your password would become jam after 0 seconds";break;
        case(6): out.innerHTML = "Your password would become jam after 0 seconds";break;
        case(7): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 0 seconds";break;
            case(2): out.innerHTML = "Your password would become jam after 0 seconds";break;
            case(3): out.innerHTML = "Your password would become jam after 2 seconds";break;
            case(4): out.innerHTML = "Your password would become jam after 7 seconds";break;
            case(5): out.innerHTML = "Your password would become jam after 31 seconds";break;

        } break;
        default:  out.innerHTML = "Your password would become jam after a time that can not be calculated";break;

        
    }
});
