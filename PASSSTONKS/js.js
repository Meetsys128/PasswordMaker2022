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
var bigData = "ABCDEFGHIJKLMNOPQRSTUVWXYZAAAAAAAA";
var smoData = "abcdefghijklmnopqrstuvwxyzaaaaaaaa";
var numData = "0123456789000000000000000000000000";
var smo = false;
var big = false;
var num = false;
    var str = inp.value;
    var complx = 1;



    for (var i=0; i < bigData.length; i++){
        for (var j=0; j < str.length; j++){
if(str[j] == smoData[i] && smo == false){
    smo = true;
    i = 0;
    j = 0;
    complx = 2;
}
if(smo == true && big == false){
    //code
    if(str[j] == bigData[i]){
        complx = 3;
        i =0;
        j = 0;
        big = true;
    }
}
if(big == true && num == false){
    if(str[j] == numData[i]){
        complx = 4;
        i =0;
        j = 0;
        num = true;
    }
}
if(num == true ){
    if(str[j] == symbols[i]){
        complx = 5;
        
        
        break;    }
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
        case(8): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 0 seconds";break;
            case(2): out.innerHTML = "Your password would become jam after 0 seconds";break;
            case(3): out.innerHTML = "Your password would become jam after 2 minutes";break;
            case(4): out.innerHTML = "Your password would become jam after 7 minutes";break;
            case(5): out.innerHTML = "Your password would become jam after 39 minutes";break;

        } break;
        case(9): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 0 seconds";break;
            case(2): out.innerHTML = "Your password would become jam after 10 seconds";break;
            case(3): out.innerHTML = "Your password would become jam after 1 hour";break;
            case(4): out.innerHTML = "Your password would become jam after 7 hours";break;
            case(5): out.innerHTML = "Your password would become jam after 2 days";break;

        } break;
        case(10): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 0 seconds";break;
            case(2): out.innerHTML = "Your password would become jam after 4 minutes";break;
            case(3): out.innerHTML = "Your password would become jam after 3 days";break;
            case(4): out.innerHTML = "Your password would become jam after 3 weeks";break;
            case(5): out.innerHTML = "Your password would become jam after 5 months";break;

        } break;
        case(11): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 0 seconds";break;
            case(2): out.innerHTML = "Your password would become jam after 2 hours";break;
            case(3): out.innerHTML = "Your password would become jam after 5 months";break;
            case(4): out.innerHTML = "Your password would become jam after 3 years";break;
            case(5): out.innerHTML = "Your password would become jam after 34 years";break;

        } break;
        case(12): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 2 seconds";break;
            case(2): out.innerHTML = "Your password would become jam after 2 days";break;
            case(3): out.innerHTML = "Your password would become jam after 24 years";break;
            case(4): out.innerHTML = "Your password would become jam after 200 years";break;
            case(5): out.innerHTML = "Your password would become jam after 3K years";break;

        } break;
        case(13): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 19 seconds";break;
            case(2): out.innerHTML = "Your password would become jam after 2 months";break;
            case(3): out.innerHTML = "Your password would become jam after 1K years";break;
            case(4): out.innerHTML = "Your password would become jam after 12K years";break;
            case(5): out.innerHTML = "Your password would become jam after 202K years";break;

        } break;
        case(14): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 3 minutes";break;
            case(2): out.innerHTML = "Your password would become jam after 4 years";break;
            case(3): out.innerHTML = "Your password would become jam after 64K years";break;
            case(4): out.innerHTML = "Your password would become jam after 750K years";break;
            case(5): out.innerHTML = "Your password would become jam after 16m years";break;

        } break;
        case(15): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 32 minutes";break;
            case(2): out.innerHTML = "Your password would become jam after 100 years";break;
            case(3): out.innerHTML = "Your password would become jam after 3m years";break;
            case(4): out.innerHTML = "Your password would become jam after 46K years";break;
            case(5): out.innerHTML = "Your password would become jam after 1bn years";break;

        } break;
        case(16): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 5 hours";break;
            case(2): out.innerHTML = "Your password would become jam after 3K years";break;
            case(3): out.innerHTML = "Your password would become jam after 173m years ";break;
            case(4): out.innerHTML = "Your password would become jam after 3bn years";break;
            case(5): out.innerHTML = "Your password would become jam after 92bn years";break;

        } break;
        case(17): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 2 seconds";break;
            case(2): out.innerHTML = "Your password would become jam after 0 seconds";break;
            case(3): out.innerHTML = "Your password would become jam after 2 seconds";break;
            case(4): out.innerHTML = "Your password would become jam after 7 seconds";break;
            case(5): out.innerHTML = "Your password would become jam after 31 seconds";break;

        } break;
        case(18): 
        switch(complx){
            case(1): out.innerHTML = "Your password would become jam after 0 seconds";break;
            case(2): out.innerHTML = "Your password would become jam after 0 seconds";break;
            case(3): out.innerHTML = "Your password would become jam after 2 seconds";break;
            case(4): out.innerHTML = "Your password would become jam after 7 seconds";break;
            case(5): out.innerHTML = "Your password would become jam after 31 seconds";break;

        } break;
       
       

        default:  out.innerHTML = "Your password would become jam after a time that can not be calculated";break;

        
    }
    out.innerHTML += " , your complexity was: "+ complx+ ", your length was: "+str.length;
});
