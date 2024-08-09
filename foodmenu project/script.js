let quantity=0;
let quantity1=0;
let quantity2=0;
let quantity3=0;
let quantity4=0;
let quantity5=0;

let plus = document.getElementById('plus');
let minus= document.getElementById('minus');

let plus1 = document.getElementById('plus1');
let minus1= document.getElementById('minus1');

let plus2 = document.getElementById('plus2');
let minus2= document.getElementById('minus2');

let plus3 = document.getElementById('plus3');
let minus3= document.getElementById('minus3');

let plus4 = document.getElementById('plus4');
let minus4= document.getElementById('minus4');

let plus5 = document.getElementById('plus5');
let minus5= document.getElementById('minus5');

let num = document.getElementById('num');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');
let num4 = document.getElementById('num4');
let num5 = document.getElementById('num5');

num.innerHTML = quantity;
num1.innerHTML = quantity1;
num2.innerHTML = quantity2;
num3.innerHTML = quantity3;
num4.innerHTML = quantity4;
num5.innerHTML = quantity5;

plus.addEventListener('click',()=>{
    quantity+=1;
    num.innerHTML = quantity;
});

minus.addEventListener('click',()=> {
    if(quantity>0){
        quantity-=1;
        num.innerHTML = quantity;
    }
    
});

plus1.addEventListener('click',()=>{
    quantity1+=1;
    num1.innerHTML = quantity1;
});

minus1.addEventListener('click',()=> {
    if(quantity1>0){
        quantity1-=1;
        num1.innerHTML = quantity1;
    }
    
});

plus2.addEventListener('click',()=>{
    quantity2+=1;
    num2.innerHTML = quantity2;
});

minus2.addEventListener('click',()=> {
    if(quantity2>0){
        quantity2-=1;
        num2.innerHTML = quantity2;
    }
    
});

plus3.addEventListener('click',()=>{
    quantity3+=1;
    num3.innerHTML = quantity3;
});

minus3.addEventListener('click',()=> {
    if(quantity3>0){
        quantity3-=1;
        num3.innerHTML = quantity3;
    }
    
});

plus4.addEventListener('click',()=>{
    quantity4+=1;
    num4.innerHTML = quantity4;
});

minus4.addEventListener('click',()=> {
    if(quantity4>0){
        quantity4-=1;
        num4.innerHTML = quantity4;
    }
    
});

plus5.addEventListener('click',()=>{
    quantity5+=1;
    num5.innerHTML = quantity5;
});

minus5.addEventListener('click',()=> {
    if(quantity5>0){
        quantity5-=1;
        num5.innerHTML = quantity5;
    }
    
});
