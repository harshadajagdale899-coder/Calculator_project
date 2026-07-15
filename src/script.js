
let sign_val ;
let num1  ;

function number(val){
   let display = document.getElementById("display");
   display.value += val ;
}

function operator(sign){
       let display = document.getElementById("display");
       num1 = Number(display.value);
       sign_val = sign ;
       display.value = "";
}

function dot(){
    let display = document.getElementById('display');
    display.value += '.' ;
}

function equal_to(){
   let display = document.getElementById("display");
    let num2 = Number(display.value);
    let result = 0;
    if(sign_val== '+'){
      result = num1 + num2 ;
    }else if(sign_val == '-'){
      result = num1-num2;
    }else if(sign_val == 'X'){
      result = num1 * num2;
    }else if(sign_val == '/'){
       if(num2 == 0){
          result = 0;
       }else{
          result = num1/num2;
       }
    }else{
      result = num1 % num2;

    }
    display.value =  result ;

}

function  clearDisplay(){
    let display = document.getElementById('display');
    display.value = "" ;
}